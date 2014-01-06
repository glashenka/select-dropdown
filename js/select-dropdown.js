    function selectToDropdown(markerClassName){
        if (!markerClassName) var markerClassName = '';
  
        var elements = document.getElementsByTagName('select');
        var selects = [];

        //making an array of all elements with class @markerClassName
        for (var i = 0, length = elements.length; i < length; i++) {
            if ((elements[i].className).indexOf(markerClassName) > -1) {
                selects.push(elements[i]);
            }
        }
        // console.log('elements(coll):', elements);
        // console.log('selects(arr):', selects);
        
        //main loop through all chosen selects
        selects.forEach(function(e){

            var dropdownDiv =  document.createElement('div');
            dropdownDiv.setAttribute('id', e.id);
            dropdownDiv.setAttribute('class', 'dropdown ' + e.className);

            e.parentNode.insertBefore(dropdownDiv, e);
            // console.log(e.parentNode);
            // console.log(dropdownDiv);

            var hiddenInput = document.createElement('input');
            hiddenInput.setAttribute('name', e.name);
            hiddenInput.setAttribute('type', 'hidden');
            hiddenInput.setAttribute('value', 'none');
            
            e.parentNode.insertBefore(hiddenInput, dropdownDiv);
            // console.log(hiddenInput);

            // creating a dropdown trigger
            var dropdownTrigger = document.createElement('a');
            var caretText = ' <span class="caret"></span>';
            dropdownTrigger.setAttribute('class', 'dropdown-toggle btn btn-default');
            dropdownTrigger.setAttribute('data-toggle', 'dropdown');
            dropdownTrigger.setAttribute('href', '#');
            dropdownTrigger.innerHTML = 'Select me!' + caretText;

            dropdownDiv.appendChild(dropdownTrigger);

            // creating a dropdown list
            var dropdownMenu = document.createElement('ul');
            dropdownMenu.setAttribute('class', 'dropdown-menu');
            dropdownMenu.setAttribute('role', 'menu');
            dropdownMenu.setAttribute('aria-labelledby', 'dLabel');
            

            var options = e.childNodes;
            // console.log(options);
            for (var i = 0, length = options.length; i < length; i++) {
            
                if (options[i].nodeType == 1) {
                    //creating <li role="presentation">
                    var li = document.createElement('li');
                    li.setAttribute('role', 'presentation');

                    // creating <a role="menuitem" tabindex="-1" href="#">
                    var liA = document.createElement('a');
                    liA.setAttribute('role', 'menuitem');
                    liA.setAttribute('tabindex', '-1');
                    liA.setAttribute('href', '#');
                    liA.setAttribute('value', options[i].getAttribute('value'));
                    
                    liA.innerHTML = options[i].firstChild.nodeValue;

                    // check default-attribute
                    var isDefault = options[i].getAttribute('default');
                    // console.log(isDefault);
                    if(isDefault != null) {
                        hiddenInput.setAttribute('value', 
                                options[i].getAttribute('value'));
                            dropdownTrigger.innerHTML = liA.innerHTML + caretText;
                    }
                    // add an event listener
                    if (liA.addEventListener) {
                        liA.addEventListener("click", function(e){
                            e.preventDefault();
                            // console.log('clicked', this);
                            hiddenInput.setAttribute('value', 
                                this.getAttribute('value'));
                            dropdownTrigger.innerHTML = this.firstChild.nodeValue
                                + caretText;
                        }, false);
                    // }
                    } else {
                        liA.attachEvent('onclick', function(e){
                            e.preventDefault();
                            // console.log('clicked', this);
                            hiddenInput.setAttribute('value', 
                                this.getAttribute('value'));
                            dropdownTrigger.innerHTML = this.firstChild.nodeValue
                                + caretText;

                        });
                    } 

                    li.appendChild(liA);
                    dropdownMenu.appendChild(li);
                    // console.log(options[i].value);
                    // console.log(options[i].firstChild.nodeValue);

                }
            }
            dropdownDiv.appendChild(dropdownMenu);
            //and remove a select
            e.parentNode.removeChild(e);
            // console.log(dropdownDiv);

        });
    }
