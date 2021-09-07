import { LoadView } from './views.js';
import { restoreStyle } from './styles.js';
import { fixGlitch } from './styles.js';

(() => {
    let h1 = document.querySelector('#h1');
    let link = document.querySelector('#link');
    let linkExt = document.querySelector('#linkExtension');
    let viewsLink = document.querySelector('#viewsLink');

    let Routes = function(name, routes) {
        return {
            name: name,
            routes: routes
        }
    }

    let tasksRoutes = new Routes('tasksRoutes', [
        {
            name:'Toggle Task',
            task: 'toggle'
        },
        {
            name:'Filter Task',
            task: 'filter'
        },
        {
            name:'Fetch Task',
            task: 'fetch'
        }
    ]);

    let linkHref = (path, pathExt, viewspath) => {
        link.href = path;
        viewsLink.href = viewspath;
        if (pathExt !== null) {
            linkExt.href = pathExt;
        } else {
            linkExt.removeAttribute('href');
        }
    }

    let changeViewContent = (title) => {
        h1.innerHTML = title;
        let task = tasksRoutes.routes.filter(taskRoute => {
            return taskRoute.name === title;
        })[0];
        if (title === 'Solve js') {
            document.title = 'Solve js | Home';
            let homeviewCSS = './setup/home/home.css';
            LoadView('./setup/home/home.html', title);
            linkHref('./setup/css/js/home.css',null, homeviewCSS);
            restoreStyle();
        } else {
            document.title = `Solve js | ${task.name}`;
            let otherviewsCSS = './setup/css/js/other.css';
            LoadView(`./solve/${task.task}/${task.task}.html`, title);
            linkHref(otherviewsCSS, `./setup/css/js/other-ext/${task.task}.css`, `./solve/${task.task}/${task.task}.css`);
            fixGlitch();
        }
    }

    let aRoutes = Array.from(document.querySelectorAll('[route]'));

    let navigate = (event) => {
        event.preventDefault();
        h1.classList.add('font-transition');
        let route = event.target.attributes[0].value;
        changeViewContent(route);
        localStorage.setItem('pageTitle', route);
    }

    aRoutes.forEach(a => {
        a.addEventListener('click', navigate, false);
    });

    window.onload = function() {
        h1.classList.remove('font-transition');
        let getItem = localStorage.getItem('pageTitle');
        if (getItem !== null) {
            changeViewContent(getItem);
        } else {
            changeViewContent('Solve js');
        }
    }
})();