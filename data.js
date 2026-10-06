window.ROADMAP = {
  "updated": "2026-10-05",
  "phases": [
    {
      "id": "foundations",
      "title": "Foundations",
      "eyebrow": "Phase 01",
      "description": "Learn the skill, choose the resource that suits you, and skip foundations you can already apply.",
      "steps": [
        {
          "id": "soc-foundations",
          "title": "SOC investigations, logs, and detection rules",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Read Windows evidence, query a SIEM, and explain why a detection fired.",
          "details": [
            "Cover Windows event logs, Splunk, basic malware analysis, YARA/Sigma, investigation, and reporting; fill gaps instead of repeating mastered study.",
            "13Cubed fits endpoint evidence and forensic interpretation; add separate SIEM and rule-writing practice.",
            "CDSA is useful preparation, but passing that separate exam is not a verified requirement for the upcoming certificate."
          ],
          "resources": [
            {
              "label": "13Cubed · free videos",
              "url": "https://www.youtube.com/@13Cubed",
              "type": "free",
              "note": "Choose individual Windows forensics episodes to understand the artifacts behind an alert."
            },
            {
              "label": "Sigma documentation",
              "url": "https://sigmahq.io/docs/",
              "type": "free",
              "note": "Use the rule-writing and log-source guidance alongside your SIEM practice."
            },
            {
              "label": "HTB · SOC Analyst path",
              "url": "https://academy.hackthebox.com/path/preview/soc-analyst",
              "type": "paid",
              "note": "Structured lab route covering investigation, SIEM, malware, and detection foundations."
            },
            {
              "label": "13Cubed · Investigating Windows Endpoints",
              "url": "https://training.13cubed.com/investigating-windows-endpoints",
              "type": "paid",
              "note": "Paid depth on event logs, registry, execution evidence, and disk artifacts; it does not cover memory forensics."
            }
          ],
          "goal": "You can investigate a Windows alert, write a basic rule, test a benign case, and explain your evidence.",
          "platform": "shared",
          "symbol": "detection",
          "htbModule": false
        },
        {
          "id": "programming",
          "title": "Practical C, basic C++, and Python",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Read, modify, compile, and debug small programs before tackling low-level Windows examples.",
          "details": [
            "C: pointers, structs, arrays, allocation, function pointers, compilation, and linking.",
            "C++: references, object lifetime, basic classes, and reading Windows examples; Python: files, parsing, and small analysis scripts.",
            "Choose a main C resource, then fill the C++ and Python gaps; these are alternatives, not five courses to finish."
          ],
          "resources": [
            {
              "label": "CS50x · C lessons",
              "url": "https://cs50.harvard.edu/x/",
              "type": "free",
              "note": "Use weeks 1–5 for C, memory, and data structures, then practice with small programs."
            },
            {
              "label": "LearnCpp",
              "url": "https://www.learncpp.com/",
              "type": "free",
              "note": "Select lessons on references, lifetime, pointers, and classes to read Windows C++ examples."
            },
            {
              "label": "Python tutorial",
              "url": "https://docs.python.org/3/tutorial/",
              "type": "free",
              "note": "Free language reference and exercises for files, collections, exceptions, and scripting."
            },
            {
              "label": "HTB · Introduction to Python 3",
              "url": "https://academy.hackthebox.com/course/preview/introduction-to-python-3",
              "type": "paid",
              "note": "Choose the guided HTB route if you want Python exercises in the same platform."
            },
            {
              "label": "C Programming: A Modern Approach · K. N. King",
              "url": "https://wwnorton.co.uk/books/9780393979503-c-programming",
              "type": "book",
              "note": "A book-based C route with exercises; focus on pointers, arrays, structures, and memory."
            }
          ],
          "goal": "You can compile and debug a small C program with pointers and structs, read basic C++, and parse a log in Python.",
          "platform": "shared",
          "symbol": "code",
          "htbModule": false
        },
        {
          "id": "htb-assembly",
          "title": "x86-64 assembly and calling conventions",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Connect C source to registers, memory, stack frames, and function calls.",
          "details": [
            "Choose OST2, HTB, or the book as your main assembly resource; use the others to close gaps.",
            "Learn Windows x64 argument passing and stack conventions as well as the Linux examples used by many introductory resources."
          ],
          "resources": [
            {
              "label": "Arch1001 — x86-64 Assembly",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch1001_x86-64_Asm%2B2021_v1/about",
              "type": "free",
              "note": "Free structured assembly course; expects comfort with C."
            },
            {
              "label": "Microsoft · x64 calling convention",
              "url": "https://learn.microsoft.com/en-us/cpp/build/x64-calling-convention?view=msvc-170",
              "type": "free",
              "note": "Use this to bridge assembly examples to Windows x64 argument passing and stack rules."
            },
            {
              "label": "HTB · Intro to Assembly Language",
              "url": "https://academy.hackthebox.com/course/preview/intro-to-assembly-language",
              "type": "paid",
              "note": "A guided lab alternative for practicing assembly in HTB."
            },
            {
              "label": "Computer Systems: A Programmer’s Perspective",
              "url": "https://csapp.cs.cmu.edu/",
              "type": "book",
              "note": "Use the machine-level programming chapters as a book route from C to x86-64."
            }
          ],
          "goal": "You can trace a short compiled function, identify arguments and return values, and explain its stack frame.",
          "platform": "shared",
          "symbol": "chip",
          "htbModule": false
        },
        {
          "id": "ost2-arch2001",
          "title": "Operating systems and hardware boundaries",
          "provider": "Mixed",
          "kind": "optional",
          "target": false,
          "summary": "Understand address spaces, privilege levels, paging, and system calls.",
          "details": [
            "Study the ideas needed to explain a process and a user/kernel transition; save the deeper hardware labs for the kernel stage if necessary.",
            "Full completion of either resource is optional and should not delay ordinary Windows user-mode work."
          ],
          "resources": [
            {
              "label": "Arch2001 — x86-64 OS Internals",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2001_x86-64_OS_Internals%2B2024_v1/about",
              "type": "free",
              "note": "Selected architecture lessons explain paging, privilege levels, interrupts, and hardware support for an OS."
            },
            {
              "label": "Operating Systems: Three Easy Pieces · free online book",
              "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/",
              "type": "book",
              "note": "Free author-hosted chapters on processes, virtual memory, and concurrency offer the broader OS foundation."
            }
          ],
          "goal": "You can explain virtual versus physical memory and why a user-mode program needs system calls.",
          "platform": "shared",
          "symbol": "chip",
          "htbModule": false
        },
        {
          "id": "windows-internals",
          "title": "Windows internals",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Understand processes, threads, virtual memory, handles, tokens, and the user/kernel boundary.",
          "details": [
            "Inspect real processes and memory while studying the concepts.",
            "Choose the free documentation route, a TrainSec course, or selected Windows Internals chapters; you do not need to complete all three.",
            "Day 1 gives the starting foundation; the bundle adds depth if you want it."
          ],
          "resources": [
            {
              "label": "Microsoft · Processes and threads",
              "url": "https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads",
              "type": "free",
              "note": "Free reference for Windows process and thread concepts, APIs, and examples."
            },
            {
              "label": "TrainSec · Windows Internals: Day 1",
              "url": "https://trainsec.net/courses/windows-internals-day-1/",
              "type": "paid",
              "note": "A guided introduction to Windows architecture, processes, memory, handles, and basic WinDbg."
            },
            {
              "label": "TrainSec · Windows Internals Bundle",
              "url": "https://trainsec.net/courses/windows-internals-bundle/",
              "type": "paid",
              "note": "Choose this instead of Day 1 alone for a broader structured Windows internals route."
            },
            {
              "label": "Windows Internals · Parts 1 and 2",
              "url": "https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals",
              "type": "book",
              "note": "Start with Part 1 architecture, processes, threads, memory, and security; use Part 2 as a later reference."
            }
          ],
          "goal": "You can explain a process’s threads, handles, token, loaded modules, and memory layout.",
          "platform": "windows",
          "symbol": "windows",
          "htbModule": false
        },
        {
          "id": "windows-system-programming",
          "title": "Windows API programming",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Read and modify the C/C++ code behind Windows behavior.",
          "details": [
            "Practice handles, process/thread APIs, memory allocation, DLL loading, errors, and cleanup.",
            "Focus on the Win32/Native API boundary and relevant examples; a complete Windows application-development curriculum is unnecessary."
          ],
          "goal": "You can write a small program that queries a process, uses a DLL, and handles errors and resources correctly.",
          "resources": [
            {
              "label": "Microsoft · Processes and threads API",
              "url": "https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads",
              "type": "free",
              "note": "Build small C/C++ programs from the documented APIs and examples."
            },
            {
              "label": "Microsoft · Dynamic-link libraries",
              "url": "https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-libraries",
              "type": "free",
              "note": "Learn how DLL exports, imports, and loading relate to Windows API calls."
            },
            {
              "label": "TrainSec · Windows System Programming",
              "url": "https://trainsec.net/courses/windows-system-programming-bundle/",
              "type": "paid",
              "note": "Choose selected parts for processes and handles, then threads/memory and DLLs/security/COM."
            },
            {
              "label": "Windows 10 System Programming · Pavel Yosifovich",
              "url": "https://scorpiosoftware.net/books/",
              "type": "book",
              "note": "The author’s book listing links Parts 1 and 2 for a code-focused alternative to the video courses."
            }
          ],
          "platform": "windows",
          "symbol": "code",
          "htbModule": false
        },
        {
          "id": "ost2-dbg1101",
          "title": "Reverse engineering and PE analysis",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Read PE files and follow a program’s behavior in a disassembler.",
          "details": [
            "Cover PE headers, sections, imports, relocations, strings, functions, and cross-references.",
            "Keep basic IDA familiarity for HTB labs that expect it; Ghidra is an additional tool choice.",
            "OST2’s tool introductions are short debugger courses, not full reverse-engineering curricula; the Ghidra course assumes prior WinDbg or GDB."
          ],
          "resources": [
            {
              "label": "Microsoft · PE format",
              "url": "https://learn.microsoft.com/en-us/windows/win32/debug/pe-format",
              "type": "free",
              "note": "Use the executable-format reference while inspecting a real binary."
            },
            {
              "label": "Dbg1101 — Introductory IDA",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1101_IntroIDA%2B2024_v1/about",
              "type": "free",
              "note": "Learn the IDA interface and debugger, then practice interpreting unfamiliar functions."
            },
            {
              "label": "Dbg1102 — Introductory Ghidra",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1102_IntroGhidra%2B2024_v2/about",
              "type": "free",
              "note": "Optional Ghidra debugger introduction after basic WinDbg or GDB; return to it later if needed."
            },
            {
              "label": "Practical Malware Analysis",
              "url": "https://nostarch.com/malware.htm",
              "type": "book",
              "note": "Use selected PE, IDA, and analysis labs; older tool screenshots and OS behavior need current references."
            }
          ],
          "goal": "You can explain a small PE’s imports and sections and follow an interesting function through disassembly.",
          "platform": "windows",
          "symbol": "binary",
          "htbModule": false
        }
      ]
    },
    {
      "id": "detection-core",
      "title": "Observe and detect",
      "eyebrow": "Phase 02",
      "description": "Use debugging and telemetry to turn Windows behavior into tested detections.",
      "steps": [
        {
          "id": "htb-windbg",
          "title": "Introduction to Dynamic Analysis with WinDbg",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Use WinDbg to connect API calls, call stacks, registers, and memory to behavior.",
          "details": [
            "If new to WinDbg, start with OST2 Dbg1011 or Microsoft’s introduction, then apply the skills in the HTB module.",
            "Use Dbg2011 when kernel-debugging gaps appear; completing an OST2 course does not complete this HTB module.",
            "Putting this before Introduction to Detection Engineering is a recommended study order, not that module’s stated prerequisite."
          ],
          "resources": [
            {
              "label": "Dbg1011 — Introductory WinDbg",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1011_WinDbg1%2B2024_v1/about",
              "type": "free",
              "note": "Free introductory WinDbg route for breakpoints, registers, memory, and stepping."
            },
            {
              "label": "Dbg2011 — Intermediate WinDbg",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg2011_WinDbg2%2B2021_v1/about",
              "type": "free",
              "note": "Add intermediate WinDbg and introductory kernel debugging when the lab needs it."
            },
            {
              "label": "Microsoft · Get started with Windows debugging",
              "url": "https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/getting-started-with-windows-debugging",
              "type": "free",
              "note": "Use the official setup and debugging guidance as a free alternative or reference."
            },
            {
              "label": "HTB · Introduction to Dynamic Analysis with WinDbg",
              "url": "https://academy.hackthebox.com/course/preview/introduction-to-dynamic-analysis-with-windbg",
              "type": "paid",
              "note": "Apply debugging to security analysis in the proposed advanced HTB module."
            }
          ],
          "goal": "You can complete the HTB exercises and explain a breakpoint, its arguments, call stack, and relevant memory.",
          "platform": "windows",
          "symbol": "debugger",
          "htbModule": true
        },
        {
          "id": "purple-intro",
          "title": "Purple lab workflow",
          "provider": "HTB",
          "kind": "foundation",
          "target": false,
          "summary": "Learn the environment and workflow used by the purple-team labs.",
          "details": [
            "This is an explicit prerequisite for the Detection & OpSec Cyber Range.",
            "It is recommended preparation for Introduction to Detection Engineering; its inclusion in the future certification path is unconfirmed."
          ],
          "resources": [
            {
              "label": "HTB · Intro to Academy’s Purple Modules",
              "url": "https://academy.hackthebox.com/course/preview/intro-to-academys-purple-modules",
              "type": "paid",
              "note": "Learn the HTB-specific setup required before its Detection & OpSec range."
            }
          ],
          "goal": "You can connect to the lab, follow its workflow, and locate the evidence you need.",
          "platform": "shared",
          "symbol": "lab",
          "htbModule": true
        },
        {
          "id": "detection-range",
          "title": "Telemetry and detection validation lab",
          "provider": "HTB",
          "kind": "foundation",
          "target": false,
          "summary": "Practice logging, evidence collection, and detection validation in the range.",
          "details": [
            "Complete the Purple introduction first.",
            "Recommended preparation for Introduction to Detection Engineering, not a confirmed eligibility requirement for the upcoming certification."
          ],
          "resources": [
            {
              "label": "HTB · Detection & OpSec Cyber Range",
              "url": "https://academy.hackthebox.com/course/preview/detection--opsec-cyber-range",
              "type": "paid",
              "note": "Practice in the HTB range after the Purple introduction."
            },
            {
              "label": "Microsoft · Sysmon",
              "url": "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon",
              "type": "free",
              "note": "Use the event and configuration reference to understand what your sensor actually records."
            },
            {
              "label": "Atomic Red Team",
              "url": "https://www.atomicredteam.io/",
              "type": "free",
              "note": "Optional open-source tests for validating detections in your own authorized lab."
            }
          ],
          "goal": "You can reproduce a lab action, collect its logs, and check whether a detection sees it.",
          "platform": "shared",
          "symbol": "detection",
          "htbModule": true
        },
        {
          "id": "intro-detection-engineering",
          "title": "Introduction to Detection Engineering",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Turn a behavior into telemetry, a detection hypothesis, a rule, and a validated result.",
          "details": [
            "Bring Python, basic C/C++, YARA/Sigma, malware analysis, Windows logs, and Splunk skills.",
            "Test both malicious and benign activity, tune false positives, and document evidence and limitations."
          ],
          "resources": [
            {
              "label": "HTB · Introduction to Detection Engineering",
              "url": "https://academy.hackthebox.com/course/preview/introduction-to-detection-engineering",
              "type": "paid",
              "note": "The proposed HTB module combines detection design, investigation, and validation."
            },
            {
              "label": "Sigma documentation",
              "url": "https://sigmahq.io/docs/",
              "type": "free",
              "note": "Reference rule syntax, log sources, and conversion as you write and test detections."
            },
            {
              "label": "Atomic Red Team",
              "url": "https://www.atomicredteam.io/",
              "type": "free",
              "note": "Use a focused test to check your hypothesis and retain the resulting evidence."
            }
          ],
          "goal": "You can document a tested rule, its required telemetry, and likely false positives.",
          "platform": "shared",
          "symbol": "detection",
          "htbModule": true
        },
        {
          "id": "token-manipulation",
          "title": "Detecting Access Token Manipulation Attacks",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Understand tokens, privileges, and impersonation as detection opportunities.",
          "details": [
            "Build on Windows command-line skills, malware analysis, assembly, C, and basic debugging.",
            "Carry token and privilege knowledge into later tradecraft analysis."
          ],
          "resources": [
            {
              "label": "HTB · Detecting Access Token Manipulation Attacks",
              "url": "https://academy.hackthebox.com/course/preview/detecting-access-token-manipulation-attacks",
              "type": "paid",
              "note": "Practice token-manipulation analysis and detection in the proposed HTB module."
            },
            {
              "label": "Microsoft · Access tokens",
              "url": "https://learn.microsoft.com/en-us/windows/win32/secauthz/access-tokens",
              "type": "free",
              "note": "Reference primary and impersonation tokens, privileges, and the APIs that inspect them."
            },
            {
              "label": "TrainSec · Windows System Programming 3",
              "url": "https://trainsec.net/courses/windows-system-programming-3/",
              "type": "paid",
              "note": "Use the security and token lessons if the underlying C++/API behavior needs work."
            }
          ],
          "goal": "You can explain how a token change affects identity, privileges, and observable behavior.",
          "platform": "windows",
          "symbol": "identity",
          "htbModule": true
        },
        {
          "id": "process-injection",
          "title": "Process Injection Attacks and Detection",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Connect injection behavior to Windows APIs, memory, and detection evidence.",
          "details": [
            "Apply C structs, assembly, PE structures, processes/threads, Win32/Native APIs, and debugger familiarity.",
            "13Cubed adds the memory-forensics view of injection; it complements live analysis and does not replace HTB path credit."
          ],
          "resources": [
            {
              "label": "HTB · Process Injection Attacks and Detection",
              "url": "https://academy.hackthebox.com/course/preview/process-injection-attacks-and-detection",
              "type": "paid",
              "note": "Work through the proposed HTB injection analysis and detection labs."
            },
            {
              "label": "MITRE ATT&CK · Process Injection",
              "url": "https://attack.mitre.org/techniques/T1055/",
              "type": "free",
              "note": "Compare injection families and use the references to understand behavioral differences."
            },
            {
              "label": "13Cubed · Investigating Windows Memory",
              "url": "https://training.13cubed.com/investigating-windows-memory",
              "type": "paid",
              "note": "Choose this for injection, hollowing, hooks, and memory evidence using Volatility and MemProcFS; expects endpoint-forensics knowledge."
            },
            {
              "label": "The Art of Memory Forensics",
              "url": "https://www.wiley-vch.de/en/areas-interest/computing-computer-sciences/the-art-of-memory-forensics-978-1-118-82509-9",
              "type": "book",
              "note": "A deeper memory-analysis reference; its older tools and OS structures need comparison with current documentation."
            }
          ],
          "goal": "You can connect an injection technique to API behavior, suspicious memory, and telemetry.",
          "platform": "windows",
          "symbol": "memory",
          "htbModule": true
        },
        {
          "id": "api-monitoring",
          "title": "Windows API Monitoring and Hooking",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Explore what API monitoring can reveal about Windows execution.",
          "details": [
            "Process Injection is explicitly recommended background.",
            "Bring assembly, C/C++ pointers and structs, Splunk log analysis, and Windows attack detection knowledge."
          ],
          "resources": [
            {
              "label": "HTB · Windows API Monitoring and Hooking",
              "url": "https://academy.hackthebox.com/course/preview/windows-api-monitoring-and-hooking",
              "type": "paid",
              "note": "The proposed HTB module applies monitoring and hooking to detection."
            },
            {
              "label": "Microsoft · Detours",
              "url": "https://github.com/microsoft/Detours",
              "type": "free",
              "note": "Study the official API-instrumentation project and its samples alongside your lab results."
            }
          ],
          "goal": "You can explain what an API hook observes, changes, and misses.",
          "platform": "windows",
          "symbol": "trace",
          "htbModule": true
        },
        {
          "id": "low-level-detectability",
          "title": "Windows Low Level Detectability",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Deepen your understanding of low-level behavior and detection coverage.",
          "details": [
            "Build on assembly, YARA/Sigma, Process Injection, and C/C++.",
            "API Monitoring first is a useful learning sequence, but is not an explicitly listed prerequisite."
          ],
          "resources": [
            {
              "label": "HTB · Windows Low Level Detectability",
              "url": "https://academy.hackthebox.com/course/preview/windows-low-level-detectability",
              "type": "paid",
              "note": "Apply assembly, injection, C/C++, and YARA/Sigma foundations in HTB."
            }
          ],
          "goal": "You can explain which low-level signals support a detection and where visibility can fail.",
          "platform": "windows",
          "symbol": "trace",
          "htbModule": true
        }
      ]
    },
    {
      "id": "windows-tradecraft",
      "title": "Windows Tradecraft",
      "eyebrow": "Phase 03",
      "description": "Use stronger debugging and Windows platform knowledge to analyze persistence, escalation, and credential access.",
      "steps": [
        {
          "id": "com-wmi",
          "title": "COM and WMI fundamentals",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Learn the Windows components behind WMI and persistence tradecraft.",
          "details": [
            "Cover interfaces, CLSIDs/IIDs, activation, registration, namespaces, providers, and event subscriptions.",
            "Use focused reference reading and inspect examples in a lab."
          ],
          "resources": [
            {
              "label": "Microsoft · COM",
              "url": "https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal",
              "type": "free",
              "note": "Free reference for interfaces, activation, registration, CLSIDs, and IIDs."
            },
            {
              "label": "Microsoft · WMI",
              "url": "https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page",
              "type": "free",
              "note": "Use the programming and administration guidance for namespaces, providers, and events."
            },
            {
              "label": "TrainSec · Windows System Programming 3",
              "url": "https://trainsec.net/courses/windows-system-programming-3/",
              "type": "paid",
              "note": "Its COM section provides guided C++ examples of activation, servers, clients, and registration."
            }
          ],
          "goal": "You can explain COM activation and inspect a WMI namespace, provider, and event subscription.",
          "platform": "windows",
          "symbol": "network",
          "htbModule": false
        },
        {
          "id": "wmi-tradecraft",
          "title": "WMI Tradecraft Analysis",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Analyze WMI behavior using Windows internals and telemetry.",
          "details": [
            "Bring COM, services, auditing, PowerShell, C++, ATT&CK, and Splunk knowledge."
          ],
          "resources": [
            {
              "label": "HTB · WMI Tradecraft Analysis",
              "url": "https://academy.hackthebox.com/course/preview/wmi-tradecraft-analysis",
              "type": "paid",
              "note": "Analyze WMI behavior with COM, Windows internals, PowerShell, and Splunk foundations."
            },
            {
              "label": "MITRE ATT&CK · WMI",
              "url": "https://attack.mitre.org/techniques/T1047/",
              "type": "free",
              "note": "Use the technique references to compare legitimate administration with suspicious WMI execution."
            },
            {
              "label": "Microsoft · Sysmon WMI events",
              "url": "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-19-wmievent-wmieventfilter-activity-detected",
              "type": "free",
              "note": "Reference filter, consumer, and binding events when checking WMI subscription telemetry."
            }
          ],
          "goal": "You can trace WMI activity from the underlying mechanism to its detection evidence.",
          "platform": "windows",
          "symbol": "trace",
          "htbModule": true
        },
        {
          "id": "persistence-tradecraft",
          "title": "Persistence Tradecraft Analysis",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Investigate persistence mechanisms and develop evidence-based detections.",
          "details": [
            "Apply Low Level Detectability, COM, Win32, C/C++, basic reversing/IDA, and Splunk foundations."
          ],
          "resources": [
            {
              "label": "HTB · Persistence Tradecraft Analysis",
              "url": "https://academy.hackthebox.com/course/preview/persistence-tradecraft-analysis",
              "type": "paid",
              "note": "Apply low-level detectability, COM, Win32, basic reversing, and Splunk to persistence."
            },
            {
              "label": "Microsoft · Autoruns",
              "url": "https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns",
              "type": "free",
              "note": "Inspect autostart locations and compare a clean baseline with lab changes."
            },
            {
              "label": "13Cubed · Investigating Windows Endpoints",
              "url": "https://training.13cubed.com/investigating-windows-endpoints",
              "type": "paid",
              "note": "Use the registry, services, scheduled-task, and execution-evidence lessons for a forensic perspective."
            }
          ],
          "goal": "You can explain a persistence mechanism, its artifacts, and a validated detection.",
          "platform": "windows",
          "symbol": "persistence",
          "htbModule": true
        },
        {
          "id": "windows-privesc-foundation",
          "title": "Windows privilege-escalation fundamentals",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Fill privilege-escalation knowledge gaps before the detection-focused tradecraft module.",
          "details": [
            "Complete or review the module if the underlying techniques are unfamiliar.",
            "If you already have equivalent practical knowledge, avoid repeating it solely for this proposed prep sequence."
          ],
          "resources": [
            {
              "label": "HTB · Windows Privilege Escalation",
              "url": "https://academy.hackthebox.com/course/preview/windows-privilege-escalation",
              "type": "paid",
              "note": "Fill technique gaps through guided labs before the detection-focused tradecraft module."
            },
            {
              "label": "Windows Internals · Part 1",
              "url": "https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals",
              "type": "book",
              "note": "Reference tokens, access checks, and security boundaries instead of memorizing tool commands."
            }
          ],
          "goal": "You can explain a lab escalation’s initial access, misconfiguration or privilege, and resulting security context.",
          "platform": "windows",
          "symbol": "privilege",
          "htbModule": false
        },
        {
          "id": "privesc-tradecraft",
          "title": "Privilege Escalation Tradecraft Analysis",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Connect escalation techniques to debugger evidence and detection logic.",
          "details": [
            "WinDbg, token detection, Low Level Detectability, and privilege-escalation foundations are covered earlier.",
            "Use your COM, Win32, basic IDA, C/C++, and Splunk skills during analysis."
          ],
          "resources": [
            {
              "label": "HTB · Privilege Escalation Tradecraft Analysis",
              "url": "https://academy.hackthebox.com/course/preview/privilege-escalation-tradecraft-analysis",
              "type": "paid",
              "note": "Apply the earlier WinDbg, token, low-level, and privilege-escalation study to detection."
            }
          ],
          "goal": "You can connect an escalation’s code behavior to the resulting telemetry.",
          "platform": "windows",
          "symbol": "privilege",
          "htbModule": true
        },
        {
          "id": "active-directory-foundation",
          "title": "Active Directory fundamentals and attacks",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Understand the identity environment and attack behavior behind credential-access detections.",
          "details": [
            "Fill AD fundamentals if needed, then complete or review Active Directory Enumeration & Attacks.",
            "You do not need to earn CPTS or CAPE for this preparation step."
          ],
          "resources": [
            {
              "label": "Microsoft · Active Directory Domain Services overview",
              "url": "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",
              "type": "free",
              "note": "A free starting reference for the domain, directory, and authentication environment."
            },
            {
              "label": "HTB · Introduction to Active Directory",
              "url": "https://academy.hackthebox.com/app/module/74",
              "type": "paid",
              "note": "Fill the AD fundamentals if domains, users, groups, and authentication are unfamiliar."
            },
            {
              "label": "HTB · Active Directory Enumeration & Attacks",
              "url": "https://academy.hackthebox.com/course/preview/active-directory-enumeration--attacks",
              "type": "paid",
              "note": "Practice the identity and attack behavior recommended before Credential Access Tradecraft."
            }
          ],
          "goal": "You can explain domain authentication, common trust and permission relationships, and a lab attack’s prerequisites.",
          "platform": "windows",
          "symbol": "identity",
          "htbModule": false
        },
        {
          "id": "credential-access-tradecraft",
          "title": "Credential Access Tradecraft Analysis",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Analyze credential-access behavior and turn the evidence into detections.",
          "details": [
            "Build on WinDbg, AD Enumeration & Attacks, Windows attack detection with Splunk, Python, C/C++, Win32, basic IDA, and COM."
          ],
          "resources": [
            {
              "label": "HTB · Credential Access Tradecraft Analysis",
              "url": "https://academy.hackthebox.com/course/preview/credential-access-tradecraft-analysis",
              "type": "paid",
              "note": "Apply AD, WinDbg, C/C++, Win32, and Splunk foundations to the proposed HTB module."
            },
            {
              "label": "Microsoft · Sysmon process-access events",
              "url": "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#event-id-10-processaccess",
              "type": "free",
              "note": "Reference source/target process access while reasoning about memory-access detections."
            }
          ],
          "goal": "You can explain a credential-access behavior, its required access, and useful detection evidence.",
          "platform": "windows",
          "symbol": "identity",
          "htbModule": true
        }
      ]
    },
    {
      "id": "windows-kernel",
      "title": "Windows kernel",
      "eyebrow": "Phase 04",
      "description": "Connect Windows kernel behavior to the telemetry used by detections.",
      "steps": [
        {
          "id": "ost2-arch2821",
          "title": "Kernel internals and debugging",
          "provider": "Mixed",
          "kind": "optional",
          "target": false,
          "summary": "Close kernel-memory and debugger gaps before working with kernel telemetry.",
          "details": [
            "Use the earlier WinDbg foundation, then Dbg2011 if needed, Dbg3011 for the environment, and Arch2821 for deeper kernel concepts.",
            "Focus on objects, memory, IRQL, synchronization, and inspecting the kernel; a full driver-development course is not a prerequisite.",
            "This is optional depth: use it when kernel labs expose gaps instead of treating every linked resource as mandatory."
          ],
          "resources": [
            {
              "label": "Dbg2011 — Intermediate WinDbg",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg2011_WinDbg2%2B2021_v1/about",
              "type": "free",
              "note": "Start here if you still need intermediate WinDbg and initial kernel-debugging practice."
            },
            {
              "label": "Dbg3011 — Advanced WinDbg",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg3011_WinDbg3%2B2023_v1/about",
              "type": "free",
              "note": "Set up the two-VM debugging environment expected by Arch2821, or use an equivalent setup."
            },
            {
              "label": "Arch2821 — Windows Kernel Internals 2",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2821_Windows_Kernel_Internals_2%2B2023_v1/about",
              "type": "free",
              "note": "Study Windows kernel internals after introductory/intermediate debugging and the required environment setup."
            },
            {
              "label": "Windows Internals · Parts 1 and 2",
              "url": "https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals",
              "type": "book",
              "note": "Use focused chapters to explain the kernel objects and mechanisms you inspect."
            }
          ],
          "goal": "You can attach to a lab kernel, inspect its state, and explain the objects and execution context relevant to your telemetry.",
          "platform": "windows",
          "symbol": "chip",
          "htbModule": false
        },
        {
          "id": "kernel-telemetry",
          "title": "Windows Kernel Telemetry & Detection Techniques",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Build detections with a deeper understanding of kernel-level telemetry.",
          "details": [
            "Bring Process Injection, WinDbg, assembly, C/C++, and Windows API/process/thread/PE knowledge.",
            "Its late placement manages difficulty; it does not formally require every preceding tradecraft module."
          ],
          "resources": [
            {
              "label": "HTB · Windows Kernel Telemetry & Detection Techniques",
              "url": "https://academy.hackthebox.com/course/preview/windows-kernel-telemetry--detection-techniques",
              "type": "paid",
              "note": "Apply injection, WinDbg, assembly, C/C++, and Windows internals to detection telemetry."
            },
            {
              "label": "Microsoft · Event Tracing for Windows",
              "url": "https://learn.microsoft.com/en-us/windows/win32/etw/event-tracing-portal",
              "type": "free",
              "note": "Reference ETW providers, controllers, consumers, and event collection."
            },
            {
              "label": "TrainSec · EDR Internals: Research & Development",
              "url": "https://trainsec.net/courses/edr-internals-research-development/",
              "type": "paid",
              "note": "Optional paid depth specifically on EDR sensors, kernel callbacks, and detection components; this broader course is not needed for HTB completion."
            }
          ],
          "goal": "You can explain a kernel telemetry source, its evidence, and its limitations.",
          "platform": "windows",
          "symbol": "trace",
          "htbModule": true
        }
      ]
    },
    {
      "id": "linux-detection",
      "title": "Linux detection",
      "eyebrow": "Phase 05",
      "description": "Follow Linux processes, memory, and system calls into injection analysis and detection.",
      "steps": [
        {
          "id": "linux-foundations",
          "title": "Linux processes, permissions, and networking",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Confirm the platform basics before Linux debugging and injection.",
          "details": [
            "Be comfortable with the shell, processes, permissions, files, and networking fundamentals.",
            "Skip repeat modules when these skills are already solid."
          ],
          "resources": [
            {
              "label": "HTB · Linux Fundamentals",
              "url": "https://academy.hackthebox.com/course/preview/linux-fundamentals",
              "type": "paid",
              "note": "Guided Linux practice if shell, permissions, files, and processes are not yet familiar."
            },
            {
              "label": "HTB · Introduction to Networking",
              "url": "https://academy.hackthebox.com/course/preview/introduction-to-networking",
              "type": "paid",
              "note": "Fill addressing, protocols, and connectivity gaps needed for the Linux labs."
            },
            {
              "label": "The Linux Programming Interface",
              "url": "https://nostarch.com/tlpi",
              "type": "book",
              "note": "A detailed reference for process creation, permissions, memory, and system calls; selected chapters are enough."
            }
          ],
          "goal": "You can inspect a Linux process, explain its permissions and open files, and troubleshoot basic connectivity.",
          "platform": "linux",
          "symbol": "linux",
          "htbModule": false
        },
        {
          "id": "ost2-dbg1012",
          "title": "Linux debugging with GDB",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Strengthen GDB before Linux buffer-overflow and injection work.",
          "details": [
            "Expects C and assembly knowledge.",
            "Use this if you need practice inspecting memory, registers, stack frames, and execution."
          ],
          "resources": [
            {
              "label": "Dbg1012 — Introductory GDB",
              "url": "https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1012_IntroGDB%2B2024_v1/about",
              "type": "free",
              "note": "Free structured GDB introduction after C and assembly."
            },
            {
              "label": "GNU · GDB manual",
              "url": "https://sourceware.org/gdb/current/onlinedocs/gdb.html/",
              "type": "free",
              "note": "Use the official manual to look up commands and debug your own small programs."
            }
          ],
          "goal": "You can break on a function and inspect registers, arguments, stack frames, and memory in GDB.",
          "platform": "linux",
          "symbol": "debugger",
          "htbModule": false
        },
        {
          "id": "linux-buffer-overflows",
          "title": "Linux stack memory and buffer overflows",
          "provider": "Mixed",
          "kind": "foundation",
          "target": false,
          "summary": "Build the Linux memory and debugger background specifically recommended for injection study.",
          "details": [
            "The entire binary-exploitation path and Windows buffer-overflow module are not needed for this branch.",
            "Apply Linux, networking, assembly, C, and GDB foundations in the module’s labs."
          ],
          "resources": [
            {
              "label": "HTB · Stack-Based Buffer Overflows on Linux x86",
              "url": "https://academy.hackthebox.com/course/preview/stack-based-buffer-overflows-on-linux-x86",
              "type": "paid",
              "note": "The Linux x86 module is specifically recommended preparation for HTB Linux injection."
            },
            {
              "label": "Computer Systems: A Programmer’s Perspective",
              "url": "https://csapp.cs.cmu.edu/",
              "type": "book",
              "note": "Use the machine-level programming and memory chapters to understand what the debugger shows."
            }
          ],
          "goal": "You can explain a stack overwrite in a lab and follow the changed control flow in GDB.",
          "platform": "linux",
          "symbol": "memory",
          "htbModule": false
        },
        {
          "id": "linux-injection",
          "title": "Linux Process Injections & Detections",
          "provider": "HTB",
          "kind": "target",
          "target": true,
          "summary": "Apply Linux execution and memory knowledge to injection analysis and detection.",
          "details": [
            "Bring Python, C structs, Linux fundamentals, assembly, Linux buffer overflows, GDB, YARA/Sigma, and Splunk skills."
          ],
          "resources": [
            {
              "label": "HTB · Linux Process Injections & Detections",
              "url": "https://academy.hackthebox.com/course/preview/linux-process-injections--detections",
              "type": "paid",
              "note": "Apply Linux, C, Python, assembly, GDB, buffer-overflow, YARA/Sigma, and Splunk foundations."
            },
            {
              "label": "Linux man-pages · ptrace",
              "url": "https://man7.org/linux/man-pages/man2/ptrace.2.html",
              "type": "free",
              "note": "Use the system-call reference to understand tracing, memory access, and permission checks."
            },
            {
              "label": "The Linux Programming Interface",
              "url": "https://nostarch.com/tlpi",
              "type": "book",
              "note": "Return to process, signal, and memory APIs when the Linux execution model is unclear."
            }
          ],
          "goal": "You can connect Linux injection behavior to process memory and detection evidence.",
          "platform": "linux",
          "symbol": "memory",
          "htbModule": true
        }
      ]
    },
    {
      "id": "certification",
      "title": "Certification",
      "eyebrow": "Phase 06",
      "description": "Use HTB’s published path and exam guide to confirm eligibility.",
      "steps": [
        {
          "id": "official-path",
          "title": "Certification requirements",
          "provider": "HTB",
          "kind": "launch",
          "target": false,
          "summary": "Reconcile this preparation with HTB’s published syllabus before booking the exam.",
          "details": [
            "HTB announced a Detection Engineering certification, but its final certification name and syllabus have not been verified. No matching path or certification was listed when checked on October 5, 2026.",
            "The June announcement targeted Q3 2026. That target has passed; this roadmap does not claim a confirmed release date.",
            "HTB’s certification library says an exam requires completion of the related Job Role Path and a valid voucher. Check the new certification’s own exam guide when it appears.",
            "Check recognized module completions, finish every remaining required module and assessment until the official path reaches 100%, then confirm voucher/access rules and take the exam.",
            "The 12 target modules here are a proposed advanced preparation set. No OST2 course or separate CDSA exam is confirmed as a new-certification eligibility requirement."
          ],
          "resources": [
            {
              "label": "Official HTB announcement",
              "url": "https://www.hackthebox.com/blog/htb-new-platform-capabilities-defensive-security",
              "type": "free",
              "note": "The announcement establishes the planned certification, not a final syllabus or current exam guide."
            },
            {
              "label": "HTB certification library",
              "url": "https://academy.hackthebox.com/app/library/certificates",
              "type": "free",
              "note": "Check the published certification and its actual eligibility requirements when it appears."
            }
          ],
          "goal": "HTB shows the official path at 100% and you have met that certification’s published exam and voucher requirements.",
          "platform": "shared",
          "symbol": "certificate",
          "htbModule": false
        }
      ]
    }
  ]
};
