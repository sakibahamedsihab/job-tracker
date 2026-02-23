
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    getElementBtId -> When there is specific element with id name, it is best to use this to get that element(returns signel element)
    getElementsByClassName -> if there are multiple cards or div with a common class name then this is helpful and it returns a HTML collection (Live collection)
    querySelector -> it selects the first element of given name or hmtl tag. Eg. document.querySelector('div') or document.querySelector('#idName'); 
    querySelectorAll -> it selects all the matching element with given id, className or html tag and returns a NodeList which is a static collection and can be applied forEach method.
2. How do you create and insert a new element into the DOM?
    create: const li = document.createElement('li');
    insert it into a div: document.div.appendChild(li);
3. What is Event Bubbling? And how does it work?
    If any event occurs in any of the html element then it propogates to its parent and then its grandparent all the way to the root of the html is called event bubbling.

    <div id="grandpanet">
        <div id="parent">
            <div id="child">
                click
            </div>
        </div>
    </div>

    if addEventListener is called on click(child), it will then trigger parent and then grandparent after that document lastly window object.
4. What is Event Delegation in JavaScript? Why is it useful?

    most useful case of event bubbling is event delegation. if a div[id=parent] containes 50 button, instead of adding listener to all that 50 buttons, all of that 50 list can be trigger by just adding event to their parent, which is div[id=parent]. and this is called event delegation 
5. What is the difference between preventDefault() and stopPropagation() methods?
    preventDedault() stop default behaviour of the brower that means, clicking on a link will not open that link and submit the form button will not refresh the page etc.
    while on the other hand stopPropogation stop the event from trigger the element of its parents (bubbling). 

