import axios from 'axios'
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // console.log(response.data);
        const topicArray = response.data.topics;
        topicArray.forEach((topic) => {
        topics.appendChild(tabMaker(topic))
        })
    })
    .catch(error => {
        console.dir(error);
    });

    const topics = document.querySelector('.topics');

    // const tab = document.querySelector('div');
    // tab.classList.add('tab');

    function tabMaker(tabData){

            // create div element
            const newTab = document.createElement('div');
            //add class of "tab"
            newTab.classList.add('tab');
            //textContent
            newTab.textContent = tabData;
            //topics appendChild
        return newTab
    }

