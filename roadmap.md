# Road to HTB DE

A topic guide to detection engineering, arranged in a suggested learning order. Browse the subjects you need and choose resources that cover your gaps. Windows and Linux material are labeled by platform; Windows kernel and Linux detection have their own sections.

**Reviewed: October 5, 2026.** Independent preparation guide. HTB announced a Detection Engineering certification, but its final name, syllabus, and exam rules were not verified as of this review. The 12 advanced HTB modules here are preparation targets, not a confirmed exam blueprint. Complete the official certification path and follow its requirements when published.

[Interactive wiki](https://thefinalflex.github.io/road-to-detection-engineering/) · [HTB announcement](https://www.hackthebox.com/blog/htb-new-platform-capabilities-defensive-security)

Free courses, paid courses, and books are grouped under the topic they support. A reference may cover only part of a topic; the note explains its use. You do not need to finish every resource.

## Foundations

Learn the skill, choose the resource that suits you, and skip foundations you can already apply.

### SOC investigations, logs, and detection rules

Read Windows evidence, query a SIEM, and explain why a detection fired.

**In practice:** You can investigate a Windows alert, write a basic rule, test a benign case, and explain your evidence.

- Cover Windows event logs, Splunk, basic malware analysis, YARA/Sigma, investigation, and reporting; fill gaps instead of repeating mastered study.
- 13Cubed fits endpoint evidence and forensic interpretation; add separate SIEM and rule-writing practice.
- CDSA is useful preparation, but passing that separate exam is not a verified requirement for the upcoming certificate.

**Free courses & references**

- [13Cubed · free videos](https://www.youtube.com/@13Cubed) — Choose individual Windows forensics episodes to understand the artifacts behind an alert.
- [Sigma documentation](https://sigmahq.io/docs/) — Use the rule-writing and log-source guidance alongside your SIEM practice.

**Paid courses & labs**

- [HTB · SOC Analyst path](https://academy.hackthebox.com/path/preview/soc-analyst) — Structured lab route covering investigation, SIEM, malware, and detection foundations.
- [13Cubed · Investigating Windows Endpoints](https://training.13cubed.com/investigating-windows-endpoints) — Paid depth on event logs, registry, execution evidence, and disk artifacts; it does not cover memory forensics.

### Practical C, basic C++, and Python

Read, modify, compile, and debug small programs before tackling low-level Windows examples.

**In practice:** You can compile and debug a small C program with pointers and structs, read basic C++, and parse a log in Python.

- C: pointers, structs, arrays, allocation, function pointers, compilation, and linking.
- C++: references, object lifetime, basic classes, and reading Windows examples; Python: files, parsing, and small analysis scripts.
- Choose a main C resource, then fill the C++ and Python gaps; these are alternatives, not five courses to finish.

**Free courses & references**

- [CS50x · C lessons](https://cs50.harvard.edu/x/) — Use weeks 1–5 for C, memory, and data structures, then practice with small programs.
- [LearnCpp](https://www.learncpp.com/) — Select lessons on references, lifetime, pointers, and classes to read Windows C++ examples.
- [Python tutorial](https://docs.python.org/3/tutorial/) — Free language reference and exercises for files, collections, exceptions, and scripting.

**Paid courses & labs**

- [HTB · Introduction to Python 3](https://academy.hackthebox.com/course/preview/introduction-to-python-3) — Choose the guided HTB route if you want Python exercises in the same platform.

**Books**

- [C Programming: A Modern Approach · K. N. King](https://wwnorton.co.uk/books/9780393979503-c-programming) — A book-based C route with exercises; focus on pointers, arrays, structures, and memory.

### x86-64 assembly and calling conventions

Connect C source to registers, memory, stack frames, and function calls.

**In practice:** You can trace a short compiled function, identify arguments and return values, and explain its stack frame.

- Choose OST2, HTB, or the book as your main assembly resource; use the others to close gaps.
- Learn Windows x64 argument passing and stack conventions as well as the Linux examples used by many introductory resources.

**Free courses & references**

- [Arch1001 — x86-64 Assembly](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch1001_x86-64_Asm%2B2021_v1/about) — Free structured assembly course; expects comfort with C.
- [Microsoft · x64 calling convention](https://learn.microsoft.com/en-us/cpp/build/x64-calling-convention?view=msvc-170) — Use this to bridge assembly examples to Windows x64 argument passing and stack rules.

**Paid courses & labs**

- [HTB · Intro to Assembly Language](https://academy.hackthebox.com/course/preview/intro-to-assembly-language) — A guided lab alternative for practicing assembly in HTB.

**Books**

- [Computer Systems: A Programmer’s Perspective](https://csapp.cs.cmu.edu/) — Use the machine-level programming chapters as a book route from C to x86-64.

### Operating systems and hardware boundaries (optional depth)

Understand address spaces, privilege levels, paging, and system calls.

**In practice:** You can explain virtual versus physical memory and why a user-mode program needs system calls.

- Study the ideas needed to explain a process and a user/kernel transition; save the deeper hardware labs for the kernel stage if necessary.
- Full completion of either resource is optional and should not delay ordinary Windows user-mode work.

**Free courses & references**

- [Arch2001 — x86-64 OS Internals](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2001_x86-64_OS_Internals%2B2024_v1/about) — Selected architecture lessons explain paging, privilege levels, interrupts, and hardware support for an OS.

**Books**

- [Operating Systems: Three Easy Pieces · free online book](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Free author-hosted chapters on processes, virtual memory, and concurrency offer the broader OS foundation.

### Windows internals

Windows

Understand processes, threads, virtual memory, handles, tokens, and the user/kernel boundary.

**In practice:** You can explain a process’s threads, handles, token, loaded modules, and memory layout.

- Inspect real processes and memory while studying the concepts.
- Choose the free documentation route, a TrainSec course, or selected Windows Internals chapters; you do not need to complete all three.
- Day 1 gives the starting foundation; the bundle adds depth if you want it.

**Free courses & references**

- [Microsoft · Processes and threads](https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads) — Free reference for Windows process and thread concepts, APIs, and examples.

**Paid courses & labs**

- [TrainSec · Windows Internals: Day 1](https://trainsec.net/courses/windows-internals-day-1/) — A guided introduction to Windows architecture, processes, memory, handles, and basic WinDbg.
- [TrainSec · Windows Internals Bundle](https://trainsec.net/courses/windows-internals-bundle/) — Choose this instead of Day 1 alone for a broader structured Windows internals route.

**Books**

- [Windows Internals · Parts 1 and 2](https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals) — Start with Part 1 architecture, processes, threads, memory, and security; use Part 2 as a later reference.

### Windows API programming

Windows

Read and modify the C/C++ code behind Windows behavior.

**In practice:** You can write a small program that queries a process, uses a DLL, and handles errors and resources correctly.

- Practice handles, process/thread APIs, memory allocation, DLL loading, errors, and cleanup.
- Focus on the Win32/Native API boundary and relevant examples; a complete Windows application-development curriculum is unnecessary.

**Free courses & references**

- [Microsoft · Processes and threads API](https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads) — Build small C/C++ programs from the documented APIs and examples.
- [Microsoft · Dynamic-link libraries](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-libraries) — Learn how DLL exports, imports, and loading relate to Windows API calls.

**Paid courses & labs**

- [TrainSec · Windows System Programming](https://trainsec.net/courses/windows-system-programming-bundle/) — Choose selected parts for processes and handles, then threads/memory and DLLs/security/COM.

**Books**

- [Windows 10 System Programming · Pavel Yosifovich](https://scorpiosoftware.net/books/) — The author’s book listing links Parts 1 and 2 for a code-focused alternative to the video courses.

### Reverse engineering and PE analysis

Windows

Read PE files and follow a program’s behavior in a disassembler.

**In practice:** You can explain a small PE’s imports and sections and follow an interesting function through disassembly.

- Cover PE headers, sections, imports, relocations, strings, functions, and cross-references.
- Keep basic IDA familiarity for HTB labs that expect it; Ghidra is an additional tool choice.
- OST2’s tool introductions are short debugger courses, not full reverse-engineering curricula; the Ghidra course assumes prior WinDbg or GDB.

**Free courses & references**

- [Microsoft · PE format](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format) — Use the executable-format reference while inspecting a real binary.
- [Dbg1101 — Introductory IDA](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1101_IntroIDA%2B2024_v1/about) — Learn the IDA interface and debugger, then practice interpreting unfamiliar functions.
- [Dbg1102 — Introductory Ghidra](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1102_IntroGhidra%2B2024_v2/about) — Optional Ghidra debugger introduction after basic WinDbg or GDB; return to it later if needed.

**Books**

- [Practical Malware Analysis](https://nostarch.com/malware.htm) — Use selected PE, IDA, and analysis labs; older tool screenshots and OS behavior need current references.

## Observe and detect

Use debugging and telemetry to turn Windows behavior into tested detections.

### Introduction to Dynamic Analysis with WinDbg

HTB Academy module · Windows

Use WinDbg to connect API calls, call stacks, registers, and memory to behavior.

**In practice:** You can complete the HTB exercises and explain a breakpoint, its arguments, call stack, and relevant memory.

- If new to WinDbg, start with OST2 Dbg1011 or Microsoft’s introduction, then apply the skills in the HTB module.
- Use Dbg2011 when kernel-debugging gaps appear; completing an OST2 course does not complete this HTB module.
- Putting this before Introduction to Detection Engineering is a recommended study order, not that module’s stated prerequisite.

**Free courses & references**

- [Dbg1011 — Introductory WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1011_WinDbg1%2B2024_v1/about) — Free introductory WinDbg route for breakpoints, registers, memory, and stepping.
- [Dbg2011 — Intermediate WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg2011_WinDbg2%2B2021_v1/about) — Add intermediate WinDbg and introductory kernel debugging when the lab needs it.
- [Microsoft · Get started with Windows debugging](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/getting-started-with-windows-debugging) — Use the official setup and debugging guidance as a free alternative or reference.

**Paid courses & labs**

- [HTB · Introduction to Dynamic Analysis with WinDbg](https://academy.hackthebox.com/course/preview/introduction-to-dynamic-analysis-with-windbg) — Apply debugging to security analysis in the proposed advanced HTB module.

### Purple lab workflow

HTB Academy module

Learn the environment and workflow used by the purple-team labs.

**In practice:** You can connect to the lab, follow its workflow, and locate the evidence you need.

- This is an explicit prerequisite for the Detection & OpSec Cyber Range.
- It is recommended preparation for Introduction to Detection Engineering; its inclusion in the future certification path is unconfirmed.

**Paid courses & labs**

- [HTB · Intro to Academy’s Purple Modules](https://academy.hackthebox.com/course/preview/intro-to-academys-purple-modules) — Learn the HTB-specific setup required before its Detection & OpSec range.

### Telemetry and detection validation lab

HTB Academy module

Practice logging, evidence collection, and detection validation in the range.

**In practice:** You can reproduce a lab action, collect its logs, and check whether a detection sees it.

- Complete the Purple introduction first.
- Recommended preparation for Introduction to Detection Engineering, not a confirmed eligibility requirement for the upcoming certification.

**Free courses & references**

- [Microsoft · Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) — Use the event and configuration reference to understand what your sensor actually records.
- [Atomic Red Team](https://www.atomicredteam.io/) — Optional open-source tests for validating detections in your own authorized lab.

**Paid courses & labs**

- [HTB · Detection & OpSec Cyber Range](https://academy.hackthebox.com/course/preview/detection--opsec-cyber-range) — Practice in the HTB range after the Purple introduction.

### Introduction to Detection Engineering

HTB Academy module

Turn a behavior into telemetry, a detection hypothesis, a rule, and a validated result.

**In practice:** You can document a tested rule, its required telemetry, and likely false positives.

- Bring Python, basic C/C++, YARA/Sigma, malware analysis, Windows logs, and Splunk skills.
- Test both malicious and benign activity, tune false positives, and document evidence and limitations.

**Free courses & references**

- [Sigma documentation](https://sigmahq.io/docs/) — Reference rule syntax, log sources, and conversion as you write and test detections.
- [Atomic Red Team](https://www.atomicredteam.io/) — Use a focused test to check your hypothesis and retain the resulting evidence.

**Paid courses & labs**

- [HTB · Introduction to Detection Engineering](https://academy.hackthebox.com/course/preview/introduction-to-detection-engineering) — The proposed HTB module combines detection design, investigation, and validation.

### Detecting Access Token Manipulation Attacks

HTB Academy module · Windows

Understand tokens, privileges, and impersonation as detection opportunities.

**In practice:** You can explain how a token change affects identity, privileges, and observable behavior.

- Build on Windows command-line skills, malware analysis, assembly, C, and basic debugging.
- Carry token and privilege knowledge into later tradecraft analysis.

**Free courses & references**

- [Microsoft · Access tokens](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-tokens) — Reference primary and impersonation tokens, privileges, and the APIs that inspect them.

**Paid courses & labs**

- [HTB · Detecting Access Token Manipulation Attacks](https://academy.hackthebox.com/course/preview/detecting-access-token-manipulation-attacks) — Practice token-manipulation analysis and detection in the proposed HTB module.
- [TrainSec · Windows System Programming 3](https://trainsec.net/courses/windows-system-programming-3/) — Use the security and token lessons if the underlying C++/API behavior needs work.

### Process Injection Attacks and Detection

HTB Academy module · Windows

Connect injection behavior to Windows APIs, memory, and detection evidence.

**In practice:** You can connect an injection technique to API behavior, suspicious memory, and telemetry.

- Apply C structs, assembly, PE structures, processes/threads, Win32/Native APIs, and debugger familiarity.
- 13Cubed adds the memory-forensics view of injection; it complements live analysis and does not replace HTB path credit.

**Free courses & references**

- [MITRE ATT&CK · Process Injection](https://attack.mitre.org/techniques/T1055/) — Compare injection families and use the references to understand behavioral differences.

**Paid courses & labs**

- [HTB · Process Injection Attacks and Detection](https://academy.hackthebox.com/course/preview/process-injection-attacks-and-detection) — Work through the proposed HTB injection analysis and detection labs.
- [13Cubed · Investigating Windows Memory](https://training.13cubed.com/investigating-windows-memory) — Choose this for injection, hollowing, hooks, and memory evidence using Volatility and MemProcFS; expects endpoint-forensics knowledge.

**Books**

- [The Art of Memory Forensics](https://www.wiley-vch.de/en/areas-interest/computing-computer-sciences/the-art-of-memory-forensics-978-1-118-82509-9) — A deeper memory-analysis reference; its older tools and OS structures need comparison with current documentation.

### Windows API Monitoring and Hooking

HTB Academy module · Windows

Explore what API monitoring can reveal about Windows execution.

**In practice:** You can explain what an API hook observes, changes, and misses.

- Process Injection is explicitly recommended background.
- Bring assembly, C/C++ pointers and structs, Splunk log analysis, and Windows attack detection knowledge.

**Free courses & references**

- [Microsoft · Detours](https://github.com/microsoft/Detours) — Study the official API-instrumentation project and its samples alongside your lab results.

**Paid courses & labs**

- [HTB · Windows API Monitoring and Hooking](https://academy.hackthebox.com/course/preview/windows-api-monitoring-and-hooking) — The proposed HTB module applies monitoring and hooking to detection.

### Windows Low Level Detectability

HTB Academy module · Windows

Deepen your understanding of low-level behavior and detection coverage.

**In practice:** You can explain which low-level signals support a detection and where visibility can fail.

- Build on assembly, YARA/Sigma, Process Injection, and C/C++.
- API Monitoring first is a useful learning sequence, but is not an explicitly listed prerequisite.

**Paid courses & labs**

- [HTB · Windows Low Level Detectability](https://academy.hackthebox.com/course/preview/windows-low-level-detectability) — Apply assembly, injection, C/C++, and YARA/Sigma foundations in HTB.

## Windows Tradecraft

Use stronger debugging and Windows platform knowledge to analyze persistence, escalation, and credential access.

### COM and WMI fundamentals

Windows

Learn the Windows components behind WMI and persistence tradecraft.

**In practice:** You can explain COM activation and inspect a WMI namespace, provider, and event subscription.

- Cover interfaces, CLSIDs/IIDs, activation, registration, namespaces, providers, and event subscriptions.
- Use focused reference reading and inspect examples in a lab.

**Free courses & references**

- [Microsoft · COM](https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal) — Free reference for interfaces, activation, registration, CLSIDs, and IIDs.
- [Microsoft · WMI](https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page) — Use the programming and administration guidance for namespaces, providers, and events.

**Paid courses & labs**

- [TrainSec · Windows System Programming 3](https://trainsec.net/courses/windows-system-programming-3/) — Its COM section provides guided C++ examples of activation, servers, clients, and registration.

### WMI Tradecraft Analysis

HTB Academy module · Windows

Analyze WMI behavior using Windows internals and telemetry.

**In practice:** You can trace WMI activity from the underlying mechanism to its detection evidence.

- Bring COM, services, auditing, PowerShell, C++, ATT&CK, and Splunk knowledge.

**Free courses & references**

- [MITRE ATT&CK · WMI](https://attack.mitre.org/techniques/T1047/) — Use the technique references to compare legitimate administration with suspicious WMI execution.
- [Microsoft · Sysmon WMI events](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-19-wmievent-wmieventfilter-activity-detected) — Reference filter, consumer, and binding events when checking WMI subscription telemetry.

**Paid courses & labs**

- [HTB · WMI Tradecraft Analysis](https://academy.hackthebox.com/course/preview/wmi-tradecraft-analysis) — Analyze WMI behavior with COM, Windows internals, PowerShell, and Splunk foundations.

### Persistence Tradecraft Analysis

HTB Academy module · Windows

Investigate persistence mechanisms and develop evidence-based detections.

**In practice:** You can explain a persistence mechanism, its artifacts, and a validated detection.

- Apply Low Level Detectability, COM, Win32, C/C++, basic reversing/IDA, and Splunk foundations.

**Free courses & references**

- [Microsoft · Autoruns](https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns) — Inspect autostart locations and compare a clean baseline with lab changes.

**Paid courses & labs**

- [HTB · Persistence Tradecraft Analysis](https://academy.hackthebox.com/course/preview/persistence-tradecraft-analysis) — Apply low-level detectability, COM, Win32, basic reversing, and Splunk to persistence.
- [13Cubed · Investigating Windows Endpoints](https://training.13cubed.com/investigating-windows-endpoints) — Use the registry, services, scheduled-task, and execution-evidence lessons for a forensic perspective.

### Windows privilege-escalation fundamentals

Windows

Fill privilege-escalation knowledge gaps before the detection-focused tradecraft module.

**In practice:** You can explain a lab escalation’s initial access, misconfiguration or privilege, and resulting security context.

- Complete or review the module if the underlying techniques are unfamiliar.
- If you already have equivalent practical knowledge, avoid repeating it solely for this proposed prep sequence.

**Paid courses & labs**

- [HTB · Windows Privilege Escalation](https://academy.hackthebox.com/course/preview/windows-privilege-escalation) — Fill technique gaps through guided labs before the detection-focused tradecraft module.

**Books**

- [Windows Internals · Part 1](https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals) — Reference tokens, access checks, and security boundaries instead of memorizing tool commands.

### Privilege Escalation Tradecraft Analysis

HTB Academy module · Windows

Connect escalation techniques to debugger evidence and detection logic.

**In practice:** You can connect an escalation’s code behavior to the resulting telemetry.

- WinDbg, token detection, Low Level Detectability, and privilege-escalation foundations are covered earlier.
- Use your COM, Win32, basic IDA, C/C++, and Splunk skills during analysis.

**Paid courses & labs**

- [HTB · Privilege Escalation Tradecraft Analysis](https://academy.hackthebox.com/course/preview/privilege-escalation-tradecraft-analysis) — Apply the earlier WinDbg, token, low-level, and privilege-escalation study to detection.

### Active Directory fundamentals and attacks

Windows

Understand the identity environment and attack behavior behind credential-access detections.

**In practice:** You can explain domain authentication, common trust and permission relationships, and a lab attack’s prerequisites.

- Fill AD fundamentals if needed, then complete or review Active Directory Enumeration & Attacks.
- You do not need to earn CPTS or CAPE for this preparation step.

**Free courses & references**

- [Microsoft · Active Directory Domain Services overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview) — A free starting reference for the domain, directory, and authentication environment.

**Paid courses & labs**

- [HTB · Introduction to Active Directory](https://academy.hackthebox.com/app/module/74) — Fill the AD fundamentals if domains, users, groups, and authentication are unfamiliar.
- [HTB · Active Directory Enumeration & Attacks](https://academy.hackthebox.com/course/preview/active-directory-enumeration--attacks) — Practice the identity and attack behavior recommended before Credential Access Tradecraft.

### Credential Access Tradecraft Analysis

HTB Academy module · Windows

Analyze credential-access behavior and turn the evidence into detections.

**In practice:** You can explain a credential-access behavior, its required access, and useful detection evidence.

- Build on WinDbg, AD Enumeration & Attacks, Windows attack detection with Splunk, Python, C/C++, Win32, basic IDA, and COM.

**Free courses & references**

- [Microsoft · Sysmon process-access events](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-10-processaccess) — Reference source/target process access while reasoning about memory-access detections.

**Paid courses & labs**

- [HTB · Credential Access Tradecraft Analysis](https://academy.hackthebox.com/course/preview/credential-access-tradecraft-analysis) — Apply AD, WinDbg, C/C++, Win32, and Splunk foundations to the proposed HTB module.

## Windows kernel

Connect Windows kernel behavior to the telemetry used by detections.

### Kernel internals and debugging (optional depth)

Windows

Close kernel-memory and debugger gaps before working with kernel telemetry.

**In practice:** You can attach to a lab kernel, inspect its state, and explain the objects and execution context relevant to your telemetry.

- Use the earlier WinDbg foundation, then Dbg2011 if needed, Dbg3011 for the environment, and Arch2821 for deeper kernel concepts.
- Focus on objects, memory, IRQL, synchronization, and inspecting the kernel; a full driver-development course is not a prerequisite.
- This is optional depth: use it when kernel labs expose gaps instead of treating every linked resource as mandatory.

**Free courses & references**

- [Dbg2011 — Intermediate WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg2011_WinDbg2%2B2021_v1/about) — Start here if you still need intermediate WinDbg and initial kernel-debugging practice.
- [Dbg3011 — Advanced WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg3011_WinDbg3%2B2023_v1/about) — Set up the two-VM debugging environment expected by Arch2821, or use an equivalent setup.
- [Arch2821 — Windows Kernel Internals 2](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2821_Windows_Kernel_Internals_2%2B2023_v1/about) — Study Windows kernel internals after introductory/intermediate debugging and the required environment setup.

**Books**

- [Windows Internals · Parts 1 and 2](https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals) — Use focused chapters to explain the kernel objects and mechanisms you inspect.

### Windows Kernel Telemetry & Detection Techniques

HTB Academy module · Windows

Build detections with a deeper understanding of kernel-level telemetry.

**In practice:** You can explain a kernel telemetry source, its evidence, and its limitations.

- Bring Process Injection, WinDbg, assembly, C/C++, and Windows API/process/thread/PE knowledge.
- Its late placement manages difficulty; it does not formally require every preceding tradecraft module.

**Free courses & references**

- [Microsoft · Event Tracing for Windows](https://learn.microsoft.com/en-us/windows/win32/etw/event-tracing-portal) — Reference ETW providers, controllers, consumers, and event collection.

**Paid courses & labs**

- [HTB · Windows Kernel Telemetry & Detection Techniques](https://academy.hackthebox.com/course/preview/windows-kernel-telemetry--detection-techniques) — Apply injection, WinDbg, assembly, C/C++, and Windows internals to detection telemetry.
- [TrainSec · EDR Internals: Research & Development](https://trainsec.net/courses/edr-internals-research-development/) — Optional paid depth specifically on EDR sensors, kernel callbacks, and detection components; this broader course is not needed for HTB completion.

## Linux detection

Follow Linux processes, memory, and system calls into injection analysis and detection.

### Linux processes, permissions, and networking

Linux

Confirm the platform basics before Linux debugging and injection.

**In practice:** You can inspect a Linux process, explain its permissions and open files, and troubleshoot basic connectivity.

- Be comfortable with the shell, processes, permissions, files, and networking fundamentals.
- Skip repeat modules when these skills are already solid.

**Paid courses & labs**

- [HTB · Linux Fundamentals](https://academy.hackthebox.com/course/preview/linux-fundamentals) — Guided Linux practice if shell, permissions, files, and processes are not yet familiar.
- [HTB · Introduction to Networking](https://academy.hackthebox.com/course/preview/introduction-to-networking) — Fill addressing, protocols, and connectivity gaps needed for the Linux labs.

**Books**

- [The Linux Programming Interface](https://nostarch.com/tlpi) — A detailed reference for process creation, permissions, memory, and system calls; selected chapters are enough.

### Linux debugging with GDB

Linux

Strengthen GDB before Linux buffer-overflow and injection work.

**In practice:** You can break on a function and inspect registers, arguments, stack frames, and memory in GDB.

- Expects C and assembly knowledge.
- Use this if you need practice inspecting memory, registers, stack frames, and execution.

**Free courses & references**

- [Dbg1012 — Introductory GDB](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1012_IntroGDB%2B2024_v1/about) — Free structured GDB introduction after C and assembly.
- [GNU · GDB manual](https://sourceware.org/gdb/current/onlinedocs/gdb.html/) — Use the official manual to look up commands and debug your own small programs.

### Linux stack memory and buffer overflows

Linux

Build the Linux memory and debugger background specifically recommended for injection study.

**In practice:** You can explain a stack overwrite in a lab and follow the changed control flow in GDB.

- The entire binary-exploitation path and Windows buffer-overflow module are not needed for this branch.
- Apply Linux, networking, assembly, C, and GDB foundations in the module’s labs.

**Paid courses & labs**

- [HTB · Stack-Based Buffer Overflows on Linux x86](https://academy.hackthebox.com/course/preview/stack-based-buffer-overflows-on-linux-x86) — The Linux x86 module is specifically recommended preparation for HTB Linux injection.

**Books**

- [Computer Systems: A Programmer’s Perspective](https://csapp.cs.cmu.edu/) — Use the machine-level programming and memory chapters to understand what the debugger shows.

### Linux Process Injections & Detections

HTB Academy module · Linux

Apply Linux execution and memory knowledge to injection analysis and detection.

**In practice:** You can connect Linux injection behavior to process memory and detection evidence.

- Bring Python, C structs, Linux fundamentals, assembly, Linux buffer overflows, GDB, YARA/Sigma, and Splunk skills.

**Free courses & references**

- [Linux man-pages · ptrace](https://man7.org/linux/man-pages/man2/ptrace.2.html) — Use the system-call reference to understand tracing, memory access, and permission checks.

**Paid courses & labs**

- [HTB · Linux Process Injections & Detections](https://academy.hackthebox.com/course/preview/linux-process-injections--detections) — Apply Linux, C, Python, assembly, GDB, buffer-overflow, YARA/Sigma, and Splunk foundations.

**Books**

- [The Linux Programming Interface](https://nostarch.com/tlpi) — Return to process, signal, and memory APIs when the Linux execution model is unclear.

## Certification

Use HTB’s published path and exam guide to confirm eligibility.

### Certification requirements

Reconcile this preparation with HTB’s published syllabus before booking the exam.

**In practice:** HTB shows the official path at 100% and you have met that certification’s published exam and voucher requirements.

- HTB announced a Detection Engineering certification, but its final certification name and syllabus have not been verified. No matching path or certification was listed when checked on October 5, 2026.
- The June announcement targeted Q3 2026. That target has passed; this roadmap does not claim a confirmed release date.
- HTB’s certification library says an exam requires completion of the related Job Role Path and a valid voucher. Check the new certification’s own exam guide when it appears.
- Check recognized module completions, finish every remaining required module and assessment until the official path reaches 100%, then confirm voucher/access rules and take the exam.
- The 12 target modules here are a proposed advanced preparation set. No OST2 course or separate CDSA exam is confirmed as a new-certification eligibility requirement.

**Free courses & references**

- [Official HTB announcement](https://www.hackthebox.com/blog/htb-new-platform-capabilities-defensive-security) — The announcement establishes the planned certification, not a final syllabus or current exam guide.
- [HTB certification library](https://academy.hackthebox.com/app/library/certificates) — Check the published certification and its actual eligibility requirements when it appears.

## Keep the scope focused

- External courses and books support knowledge; they do not replace required HTB path completion.
- Choose the sections that help you understand the topic. There is no need to buy every course or read every book.
- Separate certifications, full driver-development curricula, and Secure Coding 101: JavaScript are not added to this proposed preparation plan.
- Build and test detections throughout. Keep the telemetry, rule, validation results, false positives, and a short explanation of your evidence.
