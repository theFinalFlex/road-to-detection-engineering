# Road to HTB CDEP

DE&TH DIARIES · reviewed 2026-10-12

HTB Certified Detection Engineering Principal: 13 required path modules.

## Official HTB path order

1. Detection & OpSec Cyber Range
2. Introduction to Detection Engineering
3. Introduction to Dynamic Analysis with WinDbg
4. Process Injection Attacks and Detection
5. Linux Process Injections & Detections
6. Windows Low Level Detectability
7. Detecting Access Token Manipulation Attacks
8. Windows API Monitoring and Hooking
9. Privilege Escalation Tradecraft Analysis
10. Persistence Tradecraft Analysis
11. WMI Tradecraft Analysis
12. Credential Access Tradecraft Analysis
13. Windows Kernel Telemetry & Detection Techniques

## Suggested study order

Background study fills gaps. The suggested order groups related skills; only the official HTB path counts toward certification completion.

## Before CDEP

### SOC investigations, logs, and detection rules

Recommended background

Read Windows evidence, query a SIEM, and explain why a detection fired.

- HTB considers SOC Analyst path knowledge prerequisite background: Windows logs, Splunk, malware analysis, YARA/Sigma, investigation, and reporting. Review only your gaps.
- Passing CDSA is not required for CDEP eligibility.

Practice goal: You can investigate a Windows alert, write a basic rule, test a benign case, and explain your evidence.

