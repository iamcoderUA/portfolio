const works = {
    mutations: {
        fileload(store, work) {
            const xhr = new XMLHttpRequest();
            const data = new FormData();
            data.append('name', work.name);
            data.append('tech', work.tech);
            data.append('link', work.link);
            data.append('photo', work.file);
            xhr.open('POST', 'api/addWork');
            xhr.send(data);
        }
    }

}

export default works;