(function () {
  const pdfJsUrl = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
  const pdfJsWorkerUrl = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  let pdfJsPromise;

  function debounce(callback, delay) {
    let timeoutId;

    return function debounced() {
      const context = this;
      const args = arguments;

      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(function () {
        callback.apply(context, args);
      }, delay);
    };
  }

  function ensurePdfJs() {
    if (window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = pdfJsWorkerUrl;
      return Promise.resolve(window.pdfjsLib);
    }

    if (pdfJsPromise) {
      return pdfJsPromise;
    }

    pdfJsPromise = new Promise(function (resolve, reject) {
      const existingScript = document.querySelector("script[data-pdfjs-lib='true']");

      function handleLoad() {
        if (!window.pdfjsLib) {
          reject(new Error("pdf.js failed to initialize."));
          return;
        }

        window.pdfjsLib.GlobalWorkerOptions.workerSrc = pdfJsWorkerUrl;
        resolve(window.pdfjsLib);
      }

      if (existingScript) {
        existingScript.addEventListener("load", handleLoad, { once: true });
        existingScript.addEventListener("error", function () {
          reject(new Error("Unable to load pdf.js."));
        }, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = pdfJsUrl;
      script.async = true;
      script.dataset.pdfjsLib = "true";
      script.addEventListener("load", handleLoad, { once: true });
      script.addEventListener("error", function () {
        reject(new Error("Unable to load pdf.js."));
      }, { once: true });
      document.head.appendChild(script);
    });

    return pdfJsPromise;
  }

  function getViewerWidth(viewerElement) {
    return Math.max(Math.floor(viewerElement.clientWidth - 2), 320);
  }

  function getViewerTitle(viewerElement) {
    return viewerElement.dataset.pdfTitle || "PDF document";
  }

  function setDownloadFallback(statusElement, pdfUrl, message) {
    const downloadLink = document.createElement("a");

    downloadLink.href = pdfUrl;
    downloadLink.textContent = "Download the PDF";

    statusElement.hidden = false;
    statusElement.replaceChildren(
      document.createTextNode(message + " "),
      downloadLink,
      document.createTextNode(" instead.")
    );
  }

  async function renderViewer(viewerElement, pdfjsLib, forceRender) {
    const statusElement = viewerElement.querySelector(".pdf-inline-viewer__status");
    const pagesElement = viewerElement.querySelector(".pdf-inline-viewer__pages");
    const pdfUrl = viewerElement.dataset.pdfSrc;
    const pdfTitle = getViewerTitle(viewerElement);
    const renderWidth = getViewerWidth(viewerElement);

    pagesElement.setAttribute("aria-label", pdfTitle + " pages");

    if (!forceRender && viewerElement.__lastRenderWidth && Math.abs(renderWidth - viewerElement.__lastRenderWidth) < 16) {
      return;
    }

    viewerElement.__lastRenderWidth = renderWidth;
    viewerElement.__renderToken = (viewerElement.__renderToken || 0) + 1;
    const renderToken = viewerElement.__renderToken;

    statusElement.hidden = false;
  statusElement.textContent = "Loading " + pdfTitle + " preview...";
    pagesElement.replaceChildren();

    try {
      if (!viewerElement.__pdfDocumentPromise) {
        viewerElement.__pdfDocumentPromise = pdfjsLib.getDocument(pdfUrl).promise;
      }

      const pdfDocument = await viewerElement.__pdfDocumentPromise;
      const pixelRatio = window.devicePixelRatio || 1;

      for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
        if (viewerElement.__renderToken !== renderToken) {
          return;
        }

        const page = await pdfDocument.getPage(pageNumber);
        const baseViewport = page.getViewport({ scale: 1 });
        const scale = renderWidth / baseViewport.width;
        const viewport = page.getViewport({ scale: scale });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d", { alpha: false });

        canvas.className = "pdf-inline-viewer__page";
        canvas.width = Math.floor(viewport.width * pixelRatio);
        canvas.height = Math.floor(viewport.height * pixelRatio);
        canvas.style.width = viewport.width + "px";
        canvas.style.height = viewport.height + "px";

        await page.render({
          canvasContext: context,
          viewport: viewport,
          transform: pixelRatio === 1 ? null : [pixelRatio, 0, 0, pixelRatio, 0, 0]
        }).promise;

        if (viewerElement.__renderToken !== renderToken) {
          return;
        }

        pagesElement.appendChild(canvas);
      }

      statusElement.hidden = true;
    } catch (error) {
      console.error(error);
      setDownloadFallback(statusElement, pdfUrl, "Unable to render the inline preview for " + pdfTitle + ".");
    }
  }

  async function initializeViewer(viewerElement) {
    if (viewerElement.dataset.pdfViewerInitialized === "true") {
      return;
    }

    viewerElement.dataset.pdfViewerInitialized = "true";

    try {
      const pdfjsLib = await ensurePdfJs();
      await renderViewer(viewerElement, pdfjsLib, true);

      const handleResize = debounce(function () {
        renderViewer(viewerElement, pdfjsLib, false);
      }, 150);

      window.addEventListener("resize", handleResize);
    } catch (error) {
      console.error(error);

      const statusElement = viewerElement.querySelector(".pdf-inline-viewer__status");
      const pdfUrl = viewerElement.dataset.pdfSrc;
      const pdfTitle = getViewerTitle(viewerElement);

      setDownloadFallback(statusElement, pdfUrl, "Unable to initialize the preview for " + pdfTitle + ".");
    }
  }

  function initializeAllViewers() {
    document.querySelectorAll(".pdf-inline-viewer").forEach(function (viewerElement) {
      initializeViewer(viewerElement);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAllViewers);
  } else {
    initializeAllViewers();
  }
})();