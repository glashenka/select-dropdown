<div class="container">

<h1>&lt;Select&gt; &rarr; Bootstrap dropdown</h1>

<p>A plugin(?) <a href="#">select-dropdown.js</a> is a simple translation of a select-tag as a Bootstrap dropdown. You just need to call a <code>selectToDropdown( markerClassName )</code> function, where is <i>markerClassName</i> is a preset class for selects you want to change. If <i>markerClassName</i> is not set, then all <code>&lt;select&gt;</code> tags are processed.</p>
<pre>
&lt;script type="text/javascript"&gt;
    $(document).ready(function() {
        $('.dropdown-toggle').dropdown(); //dropdown-initialisation
        selectToDropdown('markerClassName'); //select-dropdown initialisation
    });
&lt;/script&gt;
</pre>
<p>A technical implementation is quite straighforward: the script looks for elements with predefined class (e.g. <code>markerClassName</code>), takes all information from selects, make and add hidden <code>&lt;input&gt;</code> and a classical bootstrap dropdown code, and remove codes of <code>&lt;select&gt;</code>s.</p>
<h2> Select #1</h2>
<h4>Code</h4>
<pre>
&lt;select class="<b>markerClassName</b> someClass" id="someId" name="first"&gt;
    &lt;option value="a"&gt;the first letter&lt;/option&gt;
    &lt;option value="b" default&gt;letter b&lt;/option&gt;
    &lt;option value="c"&gt;just c&lt;/option&gt;
&lt;/select&gt;
</pre>
<h4>Result</h4> 
    <select class="markerClassName someClass" id="someId" name="first">
        <option value="a">the first letter</option>
        <option value="b" default>letter b</option>
        <option value="c">c is a very long option text that checks how does the dropdown behave in this case</option>
    </select>
<h4>Result code</h4>
<pre>
    &lt;input name="first" type="hidden" value="a"&gt;
    &lt;div id="someId" class="dropdown markerClassName someClass"&gt;
        &lt;a class="dropdown-toggle btn btn-default" data-toggle="dropdown" href="#"&gt;
            the first letter 
            &lt;span class="caret"&gt;&lt;/span&gt;
        &lt;/a&gt;
        &lt;ul class="dropdown-menu" role="menu" aria-labelledby="dLabel"&gt;
            &lt;li role="presentation"&gt;
                &lt;a role="menuitem" tabindex="-1" href="#" value="a"&gt;the first letter&lt;/a&gt;
            &lt;/li&gt;
            &lt;li role="presentation"&gt;
                &lt;a role="menuitem" tabindex="-1" href="#" value="b"&gt;letter b&lt;/a&gt;
            &lt;/li&gt;
            &lt;li role="presentation"&gt;
                &lt;a role="menuitem" tabindex="-1" href="#" value="c"&gt;c is a very long option text that checks how does the dropdown behave in this case&lt;/a&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;/div&gt;
</pre>
<h2> Select #2. An inline one</h2>
<p>You may add <code>display: inline-block;</code> to class <code>.dropdown</code> and make selects a part of a text.
<h4>Code</h4>
<pre>
&lt;p&gt;
    Using a select as an inline block is possible also
    &lt;select class="<b>markerClassName</b> someAnotherClass" id="someAnotherId" name="second"&gt;
        &lt;option value="1" default&gt;one&lt;/option&gt;
        &lt;option value="2"&gt;two(2)&lt;/option&gt;
        &lt;option value="3"&gt;three - 3&lt;/option&gt;
    &lt;/select&gt;
    if you find it useful.
&lt;/p&gt;
</pre>
<h4>Result</h4>

<p>
    Using a select as an inline block is possible also
    <select class="markerClassName someAnotherClass" id="someAnotherId" name="second">
        <option value="1" default>one</option>
        <option value="2">two(2)</option>
        <option value="3">three - 3</option>
    </select>
if you find it useful.</p>
<!-- <h4>Result code</h4>
<pre>...</pre> -->

<h2>Details</h2>
<p>Classes and id from the select are inherited by a outer <code>&lt;div&gt;</code>. Name-attribute are inherited by a the hidden <code>&lt;input&gt;</code>.</p>

<h2>Support and prerequisites</h2>
<p>I had no intention to make this plugin multibrowser yet. Considering functions I used, such as:
<ul>
    <li><code>createElement()</code> &rarr; Should be fine</li>
    <li><code>getElementById()</code> &rarr; <strike>Internet Explorer 7 and earlier</strike></li>
    <li><code>getElementsByTagName()</code> &rarr;  ...</li>
    <li><code>insertBefore()</code> &rarr;  ...</li>
    <li><code>setAttribute()</code> and <code>getAttribute()</code> &rarr; Should be fine</li>
    <li><code>addEventListener()</code>, added <code>attachEvent()</code>-alternative, but not sure if it works</li>
</ul>
I suppose that support of Internet Explorer is quite restricted. Don't want to look racist here, but...
</p>


<p>Prerequisite scripts:
<ul>
    <li><a href="">jquery-2.0.3.min.js</a> Not sure about the version</li>
    <li><a href="">dropdown.js</a></li>
</ul>
</p>

<p>In case of your question/comments/problems, please, write my on <a href="mailto:glashenka@gmail.com">glashenka@gmail.com</a></p>

</div>

        <script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
        <!-- // <script type="text/javascript" src="js/bootstrap.min.js"></script> -->
        <script type="text/javascript" src="js/dropdown.js"></script>
        <script type="text/javascript" src="js/select-dropdown.js"></script>
        <script type="text/javascript">
            $(document).ready(function() {
                $('.dropdown-toggle').dropdown();
                // selectToDropdown('markerClassName');
                selectToDropdown();
            });
        </script>
        </body>
    </html>
