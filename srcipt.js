function search() {
    var input = document.querySelector('.search-input').value;
    if (input.includes('Google')) {
        window.location.href = 'https://www.google.com';
    } else if (input.includes('Youtube') || input.includes('youtube') || input.includes('youtube.com')) {
        window.location.href = 'https://www.youtube.com';
    } else if (input.includes('Andylyn') || input.includes('andylyn')) {
        window.location.href = 'https://www.facebook.com/Jaeeee.yuunn';
    } else if (input.includes('Pauline') || input.includes('Lucre') ||  input.includes('pauline')) {
        window.location.href = 'https://www.facebook.com/paulinerain.lucre.5';
    } else if (input.includes('Sir Din') || input.includes('Aladin') ||  input.includes('best teacher')) {
        window.location.href = 'https://www.facebook.com/aladin.silvestre.129';
    } else if (input.includes('Onza') ||  input.includes('John Kirt')||  input.includes('john kirt') ||  input.includes('John kirt michael')) {
        window.location.href = 'https://www.facebook.com/johnmichael.onza';
    } else if (input.includes('Jay') ||  input.includes('jay')||  input.includes('Magoliman')) {
        window.location.href = 'https://www.facebook.com/profile.php?id=100094166333693';
    } else if (input.includes('Edge')) {
        window.location.href = 'https://edge.mfi.org.ph/edgev4/my/';
    } else if (input.includes('Lance') ||  input.includes('lance')||  input.includes('Dumago')) {
        window.location.href = 'https://www.facebook.com/lanceemanuele.dumago';
    } else if (input.includes('Jannine') ||  input.includes('jannine')) {
        window.location.href = 'https://www.facebook.com/jenin.olarte';
    } else if (input.includes('Maryjoy') ||  input.includes('maryjoy')) {
        window.location.href = 'https://www.facebook.com/maryjoy.bernabe.562';
    } else if (input.includes('Karla') ||  input.includes('karla')) {
        window.location.href = 'https://www.facebook.com/karlamae.mojedo.9';
    } else if (input.includes('Althea') ||  input.includes('althea')) {
        window.location.href = 'https://www.facebook.com/althea.mojedo26'; 
    } else if (input.includes('Tyrone') ||  input.includes('tangco') ||  input.includes('tj')) {
        window.location.href = 'https://www.facebook.com/tyronejames.tangco'; 
    } else if (input.includes('William')||  input.includes('Boss will')||  input.includes('will')) {
        window.location.href = 'https://www.facebook.com/william.boloferadornado'; 
    } else if (input.includes('Kissasian')) {
        window.location.href = 'https://kissasian.lu/'; 
    } else if (input.includes('My demon')) {
        window.location.href = 'https://kissasian.cam/series/my-demon/'; 
    } else if (input.includes('Convert Insta')) {
        window.location.href = 'https://allinonedownloader.com/instagram-video-downloader.php'; 
    } else if (input.includes('Convert You')) {
        window.location.href = 'https://mp3-convert.org/youtube-to-mp3-converters/';
    } else {
        // Redirect to Google search
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(input);
    }
}
