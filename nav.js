const menuItems = [
    { name: "Home", link: "home.html" },
    { name: "Recipe List", link: "list.html" },
    { name: "Cookies and Cream Brownies", link: "cookies-and-cream-brownies.html" },
    { name: "Ube Cheesecake", link: "ube-cheesecake.html" }
];

// 2. selecting the navbar element
const nav = document.getElementById('navbar');

// creating a <ul> element
const navList = document.createElement('ul');

// creating the links
menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    
    anchor.textContent = item.name;
    anchor.href = item.link;
    
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
});

// 5. putting the list into the navbar
nav.appendChild(navList);