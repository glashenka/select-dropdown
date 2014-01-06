<Select> → Bootstrap dropdown
A plugin(?) select-dropdown.js is a simple translation of a select-tag as a Bootstrap dropdown. You just need to call a selectToDropdown( markerClassName ) function, where is markerClassName is a preset class for selects you want to change. If markerClassName is not set, then all <select> tags are processed.

<script type="text/javascript">
    $(document).ready(function() {
        $('.dropdown-toggle').dropdown(); //dropdown-initialisation
        selectToDropdown('markerClassName'); //select-dropdown initialisation
    });
</script>
A technical implementation is quite straighforward: the script looks for elements with predefined class (e.g. markerClassName), takes all information from selects, make and add hidden <input> and a classical bootstrap dropdown code, and remove codes of <select>s.

Select #1
Code

<select class="markerClassName someClass" id="someId" name="first">
    <option value="a">the first letter</option>
    <option value="b" default>letter b</option>
    <option value="c">just c</option>
</select>
Result

letter b 
Result code

    <input name="first" type="hidden" value="a">
    <div id="someId" class="dropdown markerClassName someClass">
        <a class="dropdown-toggle btn btn-default" data-toggle="dropdown" href="#">
            the first letter 
            <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#" value="a">the first letter</a>
            </li>
            <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#" value="b">letter b</a>
            </li>
            <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#" value="c">c is a very long option text that checks how does the dropdown behave in this case</a>
            </li>
        </ul>
        </div>
Select #2. An inline one
You may add display: inline-block; to class .dropdown and make selects a part of a text.

Code

<p>
    Using a select as an inline block is possible also
    <select class="markerClassName someAnotherClass" id="someAnotherId" name="second">
        <option value="1" default>one</option>
        <option value="2">two(2)</option>
        <option value="3">three - 3</option>
    </select>
    if you find it useful.
</p>
Result

Using a select as an inline block is possible also one  if you find it useful.

Details
Classes and id from the select are inherited by a outer <div>. Name-attribute are inherited by a the hidden <input>.

Support and prerequisites
I had no intention to make this plugin multibrowser yet. Considering functions I used, such as:

createElement() → Should be fine
getElementById() → Internet Explorer 7 and earlier
getElementsByTagName() → ...
insertBefore() → ...
setAttribute() and getAttribute() → Should be fine
addEventListener(), added attachEvent()-alternative, but not sure if it works
I suppose that support of Internet Explorer is quite restricted. Don't want to look racist here, but...
Prerequisite scripts:

jquery-2.0.3.min.js Not sure about the version
dropdown.js
In case of your question/comments/problems, please, write my on glashenka@gmail.com
