// Go find the dogs div element
var dogsElement = document.getElementById('dogs')

// The list of dogs
var dogs = [
    {
        name: 'spike',
        hair: 'brown',
        size: 'medium'
    },
    {
        name: 'fido',
        hair: 'black',
        size: 'large'
    },
    {
        name: 'shiro',
        hair: 'white',
        size: 'small'
    }
]

// Loop over the dogs
for(var i = 0; i < dogs.length; i++) {
    // Create an element for the ul and an 'li' tag for each characteristic
    var unorderedListTag = document.createElement('ul')
    var dogNameListItem = document.createElement('li')
    var dogHairListItem = document.createElement('li')
    var dogSizeListItem = document.createElement('li')

    // Add the property values to the associated elements
    dogNameListItem.innerText = dogs[i].name
    dogHairListItem.innerText = dogs[i].hair
    dogSizeListItem.innerText = dogs[i].size

    // Add the list items to the unordered list
    unorderedListTag.appendChild(dogNameListItem)
    unorderedListTag.appendChild(dogHairListItem)
    unorderedListTag.appendChild(dogSizeListItem)

    // Add the unordered list to the dogs div
    dogsElement.appendChild(unorderedListTag)
}


