
function header(){

    var html = "";

    html += '<header>';

    html += '    <div class="logo">';
    html += '        <a href="index.html"><img src="logo.png" alt="logo" /></a>';
    html += '    </div>';

    html += '    <div id="test">';
    html += '        <nav>';
    html += '            <ul>';
    html += '            <li><a href="index.html">Home</a></li>';
    html += '            <li><a href="about.html">About</a></li>';
    html += '            <li><a href="gallery.html">Gallery</a></li>';
    html += '            <li><a href="webshop.html">Webshop</a></li>';
    html += '            <li><a href="contact.html">Contact</a></li>';
    html += '            </ul>';
              
    html += '         </nav>';
    html += '    </div>';
    html += '</header>';
    document.write(html);
}

