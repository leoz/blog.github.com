---
author: leoz
comments: true
date: 2013-09-01 20:13:00+00:00
layout: post
slug: webkit-new-attribute-cheat-sheet
title: "WebKit new attribute cheat sheet"
description: ""
category: webkit
tags: [webkit, ubuntu, linux]
---

This is a step list explaining how to implement a new
[HTML attribute](http://en.wikipedia.org/wiki/HTML_attribute)
for WebKit.
I'm going to use
[QtWebKit](http://trac.webkit.org/wiki/QtWebKit)
for this execise but this approach is generic enough to be used for any other backend.
[Here is a note for building Qt and QtWebKit on Ubuntu Linux.]({{ HOME_PATH }}2013/08/30/qtwebkit-building-cheat-sheet)

<!--more-->

First, check if we could build WebKit and test the build with MiniBrowser.

** Build WebKit **

{% codeblock lang:bash %}

cd ~/Projects/qt_build/qt5/qtwebkit
make
sudo make install

{% endcodeblock %}

** Test WebKit ** 

{% codeblock lang:bash %}

cd ~/Projects/qt_build/qt5/qtwebkit/Tools/MiniBrowser/qt
qmake
make
cd ~/Projects/qt_build/qt5/qtwebkit/bin
./MiniBrowser

{% endcodeblock %}

Now let's start implementing the new attribute.
I'm going to add this new attribute to
[the HTML object element](http://www.w3.org/wiki/HTML/Elements/object)

The code we are going to modify lives here: 
[Source/WebCore/html](https://github.com/WebKit/webkit/tree/master/Source/WebCore/html)

** Add token for the new attribute **

In file
[HTMLAttributeNames.in](https://github.com/WebKit/webkit/blob/master/Source/WebCore/html/HTMLAttributeNames.in)
add line:

{% codeblock lang:c++ %}

altsrc

{% endcodeblock %}

** Add rule for the new attribute **

In file
[HTMLObjectElement.idl](https://github.com/WebKit/webkit/blob/master/Source/WebCore/html/HTMLObjectElement.idl)
add line:

{% codeblock lang:c++ %}

[Reflect, URL] attribute DOMString altsrc;

{% endcodeblock %}

** Add code to support the new attribute **

In file
[HTMLObjectElement.h](https://github.com/WebKit/webkit/blob/master/Source/WebCore/html/HTMLObjectElement.h)
add:

{% codeblock lang:c++ %}

void setAltSrcAttr(const String&);

{% endcodeblock %}

In file
[HTMLObjectElement.cpp](https://github.com/WebKit/webkit/blob/master/Source/WebCore/html/HTMLObjectElement.cpp)
add a new method HTMLObjectElement::setAltSrcAttr :

{% codeblock lang:c++ %}

void HTMLObjectElement::setAltSrcAttr(const String& value)
{
	dataLogF("alt src is: %s\n", value.utf8().data());
}

{% endcodeblock %}

and change HTMLObjectElement::parseAttribute method to support the new attribute:

{% codeblock lang:c++ %}

void HTMLObjectElement::parseAttribute(const QualifiedName& name,
                                       const AtomicString& value)
{
    ...

    else if (name == altsrcAttr)
        setAltSrcAttr(value);

    ...
}

{% endcodeblock %}

** Test **

Create a new file index.html

{% codeblock lang:html %}

<object width="400" height="400" data="helloworld.swf" altsrc="myfile.bmp">
</object>

{% endcodeblock %}

and place it somewhere

{% codeblock lang:bash %}

ls ~/Projects/html/index.html

{% endcodeblock %}

Build and install WebKit with all our changes.

{% codeblock lang:bash %}

make
sudo make install

{% endcodeblock %}

Run MiniBrowser.

{% codeblock lang:bash %}

cd ~/Projects/qt_build/qt5/qtwebkit/bin
./MiniBrowser ../../../../html/index.html

{% endcodeblock %}

You should see this console output:

{% codeblock lang:bash %}

alt src is: myfile.bmp

{% endcodeblock %}
