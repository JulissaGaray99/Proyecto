'use strict';

const input_facebook = document.querySelector('#url_facebook');
const input_instagram = document.querySelector('#url_ig');
const input_twitter = document.querySelector('#url_twitter');
const input_email = document.querySelector('#email');
const input_youtube = document.querySelector('#url_yt');
const btn_registrar = document.querySelector('#registrar_rs');

let obtener_datos = () =>{
  let facebook = input_facebook.value;
  let instagram = input_instagram.value;
  let twitter = input_twitter.value;
  let email = input_email.value;
  let youtube = input_youtube.value;

  registrar_rs(facebook, instagram, twitter, email, youtube);
}

btn_registrar.addEventListener('click', obtener_datos);
