(function( d ) {
    'use strict';
    var ply = d.getElementById( 'player' ),
        msk = d.getElementById( 'mask' );
        ply.addEventListener( 'play', 
           function() {
             msk.classList.add( 'image-animation' );
             }, false );
        ply.addEventListener( 'ended', 
           function() {
             msk.classList.remove( 'image-animation' );
             ply.load();
             }, false );
 }( document ));