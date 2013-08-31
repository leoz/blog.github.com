---
author: leoz
comments: true
date: 2013-08-30 19:13:00+00:00
layout: post
slug: qtwebkit-building-cheat-sheet
title: "QtWebKit building cheat sheet"
description: ""
category: webkit
tags: [webkit, qt, ubuntu, linux]
---
{% include JB/setup %}

This cheat sheet explains how to build Qt and QtWebKit from source code on Ubuntu Linux.
It assumes x86 machine and Ubuntu 13.04.
The instructions based on the following article: [http://qt-project.org/wiki/Building_Qt_5_from_Git](http://qt-project.org/wiki/Building_Qt_5_from_Git)

<!--break-->

** Get dependencies **

{% highlight bash %}

sudo apt-get install build-essential perl python git
sudo apt-get install "^libxcb.*" libx11-xcb-dev libglu1-mesa-dev libxrender-dev
sudo apt-get install flex bison gperf libicu-dev libxslt-dev ruby
sudo apt-get install libsqlite3-dev
sudo apt-get install libxrender-dev gperf libfontconfig1-dev libpng12-dev

{% endhighlight %}

** Get sources **

{% highlight bash %}

cd ~/Projects/
mkdir qt_build
cd qt_build/

{% endhighlight %}

{% highlight bash %}

git clone git://gitorious.org/qt/qt5.git qt5
cd qt5/
git checkout stable
perl init-repository

{% endhighlight %}

** Build **

{% highlight bash %}

./configure -opensource -confirm-license -nomake examples -nomake tests
make -j 4
sudo make install

{% endhighlight %}

* Check where Qt is installed.

{% highlight bash %}

ls /usr/local/Qt-5.1.2/

{% endhighlight %}

** Change env. **

{% highlight bash %}

cd ~
vi .bashrc

{% endhighlight %}

* Add QTDIR environment variable to your .bashrc file.
* Change PATH variable to include QTDIR/bin.

{% highlight bash %}

export QTDIR=/usr/local/Qt-5.1.2
export PATH=$QTDIR/bin:$PATH

{% endhighlight %}

** Test WebKit **

{% highlight bash %}

cd ~/Projects/qt_build/qt5/qtwebkit/Tools/MiniBrowser/qt
qmake
make
cd ~/Projects/qt_build/qt5/qtwebkit/bin
./MiniBrowser

{% endhighlight %}

