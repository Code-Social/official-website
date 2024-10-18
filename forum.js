document.addEventListener('DOMContentLoaded', () => {
    // This is a placeholder for forum functionality
    // You can add more interactive features here as needed

    const forumLinks = document.querySelectorAll('.forum-section a');

    forumLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // You can add analytics tracking here
            console.log(`Clicked on forum link: ${link.href}`);
        });
    });

    // Example of a function to load recent forum topics (simulated)
    function loadRecentTopics() {
        const topicList = document.createElement('ul');
        const topics = [
            'Getting started with React',
            'Best practices for Node.js',
            'CSS Grid vs Flexbox',
            'JavaScript ES6+ features'
        ];

        topics.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic;
            topicList.appendChild(li);
        });

        const forumSection = document.querySelector('.forum-section');
        forumSection.appendChild(topicList);
    }

    // Uncomment the line below to load recent topics
    // loadRecentTopics();
});