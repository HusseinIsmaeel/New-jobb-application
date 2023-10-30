document.getElementById('job-application-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Här kan du lägga till kod för att hantera formulärdata
    alert('Formulär skickat!');
});


<script>
    document.getElementById('job-application-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tack för din ansökan!');
        // Reset the form
        e.target.reset();
    });
</script>
