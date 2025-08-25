---
title: "Experience"
description: "Professional experience, skills, education, and downloadable resume for Garrett Holland"
showDate: false
showAuthor: false
showReadingTime: false
# Custom param to suppress child listing via custom layout override
hideChildren: true
---

## Objective

I seek a role where I can apply my technical skills to contribute to an organization while expanding my expertise and facing diverse challenges to grow professionally. I also aim to further cultivate servant leadership principles through practical experience.


## Experience Timeline

Below is a concise visual timeline of roles. Bullet points highlight collaborative impact. Select `Full details →` for the full detail page about an experience.

<br>

{{< timeline >}}
    {{< timelineItem icon="shield" header="Cloud Security Engineer" badge="Mar 2025 – Present" subheader="Ford Motor Company" >}}
    <ul>
        <li>Implemented secure-by-default guardrails including image provenance verification and RBAC tightening</li>
        <li>Integrated vulnerability scanning and policy enforcement into CI/CD workflows</li>
        <li>Co-authored internal Kubernetes security guidelines translating compliance controls into actionable developer guidance</li>
    </ul>
    <br><a href="/experience/ford-cloud-security-engineer/">Full details →</a>
    {{< /timelineItem >}}

    {{< timelineItem icon="graduation-cap" header="MBA" badge="May 2024" subheader="Oakland University" >}}
    <ul>
        <li>Completed graduate coursework focusing on the intersection of business strategy and information technology</li>
        <li>Developed advanced skills in IT governance, enterprise architecture, and technology management</li>
        <li>Balanced full-time professional work with evening and weekend graduate studies</li>
    </ul>
    {{< /timelineItem >}}

    {{< timelineItem icon="code" header="Kubernetes Platform Engineer" badge="Dec 2022 – Mar 2025" subheader="Ford Motor Company" >}}
    <ul>
        <li>Coordinated core upgrades across multi-cluster OpenShift and Kubernetes environments maintaining N-1 compliance</li>
        <li>Co-facilitated the Kubernetes User Group and co-maintained internal documentation hub</li>
        <li>Improved Terraform modules with validation, version pinning, and policy alignment</li>
        <li>Participated in on-call rotation handling incident triage, root cause analysis, and communications</li>
    </ul>
    <br><a href="/experience/ford-kubernetes-platform-engineer/">Full details →</a>
    {{< /timelineItem >}}

    {{< timelineItem icon="code" header="DevOps Engineer" badge="Sep 2020 – Dec 2022" subheader="Ford Motor Company" >}}
    <ul>
        <li>Supported Android (ConcourseCI) and iOS (CircleCI) CI/CD pipelines plus Spring Boot and Angular services</li>
        <li>Led cross-functional hackathon producing a code review helper tool adopted in production</li>
        <li>Hardened pipelines and reduced onboarding friction for application teams</li>
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
{{< /timeline >}}

### Skills

**Platform and Cloud:** Kubernetes, OpenShift, Red Hat Enterprise Linux, Terraform, GitOps, Tekton, Red Hat Dev Spaces, Bash scripting, Ansible, Google Cloud (Cloud Run, Compute Engine, Cloud Storage, GKE, IAM)

**Programming:** Go, Python, JavaScript, Object Oriented Programming fundamentals

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
        role: Kubernetes Platform Engineer
    annotations:
        linkedin: https://www.linkedin.com/in/garrettholland/
        github: https://github.com/glholland
spec:
    replica: 1
    headline: Kubernetes Platform Engineer
    location: Detroit, MI
    skills:
        - Kubernetes
        - OpenShift
        - Terraform
        - GitOps
        - Tekton
        - Google Cloud
        - Go
        - Python
        - JavaScript
    experience:
        - company: Ford Motor Company
            position: Cloud Security Engineer
            period: Mar 2025 - Present
        - company: Ford Motor Company
            position: Kubernetes Platform Engineer
            period: Dec 2022 - Mar 2025
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
    currentRole: Cloud Security Engineer
    lastUpdated: "2025-03-15T00:00:00Z"
```
