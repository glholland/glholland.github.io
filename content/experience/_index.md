---
title: "Experience"
description: "Professional experience, skills, education, and downloadable resume for Garrett Holland"
showDate: false
showAuthor: false
showReadingTime: false
# Custom param to suppress child listing via custom layout override
hideChildren: true
---

## Summary

Kubernetes Platform Engineer specializing in enterprise-scale infrastructure automation, secure platform architecture, and developer enablement. Proven track record designing and operating OpenShift and Kubernetes environments across bare metal, virtual, and cloud platforms (GCP). Expert in building reliable, automated systems through Infrastructure as Code, CI/CD pipeline engineering, and policy-driven platform management. Strong background in platform security, compliance automation, and supply chain security from dedicated Cloud Security team experience.

## Experience Timeline

Below is a concise visual timeline of roles. Bullet points highlight collaborative impact. Select `Full details →` for the full detail page about an experience.

<br>

{{< timeline >}}
    {{< timelineItem icon="code" header="K8s Platform Engineer - Team Lead" badge="Nov 2025 – Present" subheader="Ford Motor Company" >}}
    <ul>
        <li>Lead platform engineering team managing enterprise OpenShift environments serving 1000+ internal customers</li>
        <li>Architect and develop CLI tooling in Go for infrastructure automation (HPE iLO, OneView)</li>
        <li>Orchestrate multi-team incident response for critical infrastructure issues</li>
        <li>Mentor team members and lead Ford Kubernetes User Group bi-quarterly (100+ engineers)</li>
    </ul>
    <br><a href="/experience/ford-kubernetes-platform-engineer-lead/">Full details →</a>
    {{< /timelineItem >}}

    {{< timelineItem icon="shield" header="Kubernetes Security Specialist" badge="May 2025 – Nov 2025" subheader="Ford Motor Company" >}}
    <ul>
        <li>Kubernetes SME for Cloud Security org; led container security, policy enforcement, and secure SDLC architecture</li>
        <li>Built secure image repository infrastructure with Tekton, Quay, GCR, and automated supply chain security</li>
        <li>Authored enterprise container security policies for Ford Cloud Standard</li>
        <li>Deployed Kyverno policy enforcement and engineered compliance infrastructure (CIS, NIST)</li>
    </ul>
    <br><a href="/experience/ford-kubernetes-security-specialist/">Full details →</a>
    {{< /timelineItem >}}

    {{< timelineItem icon="graduation-cap" header="MBA" badge="May 2024" subheader="Oakland University" >}}
    <ul>
        <li>Completed graduate coursework focusing on the intersection of business strategy and information technology</li>
        <li>Developed advanced skills in IT governance, enterprise architecture, and technology management</li>
        <li>Balanced full-time professional work with evening and weekend graduate studies</li>
    </ul>
    {{< /timelineItem >}}

    {{< timelineItem icon="code" header="Kubernetes Platform Engineer" badge="Jan 2022 – Mar 2025" subheader="Ford Motor Company" >}}
    <ul>
        <li>Managed OpenShift platform operations including upgrades, patching, and lifecycle management</li>
        <li>Led Ford Kubernetes User Group, establishing knowledge-sharing culture and promoting platform adoption</li>
        <li>Developed and maintained Terraform modules as reusable infrastructure patterns</li>
        <li>Served as on-call engineer for platform availability and incident response</li>
    </ul>
    <br><a href="/experience/ford-kubernetes-platform-engineer/">Full details →</a>
    {{< /timelineItem >}}

    {{< timelineItem icon="code" header="DevOps Engineer" badge="Sep 2020 – Dec 2022" subheader="Ford Motor Company" >}}
    <ul>
        <li>Engineered CI/CD pipelines for mobile platforms using ConcourseCI (Android) and CircleCI (iOS)</li>
        <li>Led Hackathon team to develop production tooling from concept to deployment</li>
        <li>Built full-stack applications using SpringBoot, JavaScript, Angular, and Bootstrap</li>
    </ul>
    <br><a href="/experience/ford-devops-engineer/">Full details →</a>
    {{< /timelineItem >}}

    {{< timelineItem icon="graduation-cap" header="BS, Information Technology" badge="May 2020" subheader="Oakland University" >}}
    <ul>
        <li>Completed undergraduate degree with focus on systems administration and network infrastructure</li>
        <li>Gained foundational knowledge in programming, databases, and IT operations</li>
        <li>Applied classroom concepts through internship experiences in enterprise environments</li>
    </ul>
    {{< /timelineItem >}}

    {{< timelineItem icon="book" header="IT Intern" badge="Jun 2019 – Sep 2020" subheader="KOSTAL Group" >}}
    <ul>
        <li>Built early container proofs of concept (Grafana, NetBox) informing future platform direction</li>
        <li>Delivered Grafana dashboards surfacing network metrics during remote work transition</li>
        <li>Provided broad IT operations support across networking, monitoring, and endpoints</li>
    </ul>
    <br><a href="/experience/kostal-it-intern/">Full details →</a>
    {{< /timelineItem >}}

    {{< timelineItem icon="book" header="SAP Intern" badge="Oct 2018 – May 2019" subheader="KOSTAL Group" >}}
    <ul>
        <li>Produced SAP training media and written guides accelerating employee onboarding</li>
        <li>Converted training materials into Moodle courses improving accessibility</li>
        <li>Supported upgrade activities, gaining exposure to ERP release and change management cycles</li>
    </ul>
    <br><a href="/experience/kostal-sap-intern/">Full details →</a>
    {{< /timelineItem >}}

    {{< timelineItem icon="server" header="Jr. System Administrator" badge="May 2018 – Oct 2018" subheader="Oakland University" >}}
    <ul>
        <li>Assisted in managing Linux and Windows server environments</li>
        <li>Provided technical support and troubleshooting for university systems</li>
    </ul>
    {{< /timelineItem >}}

    {{< timelineItem icon="desktop" header="Client Service Technician" badge="Sep 2017 – May 2018" subheader="Oakland University" >}}
    <ul>
        <li>Provided helpdesk support for students and faculty</li>
        <li>Maintained computer lab hardware and software</li>
    </ul>
    {{< /timelineItem >}}
{{< /timeline >}}

