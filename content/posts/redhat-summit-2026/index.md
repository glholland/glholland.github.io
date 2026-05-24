+++
date = '2026-05-22T09:09:06Z'
draft = false
title = 'Red Hat Summit 2026'
tags = ["redhat", "openshift", "kubernetes", "linux", "open-source", "conference"]
categories = ["Conferences"]
showHero = true
heroStyle = "basic"
showTableOfContents = true
sharingLinks = ["linkedin", "reddit", "bluesky", "twitter"]
+++

I was able to attend [Red Hat Summit 2026](https://www.redhat.com/en/summit) in Atlanta this year and had a blast! Thanks to all of the Red Hatters and numerous colleagues who made it such a great experience. Here are some of the notable things I noticed and by no means is this to be a comprehensive recap.

Speaking with the community, hearing their experiences, and seeking the guidance of artificial intelligence experts was honestly the best part. The few technical sessions I attended were interesting; however, I'm convinced that I learned more during hallways happenstances and between booth conversations.

## The State of OpenShift

Red Hat OpenShift Container Platform (RH OCP) is one of the core products Red Hat bases a lot of their other products around. Similar to Red Hat Enterprise Linux (RHEL) or Red Hat Ansible Automation Platform (RH AAP) being the foundation for many of their other supporting products. OpenShift serves as a critical component in Red Hat's ecosystem for Kubernetes.

If you're new here and thought that OpenShift was simply an OpenShift Virtualization pre-requisite, I'd forgive you as most of the mention this year around OpenShift was seemingly in either relation to virtualization or AI. There are some interesting features coming down the K8s release pipes but you'd hardly know it from Summit announcements.

Most of the OCP features announced at Summit were focused around three pillars, as I saw it any how.

- Artificial Intelligence
- Virtualization
- Security

I knew that AI and VMs were important but all of the new mentioned features seemed to rally behind these themes. I'll mention AI later but the virtualization and security themes were very prevalent throughout the conference.

As the publicly traded Broadcom seeks to rinse and repeat the [private equity playbook](https://digitalsunshinesolutions.com/broadcoms-vmware-strategy-a-plan-that-will-reshape-it/#:~:text=Broadcom's%20VMware%20strategy%3A%20Focus%20on,come%20from%20those%20key%20customers.), Red Hat has quickened its pace of operationalizing [KubeVirt](https://kubevirt.io/) for the enterprise. OpenShift Virtualization is the productized version of [KubeVirt](https://kubevirt.io/). While it's still in a very active development stage; it is growing closer and closer to VMware parity.

The new OpenShift Console Platform 4.21 release has a feature to enable [cross cluster live migration (CCLM)](https://docs.redhat.com/en/documentation/openshift_container_platform/4.20/html/virtualization/live-migration#virt-enabling-cclm-for-vms) of running virtual machines (VMs) via their OpenShift Virtualization (OSV) operator. This isn't possible on prior versions (CCLM is TP in OCP 4.20, GA in OCP 4.21) which leads into extremely large clusters just to enable the best utilization of the physical hardware (read: servers) for the end using VMs. So instead of running one 400 node monster cluster where the only requirement is to enable the allocation of the physical infrastructure to the VMs, you'll be able to run more reasonably sized clusters and migrate VMs between them without downtime. That's assuming the application running in the VM is a good tenant and is able to run high availability (HA) and handle the migration process gracefully.

> Note: Technology Preview (TP) is a feature made available with the acknowledgement that it's not yet fully supported and General Availability (GA) is the point at which a feature is fully supported and ready for production use.

This year at Summit, I attempted to take stock of who bit the financial bullet and renewed their contracts and who didn't. I was surprised to see which companies have either already finished migrations, started their transition away from VMware or have renewed their contracts to buy themselves some time to plan their virtual machine strategy.

Although there are always awesome features coming down the Kubernetes pipe into each release of OpenShift, the vast majority of any mention of OpenShift had a trailing virtualization term behind it.

Running virtual machines on Kubernetes is the new hotness but, to me, they're all just pods with a bunch of bolt ons to further along legacy workloads for one reason or another.

To quote my younger self, "Tech debt isn't real and can't hurt you."

## OpenShift AI

{{< alert icon="lightbulb" >}}
Formerly known as OpenShift Data Science, not to be confused with OpenShift Lightspeed, also different than RHEL AI
{{< /alert >}}

If I ordered this by frequency of utterance, AI would be at the top. LLM inferencing open weight models on OpenShift is a big deal, especially for those facing GDPR and other data privacy regulations. The ability to run models on-premises or in a private cloud without sending data to third-party services is a game-changer for many organizations.

To break down the naming confusion, here's my ground level view.

- [OpenShift AI](https://www.redhat.com/en/products/ai/openshift-ai) is rebranded OpenShift Data Science which was originally targeting ML, data lakes, data processing, etc. OpenShift Data Science just didn't have as much pizazz as a product with "AI" in the name.
- [OpenShift Lightspeed](https://docs.redhat.com/en/documentation/red_hat_openshift_lightspeed/1.0/html/about/ols-about-openshift-lightspeed) is a feature for OpenShift which can assist with troubleshooting with contextual awareness of the operating environment. BYO LLM.
- [RHEL AI](https://docs.redhat.com/en/documentation/red_hat_ai/3/html/introduction_to_red_hat_ai/introduction-to-red-hat-ai_rhai-overview) is a set of tools and features integrated into RHEL to enhance AI workloads, including optimizations for running AI models on RHEL.

---

I've been working on a project which encapsulates the RedFish API with "a bunch of curl calls written in Go"... which truly undersells it, but this tool enables me to leverage Bash and YAML to automate tasks related to HPE Servers. As Platform Engineering is my day job, hand crafting a CLI isn't really in the cards given time is a real thing. I've been using this as a side project to leverage all the tokens I can muster.

I mention this project to lead into a cool thing I learned about; spec driven development. I found myself speaking to a Red Hatter, [Kai](https://www.linkedin.com/in/kai-xu-52182287/), at their "Speak to an AI Expert" booth. Now, spec driven development isn't a new concept however, in this pedal to the metal agentic age, I saw how this has become a way to provide guardrails for AI agents in a codebase. The idea is to write yourself a `SPEC.md` file within the root directory of your project which outlines concepts such as intentions, constraints, technical definitions and business requirements.

I've been able to leverage these spec driven development principles for my side project at work and have had success in working with Claude to scaffold out plans for feature enhancements with less back and forth. This enables the CLI tooling to become even more useful without requiring as much human oversight in its development (for better or worse, tbd). Alls I know is, I don't have to load one more GUI and can instead stay in my terminal just a little longer each day. Thanks Claude.

I really just think of spec driven development as the how & why of a project and skip over the highly nuanced details of implementation. I was shown [OpenAI's Symphony SPEC.md](https://github.com/openai/symphony/blob/main/SPEC.md) which goes into excruciating detail about the intentions, constraints, and requirements of the Symphony project.

This is a great example of how to write a SPEC.md, however my projects are generally much smaller and less impactful so I usually stick toward the "how & why" approach which seems to have provided good returns on a minor investment.

## Security Themes

Security is always a topic at these types of events and this year was no different. The only thing that really caught my ear was the publicly available [Red Hat Hardened Images](https://images.redhat.com/). The first thing I noticed is that this wasn't a Quay portal but rather a more modern and easily browseable interface to find container images with security as a feature, not a bolt on. You're able to easily see the CVEs, SBOMs, and even utilize `cosign` to verify the integrity of the images.

If you go down the [GitLab rabbit hole](https://gitlab.com/redhat/hummingbird/containers) looking for the Containerfiles, you'll see a [Jinja2 templated `Containerfile.j2`](https://gitlab.com/redhat/hummingbird/containers/-/blob/main/images/go-1-26/Containerfile.j2) which is used to generate the actual `Containerfile` for each image and each image is based off of their [`quay.io/hummingbird-ci/hummingbird-builder`](https://quay.io/hummingbird-ci/hummingbird-builder) (the first image was pushed May 8th, 2026 neato...).

I'm excited to have a clear way to access hardened images and have the ability to attest their integrity.

...oh and it wouldn't be 2026 if this didn't come with its own [SKILLS.md](https://gitlab.com/redhat/hummingbird/skills/-/blob/main/SKILL.md) for your LLM agent. 😆

## Community and Culture

The energy on the floor was electric. It was great to see so many people passionate about their projects! I was able to meet an individual, [Charro Gruver](https://www.linkedin.com/in/charro-gruver/), who I spotted demoing his Intel NUC powered OpenShift cluster at a Red Hat booth. What really caught my eye was the Asus GB10 box he had as a vLLM node with which he was able to demonstrate the inference ability of the Blackwell box. I had recently considered the purchase but was dissuaded by the memory bandwidth in comparison with a 5090.

The current state of my basement inference project is rather simple. It's a bunch of old PC gaming parts I had laying around thrown into a 4U case with a 1070Ti (8Gb VRAM). So far, I've kept it really simple and run Ollama on it and expose the Ollama API to my local network so I can remotely inference to it, testing different models. I had some success with running the Gemma 4 model and their quantized versions but ran into issues where I would attempt to load it into 8Gb of VRAM, use it with Github Copilot Chat in VS Code, and any tool usage was going haywire.

I've had issues attempting to use a smaller quantized models and Charro was able to break down model quantization to me as a sandwich of matrix mathematics and quantization is mostly rounding down the values within each "slice" thus reducing the size each layer of the sandwich without losing all of the value of each "slice" brings. Quantizing a 70 billion parameter model (iirc, Qwen3-Next-80B-A3B-Instruct was used in the demo) handles complex tasks (read: tool usage) way better than the Gemma 4 (E4B) quantized models I'm able to run.

I assumed this could be caused from a few factors. Either the quantized model was just too heavily quantized and wasn't able to handle the task of tool usage, the 1070Ti didn't have the VRAM to hold the model and required context window, or the models being entirely different... but lets not rule out the litany of factors I haven't even considered or possibly don't yet comprehend.

## Final Thoughts

This was my first Red Hat Summit and once you get around some of the overly sales-y sales pitches, Summit is a great time. The time spent with colleagues from other companies and industries; getting the chance to learn from their trials and tribulations (and share my own) is invaluable.

In a world where Claude, Gemini, or GPT 5.5 can scratch almost any technical itch you can muster... the belly laughs, faux pas, and camaraderie from those whom we're lucky enough to spend time with remain a priceless commodity. After all, you still can't containerize a poorly timed inside joke.

TL;DR: [8/10, 9/10 with rice](https://www.reddit.com/r/AskReddit/comments/2np694/what_tasty_food_would_be_distusting_if_eaten_over/).
