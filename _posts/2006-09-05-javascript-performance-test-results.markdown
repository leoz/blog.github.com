---
author: leoz
comments: true
date: 2006-09-05 11:22:50+00:00
layout: post
slug: javascript-performance-test-results
title: JavaScript performance test results
wordpress_id: 11
categories:
- firefox
- web20
---

Platform:

  * Hardware: IBM ThinkPad T41, Intel Pentium M 1.59 GHz, 512M of RAM  
  * OS: MS Windows XP SP2

Test:

  * [JavaScript performance test](http://wd-testnet.world-direct.at/mozilla/dhtml/funo/jsTimeTest.htm)

Browsers:

  * MS Internet Explorer 7, RC, version 7.0.5700.6  
  * Firefox-Minefield, version 3.0a1, Mozilla 1.9a1, Gecko/2006090404  
  * Flock, version 0.7.4.1, Mozilla 1.8.0.5, Gecko/20060731, Firefox/1.5.0.5  
  * Opera 9.01  
  * Swift 0.1, WebKit for WIN32

<!--break-->

Results:

  1. Opera 9 - **668ms**  
  2. Swift 0.1 - **781ms**  
  3. MS IE 7 - **958ms**  
  4. FF 3.0 - **1386ms**  
  5. Flock 0.7 - **2379ms**

<br/>

  * Tests were made several times for every browser but the average result is about the one above.

Resume:

  * Opera 9 is a winner.  
  * Mozilla 1.8-1.9 is a looser.

Browser notes:

  * Flock browser is based on Firefox, that based on Mozilla.  
  * Every Mozilla based browser info contains also correspondent Mozilla and Gecko versions.  
  * Swift is a first WebKit based browser for MS Windows.

**Update 2006.09.05 16:27:**

I've made a bug report for Mozilla regarding this issue: [Bug # 351406](https://bugzilla.mozilla.org/show_bug.cgi?id=351406)
