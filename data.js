window.ROADMAP = {
  updated: '2026-10-05',
  phases: [
    {
      id: 'foundations', title: 'Foundations', eyebrow: 'Phase 01',
      description: 'Build the SOC, programming, assembly, and debugger skills the advanced modules assume. Skip study you already know.',
      steps: [
        {
          id: 'soc-foundations', title: 'SOC Analyst foundations', provider: 'HTB', kind: 'foundation', target: false,
          summary: 'Get comfortable with Windows logs, Splunk, malware analysis, YARA/Sigma, investigation, and reporting.',
          details: ['Use the SOC Analyst path to fill gaps; carry forward existing completions.', 'The CDSA exam is optional for this preparation plan. Holding CDSA has not been confirmed as an eligibility requirement for the new certification.', 'JavaScript Deobfuscation belongs to the SOC path. It is different from Secure Coding 101: JavaScript, which is excluded from this proposed advanced module set.'],
          resources: [{ label: 'SOC Analyst path', url: 'https://academy.hackthebox.com/path/preview/soc-analyst' }]
        },
        {
          id: 'programming', title: 'Practical C, basic C++, and Python', provider: 'Study', kind: 'foundation', target: false,
          summary: 'Read, modify, compile, and debug small programs before tackling low-level Windows examples.',
          details: ['C: pointers, structs, arrays, allocation, function pointers, compilation, and linking.', 'C++: references, object lifetime, basic classes, and reading Windows examples. Python: files, parsing, and small analysis scripts.', 'Use selected lessons. Completing multiple full programming curricula is unnecessary.'],
          resources: [{ label: 'CS50: C material, weeks 1–5', url: 'https://cs50.harvard.edu/x/' }, { label: 'LearnCpp', url: 'https://www.learncpp.com/' }, { label: 'HTB Introduction to Python 3', url: 'https://academy.hackthebox.com/course/preview/introduction-to-python-3' }]
        },
        {
          id: 'ost2-arch1001', title: 'Arch1001 — x86-64 Assembly', provider: 'OST2', kind: 'foundation', target: false,
          summary: 'Build a structured assembly foundation after learning C.',
          details: ['Practice registers, addressing, stack frames, branches, function calls, and basic GDB usage.', 'Skip duplicated lessons if you can already trace a small compiled program confidently.'],
          resources: [{ label: 'OST2 Arch1001', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch1001_x86-64_Asm%2B2021_v1/about' }]
        },
        {
          id: 'htb-assembly', title: 'Intro to Assembly Language', provider: 'HTB', kind: 'foundation', target: false,
          summary: 'Apply the assembly foundation in HTB labs and learn the Windows x64 calling convention.',
          details: ['Connect function arguments, stack frames, registers, and return values.', 'You do not need to repeat an entire assembly curriculum if those skills are already solid.'],
          resources: [{ label: 'HTB assembly module', url: 'https://academy.hackthebox.com/course/preview/intro-to-assembly-language' }, { label: 'Windows x64 calling convention', url: 'https://learn.microsoft.com/en-us/cpp/build/x64-calling-convention?view=msvc-170' }]
        },
        {
          id: 'ost2-arch2001', title: 'Arch2001 — x86-64 OS Internals', provider: 'OST2', kind: 'optional', target: false,
          summary: 'Use selected lessons to understand the boundary between applications, the OS, and hardware.',
          details: ['Focus on paging, privilege levels, interrupts, and user/kernel transitions.', 'Expects C and Arch1001-level assembly. Full completion is optional for this roadmap.'],
          resources: [{ label: 'OST2 Arch2001', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2001_x86-64_OS_Internals%2B2024_v1/about' }]
        },
        {
          id: 'windows-internals', title: 'Windows internals, APIs, and PE files', provider: 'Study', kind: 'foundation', target: false,
          summary: 'Connect Windows source code, API calls, executable structure, and memory.',
          details: ['Cover processes, threads, virtual memory, handles, tokens, DLL loading, and Win32/Native APIs.', 'Read PE headers, sections, imports, and relocations. Compile small programs and inspect them.', 'Use targeted reference reading; cover-to-cover Windows Internals study is not a prerequisite.'],
          resources: [{ label: 'Windows Internals', url: 'https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals' }, { label: 'Processes and threads', url: 'https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads' }, { label: 'PE format', url: 'https://learn.microsoft.com/en-us/windows/win32/debug/pe-format' }]
        },
        {
          id: 'ost2-dbg1101', title: 'Dbg1101 — Introductory IDA', provider: 'OST2', kind: 'foundation', target: false,
          summary: 'Learn the IDA interface and debugger before the advanced tradecraft work.',
          details: ['Use this short introduction if IDA is new. Continue practicing functions and cross-references during HTB malware analysis.', 'This introduces the tool; it is not a complete reverse-engineering curriculum.'],
          resources: [{ label: 'OST2 Dbg1101', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1101_IntroIDA%2B2024_v1/about' }]
        },
        {
          id: 'ost2-dbg1011', title: 'Dbg1011 — Introductory WinDbg', provider: 'OST2', kind: 'foundation', target: false,
          summary: 'Learn the debugger workflow before HTB’s dynamic analysis module.',
          details: ['Practice breakpoints, registers, memory, arguments, and call stacks.', 'Complete if WinDbg is new; use as a reference if you already have equivalent skills.'],
          resources: [{ label: 'OST2 Dbg1011', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1011_WinDbg1%2B2024_v1/about' }]
        }
      ]
    },
    {
      id: 'detection-core', title: 'Detection Core', eyebrow: 'Phase 02',
      description: 'Learn the lab workflow, build detections, and connect Windows behavior to observable evidence.',
      steps: [
        {
          id: 'htb-windbg', title: 'Introduction to Dynamic Analysis with WinDbg', provider: 'HTB', kind: 'target', target: true,
          summary: 'Apply assembly, C/C++, Windows API, and PE knowledge to dynamic analysis.',
          details: ['Work through the module’s user/kernel debugging exercises and explain what the call stack and memory reveal.', 'Putting WinDbg before Introduction to Detection Engineering is a study recommendation, not that module’s listed prerequisite.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/introduction-to-dynamic-analysis-with-windbg' }]
        },
        {
          id: 'purple-intro', title: 'Intro to Academy’s Purple Modules', provider: 'HTB', kind: 'foundation', target: false,
          summary: 'Learn the environment and workflow used by the purple-team labs.',
          details: ['This is an explicit prerequisite for the Detection & OpSec Cyber Range.', 'It is recommended preparation for Introduction to Detection Engineering; its inclusion in the future certification path is unconfirmed.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/intro-to-academys-purple-modules' }]
        },
        {
          id: 'detection-range', title: 'Detection & OpSec Cyber Range', provider: 'HTB', kind: 'foundation', target: false,
          summary: 'Practice logging, evidence collection, and detection validation in the range.',
          details: ['Complete the Purple introduction first.', 'Recommended preparation for Introduction to Detection Engineering, not a confirmed eligibility requirement for the upcoming certification.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/detection--opsec-cyber-range' }]
        },
        {
          id: 'intro-detection-engineering', title: 'Introduction to Detection Engineering', provider: 'HTB', kind: 'target', target: true,
          summary: 'Turn a behavior into telemetry, a detection hypothesis, a rule, and a validated result.',
          details: ['Bring Python, basic C/C++, YARA/Sigma, malware analysis, Windows logs, and Splunk skills.', 'Test both malicious and benign activity, tune false positives, and document evidence and limitations.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/introduction-to-detection-engineering' }]
        },
        {
          id: 'token-manipulation', title: 'Detecting Access Token Manipulation Attacks', provider: 'HTB', kind: 'target', target: true,
          summary: 'Understand tokens, privileges, and impersonation as detection opportunities.',
          details: ['Build on Windows command-line skills, malware analysis, assembly, C, and basic debugging.', 'Carry token and privilege knowledge into later tradecraft analysis.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/detecting-access-token-manipulation-attacks' }]
        },
        {
          id: 'process-injection', title: 'Process Injection Attacks and Detection', provider: 'HTB', kind: 'target', target: true,
          summary: 'Connect injection behavior to Windows APIs, memory, and detection evidence.',
          details: ['Apply C structs, assembly, PE structures, processes/threads, Win32/Native APIs, and debugger familiarity.', 'Understand the behavior and visibility behind the technique, not just the tool name.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/process-injection-attacks-and-detection' }]
        },
        {
          id: 'api-monitoring', title: 'Windows API Monitoring and Hooking', provider: 'HTB', kind: 'target', target: true,
          summary: 'Explore what API monitoring can reveal about Windows execution.',
          details: ['Process Injection is explicitly recommended background.', 'Bring assembly, C/C++ pointers and structs, Splunk log analysis, and Windows attack detection knowledge.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/windows-api-monitoring-and-hooking' }]
        },
        {
          id: 'low-level-detectability', title: 'Windows Low Level Detectability', provider: 'HTB', kind: 'target', target: true,
          summary: 'Deepen your understanding of low-level behavior and detection coverage.',
          details: ['Build on assembly, YARA/Sigma, Process Injection, and C/C++.', 'API Monitoring first is a useful learning sequence, but is not an explicitly listed prerequisite.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/windows-low-level-detectability' }]
        }
      ]
    },
    {
      id: 'windows-tradecraft', title: 'Windows Tradecraft', eyebrow: 'Phase 03',
      description: 'Use stronger debugging and Windows platform knowledge to analyze persistence, escalation, and credential access.',
      steps: [
        {
          id: 'ost2-dbg2011', title: 'Dbg2011 — Intermediate WinDbg', provider: 'OST2', kind: 'foundation', target: false,
          summary: 'Strengthen WinDbg and begin kernel debugging before deeper tradecraft and kernel work.',
          details: ['Expects introductory WinDbg knowledge from Dbg1011 or equivalent practice.', 'Supporting study, not a confirmed HTB certification requirement. Skip material you can already apply.'],
          resources: [{ label: 'OST2 Dbg2011', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg2011_WinDbg2%2B2021_v1/about' }]
        },
        {
          id: 'com-wmi', title: 'COM and WMI fundamentals', provider: 'Study', kind: 'foundation', target: false,
          summary: 'Learn the Windows components behind WMI and persistence tradecraft.',
          details: ['Cover interfaces, CLSIDs/IIDs, activation, registration, namespaces, providers, and event subscriptions.', 'Use focused reference reading and inspect examples in a lab.'],
          resources: [{ label: 'COM reference', url: 'https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal' }, { label: 'WMI reference', url: 'https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page' }]
        },
        {
          id: 'wmi-tradecraft', title: 'WMI Tradecraft Analysis', provider: 'HTB', kind: 'target', target: true,
          summary: 'Analyze WMI behavior using Windows internals and telemetry.',
          details: ['Bring COM, services, auditing, PowerShell, C++, ATT&CK, and Splunk knowledge.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/wmi-tradecraft-analysis' }]
        },
        {
          id: 'persistence-tradecraft', title: 'Persistence Tradecraft Analysis', provider: 'HTB', kind: 'target', target: true,
          summary: 'Investigate persistence mechanisms and develop evidence-based detections.',
          details: ['Apply Low Level Detectability, COM, Win32, C/C++, basic reversing/IDA, and Splunk foundations.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/persistence-tradecraft-analysis' }]
        },
        {
          id: 'windows-privesc-foundation', title: 'Windows Privilege Escalation', provider: 'HTB', kind: 'foundation', target: false,
          summary: 'Fill privilege-escalation knowledge gaps before the detection-focused tradecraft module.',
          details: ['Complete or review the module if the underlying techniques are unfamiliar.', 'If you already have equivalent practical knowledge, avoid repeating it solely for this proposed prep sequence.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/windows-privilege-escalation' }]
        },
        {
          id: 'privesc-tradecraft', title: 'Privilege Escalation Tradecraft Analysis', provider: 'HTB', kind: 'target', target: true,
          summary: 'Connect escalation techniques to debugger evidence and detection logic.',
          details: ['WinDbg, token detection, Low Level Detectability, and privilege-escalation foundations are covered earlier.', 'Use your COM, Win32, basic IDA, C/C++, and Splunk skills during analysis.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/privilege-escalation-tradecraft-analysis' }]
        },
        {
          id: 'active-directory-foundation', title: 'Active Directory fundamentals and attacks', provider: 'HTB', kind: 'foundation', target: false,
          summary: 'Understand the identity environment and attack behavior behind credential-access detections.',
          details: ['Fill AD fundamentals if needed, then complete or review Active Directory Enumeration & Attacks.', 'You do not need to earn CPTS or CAPE for this preparation step.'],
          resources: [{ label: 'Introduction to Active Directory', url: 'https://academy.hackthebox.com/app/module/74' }, { label: 'AD Enumeration & Attacks', url: 'https://academy.hackthebox.com/course/preview/active-directory-enumeration--attacks' }]
        },
        {
          id: 'credential-access-tradecraft', title: 'Credential Access Tradecraft Analysis', provider: 'HTB', kind: 'target', target: true,
          summary: 'Analyze credential-access behavior and turn the evidence into detections.',
          details: ['Build on WinDbg, AD Enumeration & Attacks, Windows attack detection with Splunk, Python, C/C++, Win32, basic IDA, and COM.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/credential-access-tradecraft-analysis' }]
        }
      ]
    },
    {
      id: 'kernel-linux', title: 'Kernel & Linux', eyebrow: 'Phase 04',
      description: 'Branch into kernel telemetry and Linux injection. Use the deeper OST2 courses to close specific gaps.',
      steps: [
        {
          id: 'ost2-dbg3011', title: 'Dbg3011 — Advanced WinDbg', provider: 'OST2', kind: 'optional', target: false,
          summary: 'Set up the two-VM kernel-debugging environment used by Arch2821.',
          details: ['Follow Dbg1011 → Dbg2011 → Dbg3011, or bring equivalent introductory/intermediate debugger knowledge.', 'This deeper preparation is optional; full completion is not a listed HTB Kernel Telemetry prerequisite.'],
          resources: [{ label: 'OST2 Dbg3011', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg3011_WinDbg3%2B2023_v1/about' }]
        },
        {
          id: 'ost2-arch2821', title: 'Arch2821 — Windows Kernel Internals 2', provider: 'OST2', kind: 'optional', target: false,
          summary: 'Explore Windows kernel internals before or alongside HTB Kernel Telemetry.',
          details: ['Requires introductory/intermediate WinDbg knowledge and Dbg3011’s setup or an equivalent environment.', 'Use focused lessons for gaps in kernel memory, callbacks, IRQL, and synchronization. A full driver-development curriculum is unnecessary for this roadmap.'],
          resources: [{ label: 'OST2 Arch2821', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2821_Windows_Kernel_Internals_2%2B2023_v1/about' }]
        },
        {
          id: 'kernel-telemetry', title: 'Windows Kernel Telemetry & Detection Techniques', provider: 'HTB', kind: 'target', target: true,
          summary: 'Build detections with a deeper understanding of kernel-level telemetry.',
          details: ['Bring Process Injection, WinDbg, assembly, C/C++, and Windows API/process/thread/PE knowledge.', 'Its late placement manages difficulty; it does not formally require every preceding tradecraft module.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/windows-kernel-telemetry--detection-techniques' }]
        },
        {
          id: 'linux-foundations', title: 'Linux and networking checkpoint', provider: 'HTB', kind: 'foundation', target: false,
          summary: 'Confirm the platform basics before Linux debugging and injection.',
          details: ['Be comfortable with the shell, processes, permissions, files, and networking fundamentals.', 'Skip repeat modules when these skills are already solid.'],
          resources: [{ label: 'Linux Fundamentals', url: 'https://academy.hackthebox.com/course/preview/linux-fundamentals' }, { label: 'Introduction to Networking', url: 'https://academy.hackthebox.com/course/preview/introduction-to-networking' }]
        },
        {
          id: 'ost2-dbg1012', title: 'Dbg1012 — Introductory GDB', provider: 'OST2', kind: 'foundation', target: false,
          summary: 'Strengthen GDB before Linux buffer-overflow and injection work.',
          details: ['Expects C and assembly knowledge.', 'Use this if you need practice inspecting memory, registers, stack frames, and execution.'],
          resources: [{ label: 'OST2 Dbg1012', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1012_IntroGDB%2B2024_v1/about' }]
        },
        {
          id: 'linux-buffer-overflows', title: 'Stack-Based Buffer Overflows on Linux x86', provider: 'HTB', kind: 'foundation', target: false,
          summary: 'Build the Linux memory and debugger background specifically recommended for injection study.',
          details: ['The entire binary-exploitation path and Windows buffer-overflow module are not needed for this branch.', 'Apply Linux, networking, assembly, C, and GDB foundations in the module’s labs.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/stack-based-buffer-overflows-on-linux-x86' }]
        },
        {
          id: 'linux-injection', title: 'Linux Process Injections & Detections', provider: 'HTB', kind: 'target', target: true,
          summary: 'Apply Linux execution and memory knowledge to injection analysis and detection.',
          details: ['Bring Python, C structs, Linux fundamentals, assembly, Linux buffer overflows, GDB, YARA/Sigma, and Splunk skills.'],
          resources: [{ label: 'Open HTB module', url: 'https://academy.hackthebox.com/course/preview/linux-process-injections--detections' }]
        },
        {
          id: 'ost2-dbg1102', title: 'Dbg1102 — Introductory Ghidra', provider: 'OST2', kind: 'optional', target: false,
          summary: 'Add Ghidra’s debugger as an optional tool after introductory WinDbg or GDB.',
          details: ['Expects assembly knowledge and introductory debugging skills.', 'This is an optional tool alternative. Retain basic IDA familiarity for HTB modules that expect it.'],
          resources: [{ label: 'OST2 Dbg1102', url: 'https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1102_IntroGhidra%2B2024_v2/about' }]
        }
      ]
    },
    {
      id: 'certification', title: 'Certification', eyebrow: 'Phase 05',
      description: 'When the official path is published, it becomes the checklist for exam eligibility.',
      steps: [
        {
          id: 'official-path', title: 'Complete the official path and exam requirements', provider: 'HTB', kind: 'launch', target: false,
          summary: 'Reconcile this preparation with HTB’s published syllabus before booking the exam.',
          details: ['HTB announced a Detection Engineering certification, but its final certification name and syllabus have not been verified. No matching path or certification was listed when checked on October 5, 2026.', 'The June announcement targeted Q3 2026. That target has passed; this roadmap does not claim a confirmed release date.', 'HTB’s certification library says an exam requires completion of the related Job Role Path and a valid voucher. Check the new certification’s own exam guide when it appears.', 'Check recognized module completions, finish every remaining required module and assessment until the official path reaches 100%, then confirm voucher/access rules and take the exam.', 'The 12 target modules here are a proposed advanced preparation set. No OST2 course or separate CDSA exam is confirmed as a new-certification eligibility requirement.'],
          resources: [{ label: 'Official HTB announcement', url: 'https://www.hackthebox.com/blog/htb-new-platform-capabilities-defensive-security' }, { label: 'HTB certification library', url: 'https://academy.hackthebox.com/app/library/certificates' }]
        }
      ]
    }
  ]
};