- [Sigma documentation](https://sigmahq.io/docs/) (free): Use the rule-writing and log-source guidance alongside your SIEM practice.
- [HTB · SOC Analyst path](https://academy.hackthebox.com/path/preview/soc-analyst) (paid): Structured lab route covering investigation, SIEM, malware, and detection foundations.

### Practical C, basic C++, and Python

Recommended background

Read, modify, compile, and debug small programs before tackling low-level Windows examples.

- C: CS50x weeks 1–5 and their exercises, covering functions, arrays, pointers, structs, allocation, and debugging. Supplement function pointers, compilation, and linking.
- C++: selected LearnCpp lessons on references, classes, object lifetime, and reading Windows examples.
- Python: files, bytes, collections, parsing, and reading/modifying analysis scripts. HTB Introduction to Python 3 or equivalent is enough.

Practice goal: You can compile and debug a small C program with pointers and structs, read basic C++, and parse a log in Python.

- [CS50x · C lessons](https://cs50.harvard.edu/x/) (free): Use weeks 1–5 for C, memory, and data structures, then practice with small programs.
- [LearnCpp](https://www.learncpp.com/) (free): Select lessons on references, lifetime, pointers, and classes to read Windows C++ examples.
- [Python tutorial](https://docs.python.org/3/tutorial/) (free): Free language reference and exercises for files, collections, exceptions, and scripting.
- [HTB · Introduction to Python 3](https://academy.hackthebox.com/course/preview/introduction-to-python-3) (paid): Choose the guided HTB route if you want Python exercises in the same platform.
- [C Programming: A Modern Approach · K. N. King](https://wwnorton.co.uk/books/9780393979503-c-programming) (book): A book-based C route with exercises; focus on pointers, arrays, structures, and memory.

### x86-64 assembly and calling conventions

Recommended background

Connect C source to registers, memory, stack frames, and function calls.

- Choose OST2 Arch1001 OR HTB Intro to Assembly Language as your primary course. Use the book as a topic reference.
- Learn Windows x64 argument passing and stack conventions as well as the Linux examples used by many introductory resources.

Practice goal: You can trace a short compiled function, identify arguments and return values, and explain its stack frame.

- [Arch1001 — x86-64 Assembly](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch1001_x86-64_Asm%2B2021_v1/about) (free): Free structured assembly course; expects comfort with C.
- [Microsoft · x64 calling convention](https://learn.microsoft.com/en-us/cpp/build/x64-calling-convention?view=msvc-170) (free): Use this to bridge assembly examples to Windows x64 argument passing and stack rules.
- [HTB · Intro to Assembly Language](https://academy.hackthebox.com/course/preview/intro-to-assembly-language) (paid): A guided lab alternative for practicing assembly in HTB.
- [Computer Systems: A Programmer’s Perspective](https://csapp.cs.cmu.edu/) (book): Use the machine-level programming chapters as a book route from C to x86-64.

### Windows internals

Recommended background · windows

Understand processes, threads, virtual memory, handles, tokens, and the user/kernel boundary.

- Use TrainSec Windows Internals Day 1 OR Microsoft references for processes, threads, virtual memory, DLLs, handles, tokens, and the user/kernel boundary.
- Inspect a real process while reading. Use selected Windows Internals chapters as references.

Practice goal: You can explain a process’s threads, handles, token, loaded modules, and memory layout.

- [Microsoft · Processes and threads](https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads) (free): Free reference for Windows process and thread concepts, APIs, and examples.
- [TrainSec · Windows Internals: Day 1](https://trainsec.net/courses/windows-internals-day-1/) (paid): A guided introduction to Windows architecture, processes, memory, handles, and basic WinDbg.
- [Windows Internals · Parts 1 and 2](https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals) (book): Start with Part 1 architecture, processes, threads, memory, and security; use Part 2 as a later reference.

### Intro to Academy’s Purple Modules

Required Cyber Range preparation · outside the 13-module path

Learn the environment and workflow used by the purple-team labs.

- The Cyber Range instructions explicitly call completing this module a strict prerequisite.
- This preparation module is outside the 13-module CDEP certification path.

Practice goal: You can connect to the lab, follow its workflow, and locate the evidence you need.

- [HTB · Intro to Academy’s Purple Modules](https://academy.hackthebox.com/course/preview/intro-to-academys-purple-modules) (paid): Learn the HTB-specific setup required before its Detection & OpSec range.

## Observe and detect

### Detection & OpSec Cyber Range

Required path module

Practice logging, evidence collection, and detection validation in the range.

- Complete Intro to Academy’s Purple Modules first.
- Practice collecting telemetry, validating detections, and reviewing the lab evidence.

Practice goal: You can reproduce a lab action, collect its logs, and check whether a detection sees it.

- [HTB · Detection & OpSec Cyber Range](https://academy.hackthebox.com/course/preview/detection--opsec-cyber-range) (paid): Practice in the HTB range after the Purple introduction.
- [Microsoft · Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) (free): Use the event and configuration reference to understand what your sensor actually records.
- [Atomic Red Team](https://www.atomicredteam.io/) (free): Optional open-source tests for validating detections in your own authorized lab.

### Introduction to Detection Engineering

Required path module

Turn a behavior into telemetry, a detection hypothesis, a rule, and a validated result.

- Bring Python, basic C/C++, YARA/Sigma, malware analysis, Windows logs, and Splunk skills.
- Test both malicious and benign activity, tune false positives, and document evidence and limitations.

Practice goal: You can document a tested rule, its required telemetry, and likely false positives.

- [HTB · Introduction to Detection Engineering](https://academy.hackthebox.com/course/preview/introduction-to-detection-engineering) (paid): The required CDEP module combines detection design, investigation, and validation.
- [Sigma documentation](https://sigmahq.io/docs/) (free): Reference rule syntax, log sources, and conversion as you write and test detections.
- [Atomic Red Team](https://www.atomicredteam.io/) (free): Use a focused test to check your hypothesis and retain the resulting evidence.

### Introduction to Dynamic Analysis with WinDbg

Required path module · windows

Use WinDbg to connect API calls, call stacks, registers, and memory to behavior.

- The HTB module teaches WinDbg. External introductory debugging courses are optional help if you get stuck.
- In this suggested study order, Purple introduction → Cyber Range → Introduction to Detection Engineering comes before the full WinDbg module.

Practice goal: You can complete the HTB exercises and explain a breakpoint, its arguments, call stack, and relevant memory.

- [Microsoft · Get started with Windows debugging](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/getting-started-with-windows-debugging) (free): Use the official setup and debugging guidance as a free alternative or reference.
- [HTB · Introduction to Dynamic Analysis with WinDbg](https://academy.hackthebox.com/course/preview/introduction-to-dynamic-analysis-with-windbg) (paid): Apply debugging to security analysis in the required CDEP module.

### Windows API programming

Preparation before injection and API monitoring · windows

Read and modify the C/C++ code behind Windows behavior.

- Practice handles, process/thread APIs, memory allocation, DLL loading, errors, and cleanup.
- Focus on the Win32/Native API boundary and relevant examples; a complete Windows application-development curriculum is unnecessary.
- Use Microsoft documentation and small coding exercises OR selected TrainSec System Programming lessons; focus on the APIs these labs use.

Practice goal: You can write a small program that queries a process, uses a DLL, and handles errors and resources correctly.

- [Microsoft · Processes and threads API](https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads) (free): Build small C/C++ programs from the documented APIs and examples.
- [Microsoft · Dynamic-link libraries](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-libraries) (free): Learn how DLL exports, imports, and loading relate to Windows API calls.
- [TrainSec · Windows System Programming](https://trainsec.net/courses/windows-system-programming-bundle/) (paid): Choose selected parts for processes and handles, then threads/memory and DLLs/security/COM.
- [Windows 10 System Programming · Pavel Yosifovich](https://scorpiosoftware.net/books/) (book): The author’s book listing links Parts 1 and 2 for a code-focused alternative to the video courses.

### Reverse engineering and PE analysis

Preparation before advanced Windows tradecraft · windows

Read PE files and follow a program’s behavior in a disassembler.

- Cover PE headers, sections, imports, relocations, strings, functions, and cross-references.
- Keep basic IDA familiarity for HTB labs that expect it; Ghidra is an additional tool choice.
- OST2’s tool introductions are short debugger courses, not full reverse-engineering curricula; the Ghidra course assumes prior WinDbg or GDB.

Practice goal: You can explain a small PE’s imports and sections and follow an interesting function through disassembly.

- [Microsoft · PE format](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format) (free): Use the executable-format reference while inspecting a real binary.
- [Dbg1101 — Introductory IDA](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1101_IntroIDA%2B2024_v1/about) (free): Learn the IDA interface and debugger, then practice interpreting unfamiliar functions.
- [Practical Malware Analysis](https://nostarch.com/malware.htm) (book): Use selected PE, IDA, and analysis labs; older tool screenshots and OS behavior need current references.

### Detecting Access Token Manipulation Attacks

Required path module · windows

Understand tokens, privileges, and impersonation as detection opportunities.

- Build on Windows command-line skills, malware analysis, assembly, C, and basic debugging.
- Carry token and privilege knowledge into later tradecraft analysis.

Practice goal: You can explain how a token change affects identity, privileges, and observable behavior.

- [HTB · Detecting Access Token Manipulation Attacks](https://academy.hackthebox.com/course/preview/detecting-access-token-manipulation-attacks) (paid): Practice token-manipulation analysis and detection in the required CDEP module.
- [Microsoft · Access tokens](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-tokens) (free): Reference primary and impersonation tokens, privileges, and the APIs that inspect them.
- [TrainSec · Windows System Programming 3](https://trainsec.net/courses/windows-system-programming-3/) (paid): Use the security and token lessons if the underlying C++/API behavior needs work.

### Process Injection Attacks and Detection

Required path module · windows

Connect injection behavior to Windows APIs, memory, and detection evidence.

- Apply C structs, assembly, PE structures, processes/threads, Win32/Native APIs, and debugger familiarity.
- 13Cubed adds the memory-forensics view of injection; it complements live analysis and does not replace HTB path credit.

Practice goal: You can connect an injection technique to API behavior, suspicious memory, and telemetry.

- [HTB · Process Injection Attacks and Detection](https://academy.hackthebox.com/course/preview/process-injection-attacks-and-detection) (paid): Work through the CDEP injection analysis and detection labs.
- [MITRE ATT&CK · Process Injection](https://attack.mitre.org/techniques/T1055/) (free): Compare injection families and use the references to understand behavioral differences.

### Windows API Monitoring and Hooking

Required path module · windows

Explore what API monitoring can reveal about Windows execution.

- Process Injection is explicitly recommended background.
- Bring assembly, C/C++ pointers and structs, Splunk log analysis, and Windows attack detection knowledge.

Practice goal: You can explain what an API hook observes, changes, and misses.

- [HTB · Windows API Monitoring and Hooking](https://academy.hackthebox.com/course/preview/windows-api-monitoring-and-hooking) (paid): The required CDEP module applies monitoring and hooking to detection.
- [Microsoft · Detours](https://github.com/microsoft/Detours) (free): Study the official API-instrumentation project and its samples alongside your lab results.

### Windows Low Level Detectability

Required path module · windows

Deepen your understanding of low-level behavior and detection coverage.

- Build on assembly, YARA/Sigma, Process Injection, and C/C++.
- API Monitoring first is a useful learning sequence, but is not an explicitly listed prerequisite.

Practice goal: You can explain which low-level signals support a detection and where visibility can fail.

- [HTB · Windows Low Level Detectability](https://academy.hackthebox.com/course/preview/windows-low-level-detectability) (paid): Apply assembly, injection, C/C++, and YARA/Sigma foundations in HTB.

## Windows tradecraft

### COM and WMI fundamentals

Preparation before WMI, persistence, and privilege escalation · windows

Learn the Windows components behind WMI and persistence tradecraft.

- Cover interfaces, CLSIDs/IIDs, activation, registration, namespaces, providers, and event subscriptions.
- Use focused reference reading and inspect examples in a lab.

Practice goal: You can explain COM activation and inspect a WMI namespace, provider, and event subscription.

- [Microsoft · COM](https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal) (free): Free reference for interfaces, activation, registration, CLSIDs, and IIDs.
- [Microsoft · WMI](https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page) (free): Use the programming and administration guidance for namespaces, providers, and events.
- [TrainSec · Windows System Programming 3](https://trainsec.net/courses/windows-system-programming-3/) (paid): Its COM section provides guided C++ examples of activation, servers, clients, and registration.

### WMI Tradecraft Analysis

Required path module · windows

Analyze WMI behavior using Windows internals and telemetry.

- Bring COM, services, auditing, PowerShell, C++, ATT&CK, and Splunk knowledge.

Practice goal: You can trace WMI activity from the underlying mechanism to its detection evidence.

- [HTB · WMI Tradecraft Analysis](https://academy.hackthebox.com/course/preview/wmi-tradecraft-analysis) (paid): Analyze WMI behavior with COM, Windows internals, PowerShell, and Splunk foundations.
- [MITRE ATT&CK · WMI](https://attack.mitre.org/techniques/T1047/) (free): Use the technique references to compare legitimate administration with suspicious WMI execution.
- [Microsoft · Sysmon WMI events](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-19-wmievent-wmieventfilter-activity-detected) (free): Reference filter, consumer, and binding events when checking WMI subscription telemetry.

### Persistence Tradecraft Analysis

Required path module · windows

Investigate persistence mechanisms and develop evidence-based detections.

- Apply Low Level Detectability, COM, Win32, C/C++, basic reversing/IDA, and Splunk foundations.

Practice goal: You can explain a persistence mechanism, its artifacts, and a validated detection.

- [HTB · Persistence Tradecraft Analysis](https://academy.hackthebox.com/course/preview/persistence-tradecraft-analysis) (paid): Apply low-level detectability, COM, Win32, basic reversing, and Splunk to persistence.
- [Microsoft · Autoruns](https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns) (free): Inspect autostart locations and compare a clean baseline with lab changes.

### Windows privilege-escalation fundamentals

Preparation before Privilege Escalation Tradecraft · windows

Fill privilege-escalation knowledge gaps before the detection-focused tradecraft module.

- Complete or review the module if the underlying techniques are unfamiliar.
- If you already have equivalent practical knowledge, avoid repeating it solely for this suggested study sequence.

Practice goal: You can explain a lab escalation’s initial access, misconfiguration or privilege, and resulting security context.

- [HTB · Windows Privilege Escalation](https://academy.hackthebox.com/course/preview/windows-privilege-escalation) (paid): Fill technique gaps through guided labs before the detection-focused tradecraft module.
- [Windows Internals · Part 1](https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals) (book): Reference tokens, access checks, and security boundaries instead of memorizing tool commands.

### Privilege Escalation Tradecraft Analysis

Required path module · windows

Connect escalation techniques to debugger evidence and detection logic.

- WinDbg, token detection, Low Level Detectability, and privilege-escalation foundations are covered earlier.
- Use your COM, Win32, basic IDA, C/C++, and Splunk skills during analysis.

Practice goal: You can connect an escalation’s code behavior to the resulting telemetry.

- [HTB · Privilege Escalation Tradecraft Analysis](https://academy.hackthebox.com/course/preview/privilege-escalation-tradecraft-analysis) (paid): Apply the earlier WinDbg, token, low-level, and privilege-escalation study to detection.

### Active Directory fundamentals and attacks

Preparation before Credential Access Tradecraft · windows

Understand the identity environment and attack behavior behind credential-access detections.

- Fill AD fundamentals if needed, then complete or review Active Directory Enumeration & Attacks.
- You do not need to earn CPTS or CAPE for this preparation step.

Practice goal: You can explain domain authentication, common trust and permission relationships, and a lab attack’s prerequisites.

- [Microsoft · Active Directory Domain Services overview](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview) (free): A free starting reference for the domain, directory, and authentication environment.
- [HTB · Introduction to Active Directory](https://academy.hackthebox.com/app/module/74) (paid): Fill the AD fundamentals if domains, users, groups, and authentication are unfamiliar.
- [HTB · Active Directory Enumeration & Attacks](https://academy.hackthebox.com/course/preview/active-directory-enumeration--attacks) (paid): Practice the identity and attack behavior recommended before Credential Access Tradecraft.

### Credential Access Tradecraft Analysis

Required path module · windows

Analyze credential-access behavior and turn the evidence into detections.

- Build on WinDbg, AD Enumeration & Attacks, Windows attack detection with Splunk, Python, C/C++, Win32, basic IDA, and COM.

Practice goal: You can explain a credential-access behavior, its required access, and useful detection evidence.

- [HTB · Credential Access Tradecraft Analysis](https://academy.hackthebox.com/course/preview/credential-access-tradecraft-analysis) (paid): Apply AD, WinDbg, C/C++, Win32, and Splunk foundations to the required CDEP module.
- [Microsoft · Sysmon process-access events](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-10-processaccess) (free): Reference source/target process access while reasoning about memory-access detections.

## Windows kernel

### Windows Kernel Telemetry & Detection Techniques

Required path module · windows

Build detections with a deeper understanding of kernel-level telemetry.

- Bring Process Injection, WinDbg, assembly, C/C++, and Windows API/process/thread/PE knowledge.
- Its late placement manages difficulty; it does not formally require every preceding tradecraft module.

Practice goal: You can explain a kernel telemetry source, its evidence, and its limitations.

- [HTB · Windows Kernel Telemetry & Detection Techniques](https://academy.hackthebox.com/course/preview/windows-kernel-telemetry--detection-techniques) (paid): Apply injection, WinDbg, assembly, C/C++, and Windows internals to detection telemetry.
- [Microsoft · Event Tracing for Windows](https://learn.microsoft.com/en-us/windows/win32/etw/event-tracing-portal) (free): Reference ETW providers, controllers, consumers, and event collection.

## Linux detection

### Linux processes, permissions, and networking

Recommended background · linux

Confirm the platform basics before Linux debugging and injection.

- Be comfortable with the shell, processes, permissions, files, and networking fundamentals.
- Skip repeat modules when these skills are already solid.

Practice goal: You can inspect a Linux process, explain its permissions and open files, and troubleshoot basic connectivity.

- [HTB · Linux Fundamentals](https://academy.hackthebox.com/course/preview/linux-fundamentals) (paid): Guided Linux practice if shell, permissions, files, and processes are not yet familiar.
- [HTB · Introduction to Networking](https://academy.hackthebox.com/course/preview/introduction-to-networking) (paid): Fill addressing, protocols, and connectivity gaps needed for the Linux labs.
- [The Linux Programming Interface](https://nostarch.com/tlpi) (book): A detailed reference for process creation, permissions, memory, and system calls; selected chapters are enough.

### Linux debugging with GDB

Recommended background · linux

Strengthen GDB before Linux buffer-overflow and injection work.

- Expects C and assembly knowledge.
- Use this if you need practice inspecting memory, registers, stack frames, and execution.

Practice goal: You can break on a function and inspect registers, arguments, stack frames, and memory in GDB.

- [Dbg1012 — Introductory GDB](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1012_IntroGDB%2B2024_v1/about) (free): Free structured GDB introduction after C and assembly.
- [GNU · GDB manual](https://sourceware.org/gdb/current/onlinedocs/gdb.html/) (free): Use the official manual to look up commands and debug your own small programs.

### Linux stack memory and buffer overflows

Recommended background · linux

Build the Linux memory and debugger background specifically recommended for injection study.

- HTB recommends Stack-Based Buffer Overflows on Linux x86 before Linux Process Injections & Detections.
- The entire binary-exploitation path and Windows buffer-overflow module are not needed for this branch.
- Apply Linux, networking, assembly, C, and GDB foundations in the module’s labs.

Practice goal: You can explain a stack overwrite in a lab and follow the changed control flow in GDB.

- [HTB · Stack-Based Buffer Overflows on Linux x86](https://academy.hackthebox.com/course/preview/stack-based-buffer-overflows-on-linux-x86) (paid): The Linux x86 module is specifically recommended preparation for HTB Linux injection.
- [Computer Systems: A Programmer’s Perspective](https://csapp.cs.cmu.edu/) (book): Use the machine-level programming and memory chapters to understand what the debugger shows.

### Linux Process Injections & Detections

Required path module · linux

Apply Linux execution and memory knowledge to injection analysis and detection.

- Bring Python, C structs, Linux fundamentals, assembly, Linux buffer overflows, GDB, YARA/Sigma, and Splunk skills.

Practice goal: You can connect Linux injection behavior to process memory and detection evidence.

- [HTB · Linux Process Injections & Detections](https://academy.hackthebox.com/course/preview/linux-process-injections--detections) (paid): Apply Linux, C, Python, assembly, GDB, buffer-overflow, YARA/Sigma, and Splunk foundations.
- [Linux man-pages · ptrace](https://man7.org/linux/man-pages/man2/ptrace.2.html) (free): Use the system-call reference to understand tracing, memory access, and permission checks.
- [The Linux Programming Interface](https://nostarch.com/tlpi) (book): Return to process, signal, and memory APIs when the Linux execution model is unclear.

## Certification

### Certification requirements

Exam eligibility

HTB Certified Detection Engineering Principal (CDEP): complete the relevant path and hold a valid exam voucher.

- Eligibility: HTB requires 100% completion of the relevant certification path plus a valid voucher. Complete any remaining modules and assessments until Academy shows 100%.
- CDEP has a 10-day exam window. Read HTB’s current exam guide before starting.
- HTB lists 75 estimated study days / 600 hours for the path. One estimated day means eight hours of study; this is not a calendar deadline or a personal completion prediction.
- External courses, books, the CDSA exam, and a full driver-development curriculum are not CDEP eligibility requirements.

Practice goal: HTB shows the official path at 100% and you have met that certification’s published exam and voucher requirements.

- [Official Detection Engineer path](https://academy.hackthebox.com/path/preview/detection-engineer) (free): Confirmed 13-module syllabus and official order.
- [HTB Certified Detection Engineering Principal](https://academy.hackthebox.com/preview/certifications/htb-certified-detection-engineering-principal) (free): Official certification page.
- [HTB · Academy certifications](https://help.hackthebox.com/en/articles/12741732-academy-certifications) (free): Path completion, voucher eligibility, and 10-day CDEP exam window.
- [HTB · Academy modules & paths](https://help.hackthebox.com/en/articles/12741910-academy-modules-paths) (free): 75 estimated days / 600 hours; estimated days represent eight hours.

## Extra help and deeper study

Optional references and specialization, not another sequence to complete.

### Operating systems and hardware boundaries

Optional enrichment

Understand address spaces, privilege levels, paging, and system calls.

- Study the ideas needed to explain a process and a user/kernel transition; save the deeper hardware labs for the kernel stage if necessary.
- Full completion of either resource is optional and should not delay ordinary Windows user-mode work.

Practice goal: You can explain virtual versus physical memory and why a user-mode program needs system calls.

- [Arch2001 — x86-64 OS Internals](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2001_x86-64_OS_Internals%2B2024_v1/about) (free): Selected architecture lessons explain paging, privilege levels, interrupts, and hardware support for an OS.
- [Operating Systems: Three Easy Pieces · free online book](https://pages.cs.wisc.edu/~remzi/OSTEP/) (book): Free author-hosted chapters on processes, virtual memory, and concurrency offer the broader OS foundation.

### Kernel internals and debugging

Optional enrichment · windows

Close kernel-memory and debugger gaps before working with kernel telemetry.

- Use the earlier WinDbg foundation, then Dbg2011 if needed, Dbg3011 for the environment, and Arch2821 for deeper kernel concepts.
- Focus on objects, memory, IRQL, synchronization, and inspecting the kernel; a full driver-development course is not a prerequisite.
- This is optional depth: use it when kernel labs expose gaps instead of treating every linked resource as mandatory.

Practice goal: You can attach to a lab kernel, inspect its state, and explain the objects and execution context relevant to your telemetry.

- [Dbg2011 — Intermediate WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg2011_WinDbg2%2B2021_v1/about) (free): Start here if you still need intermediate WinDbg and initial kernel-debugging practice.
- [Dbg3011 — Advanced WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg3011_WinDbg3%2B2023_v1/about) (free): Set up the two-VM debugging environment expected by Arch2821, or use an equivalent setup.
- [Arch2821 — Windows Kernel Internals 2](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2821_Windows_Kernel_Internals_2%2B2023_v1/about) (free): Study Windows kernel internals after introductory/intermediate debugging and the required environment setup.
- [Windows Internals · Parts 1 and 2](https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals) (book): Use focused chapters to explain the kernel objects and mechanisms you inspect.

### Debugger help and deeper specialization

Optional enrichment

Return to these when a lab exposes a specific gap or you want to specialize.

- External introductory WinDbg is optional: CDEP already includes a WinDbg module. Ghidra is an optional tool alternative; retain IDA where a lab expects it.
- Full TrainSec bundles and EDR Internals are deeper study. Selected API and COM lessons remain next to the relevant preparation.
- Books throughout this guide are topic references, not another sequence to complete.

- [TrainSec · Windows Internals Bundle](https://trainsec.net/courses/windows-internals-bundle/) (paid): Choose this instead of Day 1 alone for a broader structured Windows internals route.
- [Dbg1011 — Introductory WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1011_WinDbg1%2B2024_v1/about) (free): Free introductory WinDbg route for breakpoints, registers, memory, and stepping.
- [Dbg2011 — Intermediate WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg2011_WinDbg2%2B2021_v1/about) (free): Add intermediate WinDbg and introductory kernel debugging when the lab needs it.
- [Dbg1102 — Introductory Ghidra](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1102_IntroGhidra%2B2024_v2/about) (free): Optional Ghidra debugger introduction after basic WinDbg or GDB; return to it later if needed.
- [TrainSec · EDR Internals: Research & Development](https://trainsec.net/courses/edr-internals-research-development/) (paid): Optional paid depth specifically on EDR sensors, kernel callbacks, and detection components; this broader course is not needed for HTB completion.

### Endpoint and memory forensics

Optional enrichment · windows

Use forensic artifacts to add depth to your live detection analysis.

- 13Cubed endpoint training helps with event logs, registry, execution, and persistence evidence.
- 13Cubed memory training complements injection analysis; it is a separate forensic branch, not required CDEP path credit.

- [13Cubed · free videos](https://www.youtube.com/@13Cubed) (free): Choose individual Windows forensics episodes to understand the artifacts behind an alert.
- [13Cubed · Investigating Windows Endpoints](https://training.13cubed.com/investigating-windows-endpoints) (paid): Use the registry, services, scheduled-task, and execution-evidence lessons for a forensic perspective.
- [13Cubed · Investigating Windows Memory](https://training.13cubed.com/investigating-windows-memory) (paid): Choose this for injection, hollowing, hooks, and memory evidence using Volatility and MemProcFS; expects endpoint-forensics knowledge.
- [The Art of Memory Forensics](https://www.wiley-vch.de/en/areas-interest/computing-computer-sciences/the-art-of-memory-forensics-978-1-118-82509-9) (book): A deeper memory-analysis reference; its older tools and OS structures need comparison with current documentation.

[Website](https://deathdiaries.com/blogs/road-to-htb-cdep/) · [GitHub](https://github.com/theFinalFlex/road-to-detection-engineering)
