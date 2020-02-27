function buttonHandler(event) {
    event.preventDefault();
    document.getElementById('cityName').textContent = '';
    document.getElementById('departing').textContent = '';
    document.getElementById('lat').textContent = '';
    document.getElementById('longtitude').textContent = '';
    document.getElementById('content').textContent = '';
    document.getElementById('test').textContent = '';
    document.getElementsByClassName('gap').textContent='';
    document.getElementById('entryHolder').textContent = '';
}
document.getElementById('removeTrip').addEventListener('click', () => buttonHandler(event));

            
export default buttonHandler;