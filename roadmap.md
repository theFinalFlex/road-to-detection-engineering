# HTB Detection Engineering Certification Preparation Roadmap

**Last verified: October 5, 2026**

Goal: prepare for HTB's announced Detection Engineering certification by completing the relevant foundations and 12 advanced defensive modules.

**Status:** This is a proposed preparation sequence, not an official certification syllabus. The Detection Engineering path was not listed in the HTB Academy path or certification catalog when checked. HTB requires completion of the related Job Role Path and a valid voucher to take an exam. Once the new path is published, use its module list and exam rules as the authoritative checklist.

Sources: [HTB announcement](https://www.hackthebox.com/blog/htb-new-platform-capabilities-defensive-security) · [HTB certification library](https://academy.hackthebox.com/app/library/certificates)

## Ordered checklist

1. [ ] **Build the SOC Analyst foundations; take CDSA if it is part of your goals.**
   - Complete or review the [SOC Analyst path](https://academy.hackthebox.com/path/preview/soc-analyst), its exercises and assessments to fill your skill gaps. The CDSA exam is optional for this preparation plan.
   - Carry forward Windows event logs, Splunk, malware analysis, YARA/Sigma, investigation, and reporting skills. Do not repeat completed modules unnecessarily.
   - Keep **JavaScript Deobfuscation**, which is part of CDSA. It is different from **Secure Coding 101: JavaScript**, which is excluded from this advanced preparation list.
   - The SOC Analyst curriculum supplies the foundation for this roadmap; holding the CDSA certification has not been verified as an eligibility requirement for the upcoming certification.

2. [ ] **Build practical C, basic C++, and Python skills.**
   - C: pointers, structs, arrays, allocation, function pointers, compilation, linking, and debugging.
   - C++: references, object lifetime, basic classes, and reading Windows-oriented examples.
   - Python: files, data structures, parsing, and small analysis/automation scripts.
   - Resources: [CS50 C material, weeks 1–5](https://cs50.harvard.edu/x/), selected [LearnCpp lessons](https://www.learncpp.com/), and [HTB Introduction to Python 3](https://academy.hackthebox.com/course/preview/introduction-to-python-3).
   - Move on when you can read, modify, compile, and debug small programs. Entire external programming curricula are not required.

3. [ ] **OST2 Arch1001: x86-64 Assembly → HTB Intro to Assembly Language.**
   - Cover registers, addressing, stack frames, branching, function calls, and basic GDB usage.
   - If assembly is new, use [OST2 Arch1001: x86-64 Assembly](https://p.ost2.fyi/courses/course-v1%3AOpenSecurityTraining2%2BArch1001_x86-64_Asm%2B2021_v1/about) as the structured foundation after learning C.
   - Then complete [HTB Intro to Assembly Language](https://academy.hackthebox.com/course/preview/intro-to-assembly-language) for applied practice. If you already understand the assembly material, skip duplicate lessons rather than treating both full courses as compulsory.
   - Include the [Windows x64 calling convention](https://learn.microsoft.com/en-us/cpp/build/x64-calling-convention?view=msvc-170).

4. [ ] **OST2 Arch2001 selections → Windows internals/PE → OST2 Dbg1101: Introductory IDA.**
   - Use selected [OST2 Arch2001: x86-64 OS Internals](https://p.ost2.fyi/courses/course-v1%3AOpenSecurityTraining2%2BArch2001_x86-64_OS_Internals%2B2024_v1/about) lessons on paging, privilege levels, interrupts, and transitions between user and kernel mode. It expects C and Arch1001-level assembly. Full completion is optional for this certification preparation plan.
   - Cover processes, threads, virtual memory, handles, tokens, DLL loading, Win32/Native APIs, and PE headers, sections, imports, and relocations.
   - Compile small programs and inspect them in a debugger/disassembler.
   - Resources: selected [Windows Internals material](https://learn.microsoft.com/en-us/sysinternals/resources/windows-internals), [processes and threads](https://learn.microsoft.com/en-us/windows/win32/procthread/processes-and-threads), [PE format](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format), and [OST2 Introductory IDA](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1101_IntroIDA%2B2024_v1/about).
   - Work through Dbg1101 if IDA is new. It introduces the interface and debugger; it is not a complete reverse-engineering curriculum. Practice navigating functions and cross-references during your HTB malware and tradecraft work.
   - Learn enough to connect source code, assembly, API calls, and memory. Do not make cover-to-cover textbook completion a prerequisite.

5. [ ] **OST2 Dbg1011: Introductory WinDbg → HTB Introduction to Dynamic Analysis with WinDbg — target module 1/12.**
   - [Open module](https://academy.hackthebox.com/course/preview/introduction-to-dynamic-analysis-with-windbg).
   - Practice breakpoints, arguments, registers, memory, call stacks, and the module's user/kernel debugging exercises.
   - Work through [OST2 Dbg1011: Introductory WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1011_WinDbg1%2B2024_v1/about) first if WinDbg is new; use it as a reference if you already have the equivalent skills.
   - Placing WinDbg before Introduction to Detection Engineering is a study recommendation, not its listed prerequisite.

6. [ ] **Intro to Academy's Purple Modules → Detection & OpSec Cyber Range.**
   - [Purple introduction](https://academy.hackthebox.com/course/preview/intro-to-academys-purple-modules) → [Cyber Range](https://academy.hackthebox.com/course/preview/detection--opsec-cyber-range).
   - Learn the lab workflow, logging, evidence collection, and detection validation.
   - Both are recommended preparation for Introduction to Detection Engineering. The Purple introduction is explicitly a prerequisite for the Cyber Range. Neither has been independently confirmed as a requirement of the upcoming certification.

7. [ ] **Introduction to Detection Engineering — target module 2/12.**
   - [Open module](https://academy.hackthebox.com/course/preview/introduction-to-detection-engineering).
   - Apply the complete workflow: behavior → telemetry → detection hypothesis → rule → validation → tuning.

8. [ ] **Detecting Access Token Manipulation Attacks — target module 3/12.**
   - [Open module](https://academy.hackthebox.com/course/preview/detecting-access-token-manipulation-attacks).
   - Build token, privilege, and impersonation knowledge for later tradecraft analysis.

9. [ ] **Process Injection Attacks and Detection — target module 4/12.**
   - [Open module](https://academy.hackthebox.com/course/preview/process-injection-attacks-and-detection).
   - Connect C, assembly, PE structures, Windows APIs, malware analysis, debugging, and detection opportunities.

10. [ ] **Windows API Monitoring and Hooking — target module 5/12.**
    - [Open module](https://academy.hackthebox.com/course/preview/windows-api-monitoring-and-hooking).
    - Process Injection is explicitly recommended background.

11. [ ] **Windows Low Level Detectability — target module 6/12.**
    - [Open module](https://academy.hackthebox.com/course/preview/windows-low-level-detectability).
    - API Monitoring first is a useful study sequence, but is not an explicitly listed prerequisite for this module.
    - **OST2 checkpoint: [Dbg2011 — Intermediate WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg2011_WinDbg2%2B2021_v1/about).** Use it here to strengthen debugging before the tradecraft/kernel work. It is supporting study, not a confirmed HTB certification requirement; skip material you can already apply confidently.

12. [ ] **COM/WMI fundamentals → WMI Tradecraft Analysis — target module 7/12.**
    - Learn interfaces, CLSIDs/IIDs, activation, registration, namespaces, providers, and event subscriptions.
    - References: [COM](https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal) and [WMI](https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page).
    - Then complete [WMI Tradecraft Analysis](https://academy.hackthebox.com/course/preview/wmi-tradecraft-analysis).

13. [ ] **Persistence Tradecraft Analysis — target module 8/12.**
    - [Open module](https://academy.hackthebox.com/course/preview/persistence-tradecraft-analysis).
    - Apply the Low Level Detectability, COM, Win32, reversing, and Splunk foundations already covered.

14. [ ] **Windows Privilege Escalation → Privilege Escalation Tradecraft Analysis — target module 9/12.**
    - Complete or review [Windows Privilege Escalation](https://academy.hackthebox.com/course/preview/windows-privilege-escalation) if that background is missing.
    - Then complete [Privilege Escalation Tradecraft Analysis](https://academy.hackthebox.com/course/preview/privilege-escalation-tradecraft-analysis).
    - WinDbg, token detection, and Low Level Detectability are already covered earlier in the sequence.

15. [ ] **AD fundamentals and attacks → Credential Access Tradecraft Analysis — target module 10/12.**
    - Fill AD fundamentals with [Introduction to Active Directory](https://academy.hackthebox.com/app/module/74) if needed.
    - Complete or review [Active Directory Enumeration & Attacks](https://academy.hackthebox.com/course/preview/active-directory-enumeration--attacks).
    - Then complete [Credential Access Tradecraft Analysis](https://academy.hackthebox.com/course/preview/credential-access-tradecraft-analysis).
    - This does not require earning CPTS or CAPE.

16. [ ] **Optional OST2 kernel preparation → Windows Kernel Telemetry & Detection Techniques — target module 11/12.**
    - [Open module](https://academy.hackthebox.com/course/preview/windows-kernel-telemetry--detection-techniques).
    - Fill specific gaps in kernel debugging, callbacks, IRQL, synchronization, and kernel memory as needed.
    - For deeper kernel preparation, follow **[OST2 Dbg3011: Advanced WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg3011_WinDbg3%2B2023_v1/about) → [Arch2821: Windows Kernel Internals 2](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2821_Windows_Kernel_Internals_2%2B2023_v1/about)**, after introductory/intermediate WinDbg knowledge.
    - Dbg3011 builds the two-VM kernel-debugging environment used by Arch2821. Arch2821 requires this setup or an equivalent environment, so do the setup first.
    - Use these courses to fill gaps before or alongside HTB Kernel Telemetry. Full completion of this external kernel sequence or a driver-development curriculum is not a listed HTB prerequisite.
    - Its late placement manages difficulty; it does not formally depend on completing every tradecraft module first.

17. [ ] **Linux buffer-overflow preparation → Linux Process Injections & Detections — target module 12/12.**
    - Ensure Linux and networking fundamentals are solid; skip repeating them if already completed/mastered.
    - Complete [Stack-Based Buffer Overflows on Linux x86](https://academy.hackthebox.com/course/preview/stack-based-buffer-overflows-on-linux-x86) and refresh GDB with [OST2 Dbg1012: Introductory GDB](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1012_IntroGDB%2B2024_v1/about) if needed.
    - Then complete [Linux Process Injections & Detections](https://academy.hackthebox.com/course/preview/linux-process-injections--detections).
    - The Linux buffer-overflow module is specifically recommended. The whole binary-exploitation path and Windows buffer-overflow module are not necessary additions for this branch.

18. [ ] **Complete the published certification path and take the exam.**
    - As soon as HTB publishes the official path, make it the authoritative checklist—even if you are midway through this roadmap.
    - Check which existing module completions it recognizes.
    - Complete every remaining required module, exercise, and assessment until the official path shows 100%.
    - Read the exam guide, confirm access and voucher requirements, and take the exam.

## OST2 courses and where they fit

OST2 means **OpenSecurityTraining2**. These courses supply the assembly, debugger, and OS knowledge behind the HTB work. Their placement below is a study recommendation. No OST2 course has been verified as an eligibility requirement for the announced HTB certification.

| Order | OST2 course | Placement in this roadmap | Recommended scope |
| --- | --- | --- | --- |
| 1 | [Arch1001 — x86-64 Assembly](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch1001_x86-64_Asm%2B2021_v1/about) | Step 3, after C and before HTB assembly practice | Structured foundation if assembly is new; skip duplicated material if already proficient. |
| 2 | [Arch2001 — x86-64 OS Internals](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2001_x86-64_OS_Internals%2B2024_v1/about) | Step 4, after Arch1001 or equivalent | Selected paging, privilege, interrupt, and user/kernel transition lessons. Full course optional. |
| 3 | [Dbg1101 — Introductory IDA](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1101_IntroIDA%2B2024_v1/about) | Step 4, after C/assembly and before advanced tradecraft | Recommended short introduction if IDA is new; focuses on the UI and debugger. |
| 4 | [Dbg1011 — Introductory WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1011_WinDbg1%2B2024_v1/about) | Step 5, immediately before HTB WinDbg | Recommended debugger foundation if WinDbg is new. |
| 5 | [Dbg2011 — Intermediate WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg2011_WinDbg2%2B2021_v1/about) | After Step 11, before deeper tradecraft/kernel study | Strengthen WinDbg and learn introductory kernel debugging; expects Dbg1011 knowledge. |
| 6 | [Dbg3011 — Advanced WinDbg](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg3011_WinDbg3%2B2023_v1/about) | Step 16, before Arch2821 | Optional deeper preparation: configure the two-VM kernel-debugging/build environment. Expects assembly and introductory/intermediate WinDbg knowledge. |
| 7 | [Arch2821 — Windows Kernel Internals 2](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BArch2821_Windows_Kernel_Internals_2%2B2023_v1/about) | Step 16, before or alongside HTB Kernel Telemetry | Optional deeper kernel study. Requires introductory/intermediate WinDbg knowledge and Dbg3011's setup or an equivalent environment. |

**Linux support:** [Dbg1012 — Introductory GDB](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1012_IntroGDB%2B2024_v1/about) belongs before the Linux buffer-overflow/injection work in Step 17 if GDB skills need strengthening. It expects C and assembly knowledge.

**Optional tool alternative:** [Dbg1102 — Introductory Ghidra](https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2%2BDbg1102_IntroGhidra%2B2024_v2/about) can follow introductory WinDbg or GDB. It emphasizes Ghidra's debugger and expects assembly knowledge. It is not an extra mandatory course; retain basic IDA familiarity for HTB modules that expect it.

The Windows debugger branch is **Dbg1011 → Dbg2011 → Dbg3011 → Arch2821**. The architecture branch is **C → Arch1001 → Arch2001**. These branches support the HTB sequence; they do not all have to be finished before starting the HTB detection modules.

## Keep the scope focused

- Skip prerequisite study already completed or genuinely mastered, unless it becomes a required module in the official certification path.
- Do not add mandatory completion of every OST2 course, both Windows Internals volumes, OSTEP, CS:APP, or multiple overlapping programming courses.
- Do not add separate certifications, extensive driver projects, a broad eBPF specialization, or a full binary-exploitation curriculum before the exam unless the official scope calls for them.
- Blogs and public tools are optional career-development work, not prerequisites for following this roadmap.
- Exclude **Secure Coding 101: JavaScript** from this proposed advanced module set, unless HTB includes it in the official certification path.
- Throughout the technical modules, practice writing detections, testing malicious and benign activity, troubleshooting missing telemetry, and documenting evidence.