### Skills

**K8s & Containers:** OpenShift/Kubernetes, Podman, bare metal & cloud deployments

**IaC & GitOps:** Terraform, Ansible, GitOps, policy-as-code (Kyverno)

**Cloud Platforms:** Google Cloud Platform (Cloud Run, GCR, IAM, Compute Engine), Azure Entra ID

**CI/CD & Automation:** Tekton, ConcourseCI, CircleCI, GitOps workflows

**Programming:** Go, Python, JavaScript, Bash scripting, CLI development

**Platform Security:** Pod Security Standards, RBAC, Kyverno, RHACS, compliance automation (CIS, NIST)

**Supply Chain Security:** Cosign signing, SBOM generation, Trivy scanning, Quay, GCR, artifact attestation

**Dev Tooling:** Red Hat Dev Spaces, GitHub Codespaces, Dev containers, Podman Compose

**AI-Assisted Development:** GitHub Copilot (daily use with custom agents)

## Deployable Manifest

Apply this YAML to your Kubernetes environment to implement your own!

```yaml
apiVersion: cv.resume/v1
kind: Human
metadata:
    name: garrett-holland-dev
    namespace: garrett-dev
    labels:
        location: Detroit, MI
        role: Senior Kubernetes Platform Engineer
    annotations:
        linkedin: https://www.linkedin.com/in/garrettholland/
        github: https://github.com/glholland
spec:
    replica: 1
    headline: Senior Kubernetes Platform Engineer
    location: Detroit, MI
    skills:
        - Kubernetes
        - OpenShift
        - Go
        - Terraform
        - Ansible
        - GitOps
        - Tekton
        - Kyverno
        - Google Cloud
        - Python
        - JavaScript
        - GitHub Copilot
    experience:
        - company: Ford Motor Company
            position: Kubernetes Platform Engineer
            period: Nov 2025 - Present
        - company: Ford Motor Company
            position: K8s Platform Engineer - Team Lead
            period: Nov 2025 - Present
        - company: Ford Motor Company
            position: Kubernetes Security Specialist
            period: May 2025 - Nov 2025
        - company: Ford Motor Company
            position: Kubernetes Platform Engineer
            period: Jan 2022 - May 2025
        - company: Ford Motor Company
            position: DevOps Engineer
            period: Sep 2020 - Dec 2022
        - company: KOSTAL Group
            position: IT Intern
            period: Jun 2019 - Sep 2020
        - company: KOSTAL Group
            position: SAP Intern
            period: Oct 2018 - May 2019
    education:
        - institution: Oakland University
            degree: MBA
            field: Management of Information Systems
            year: 2024
        - institution: Oakland University
            degree: BS
            field: Information Technology
            year: 2020
status:
    available: true
    currentRole: K8s Platform Engineer - Team Lead
    lastUpdated: "2026-03-28T00:00:00Z"
```
