async function fetchApps() {
    try {
        let response = await fetch('https://appsource.microsoft.com/view/tiledata?ReviewsMyCommentsFilter=true&country=US&entityType=App&product=power-bi-visuals&region=ALL');
        let data = await response.json();
        renderApps(data.App.datalist);
    } catch (error) {
        console.error('Error fetching app data:', error);
    }
}

fetchApps