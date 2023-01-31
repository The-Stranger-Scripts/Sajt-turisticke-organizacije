// Ovde se mogu dodavati funkcionalnosti vezane za accomodation stranicu!

// const ratingStars = [...document.getElementsByClassName("rating__star")];

// function executeRating(stars) {
//     const starClassActive = "rating__star fas fa-star";
//     const starClassInactive = "rating__star far fa-star";
//     const starsLength = stars.length;
//     let i;
//     stars.map((star) => {
//         star.onclick = () => {
//             i = stars.indexOf(star);

//             if (star.className === starClassInactive) {
//                 for (i; i >= 0; --i) stars[i].className = starClassActive;
//             } else {
//                 for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
//             }
//         };
//     });
// }
// executeRating(ratingStars);

const writeAccomondation = data => {
  console.log(data);
  let ctn = `<div class="accomodation-container-xl">
            <section class="main-card">
                <h2>Smeštaj u Novom Sadu</h2>
                <h5>Udobnost u srcu grada</h5>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </p>
            </section>
        </div>

        <section class="five-col-sec">
            <div class="accomodation-label">
                <h2>Top 10 hotela sa četiri zvezdice</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    tex
                </p>
            </div>
            <div class="card-columns container-lg">
                <div class="accomodation-card">
                    <img src="img/explore/Spomenik_Svetozaru_Miletiću.jpg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>1. Arhiv Boutique House </h4>
                        <p class="accomodation-text">
                            Objekat Arhiv Boutique House nudi smeštaj sa restoranom i besplatnim WiFi internetom u svim prostorijama, kao i besplatan privatni parking za goste koji voze, a nalazi se u Novom Sadu, na 1 km od Sportskog centra SPENS i 1,7 km od tržnog centra Promenada.
                            Gostima ovog smeštajnog objekta su na raspolaganju porodične sobe i terasa. Ponuda smeštajnog objekta uključuje poslugu u sobi i skladište za prtljag. Sve sobe za goste imaju klima-uređaj, flat-screen TV sa kablovskim kanalima,
                            kuvalo, tuš, fen za kosu i radni sto. Pojedine sobe poseduju i čajnu kuhinju sa frižiderom, mini-barom i pločom za kuvanje. Sve smeštajne jedinice sadrže sopstveno kupatilo, besplatan toaletni pribor i posteljinu. Kontinentalni
                            i à-la-carte doručak su dostupni svakog jutra u gostionici. Popularne atrakcije u blizini objekta Arhiv Boutique House su Muzej Vojvodine, Srpsko narodno pozorište i Turističko-informativni centar Bulevar. Najbliži aerodrom
                            je Aerodrom Nikola Tesla u Beogradu, udaljen 83 km od smeštaja. Usluga prevoza od/do aerodroma je dostupna uz doplatu.
                        </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                        </div>
                    </div>
                </div>
                <div class="accomodation-card">
                    <img src="img/accommodation/2. Kombinat Rooms City Center.jpeg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>2. Kombinat Rooms City Center</h4>
                        <p class="accomodation-text">
                            Objekat Kombinat Rooms City Center nudi ekspresno prijavljivanje i odjavljivanje, sobe, restoran, besplatan WiFi u svim prostorijama objekta, kao i vrt, a nalazi se u Novom Sadu, na manje od 1 km od Sportskog centra SPENS. Gostima ovog objekta su na raspolaganju
                            porodične sobe i terasa. Ponuda smeštaja uključuje poslugu u sobi i skladište za prtljag. Sve hotelske sobe imaju klima-uređaj, prostor za sedenje i flat-screen TV sa kablovskim kanalima. U ponudi su sef i sopstveno kupatilo
                            sa tušem. Iz pojedinih soba u objektu Kombinat Rooms City Center se pruža pogled na grad. Sobe takođe imaju popločano dvorište. U sobama su obezbeđeni peškiri i posteljina. Gosti objekta Kombinat Rooms City Center mogu da uživaju
                            u kontinentalnom ili à la carte doručku. Popularne atrakcije u blizini hotela su tržni centar Promenada, Muzej Vojvodine i Srpsko narodno pozorište. Najbliži aerodrom je Aerodrom Nikola Tesla u Beogradu, udaljen 81 km od objekta
                            Kombinat Rooms City Center. Usluga prevoza od/do aerodroma je dostupna uz doplatu.
                        </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                        </div>
                    </div>
                </div>
                <div class="accomodation-card">
                    <img src="img/accommodation/3. Hotel Pupin Novi Sad .jpeg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>3. Hotel Pupin Novi Sad </h4>
                        <p class="accomodation-text">
                            Hotel Pupin Novi Sad raspolaže restoranom, privatnim parkingom i barom. Smešten je u Novom Sadu, na 800 metara od sportskog centra SPENS. Ovaj hotel sa pet zvezdica je izgrađen 2020. godine i nalazi se na 1,1 km od tržnog centra Promenada i 500 metara
                            od Srpskog narodnog pozorišta. Recepcija radi non-stop, dok je besplatan WiFi dostupan u celom objektu. Ponuda hotela takođe obuhvata prevoz od/do aerodroma i poslugu u sobi. Pojedine smeštajne jedinice imaju čajnu kuhinju
                            sa mini-barom. U hotelu se služi doručak na bazi švedskog stola. Muzej Vojvodine se nalazi na manje od 1 km, a Novosadska sinagoga na 3 minuta hoda od hotela Pupin Novi Sad. Najbliži aerodrom je Aerodrom Nikola Tesla u Beogradu,
                            udaljen 81 km.
                        </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                        </div>
                    </div>
                </div>
                <div class="accomodation-card">
                    <img src="img/accommodation/4. Pupin Palace Apartments.jpeg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>4. Pupin Palace Apartments </h4>
                        <p class="accomodation-text">
                            Objekat Pupin Palace Apartments nudi smeštaj sa barom, terasom i recepcijom koja radi non-stop, a nalazi se na manje od 1 km od Sportskog centra SPENS. Besplatan WiFi je dostupan u svim prostorijama, a na raspolaganju je i privatni parking u okviru objekta.
                            Klimatizovane smeštajne jedinice imaju dnevnu sobu sa flat-screen TV-om, kuhinju sa mašinom za pranje posuđa i frižiderom, mašinu za pranje veša, sef i sopstveno kupatilo sa bademantilima i papučama. Svaka jedinica sadrži prostor
                            za sedenje i trpezariju. Automobili se mogu iznajmiti u okviru objekta. Popularna odredišta u blizini objekta Pupin Palace Apartments su tržni centar Promenada, Srpsko narodno pozorište i Muzej Vojvodine. Najbliži aerodrom
                            je Aerodrom Nikola Tesla u Beogradu, udaljen 84 km od smeštajnog objekta. Usluga prevoza od/do aerodroma je dostupna uz doplatu.
                        </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                        </div>
                    </div>
                </div>
                <div class="accomodation-card">
                    <img src="img/explore/matica-sroska.webp" alt="" />
                    <div class="accomodation-card-body">
                        <h4>5. Garni hotel Ami </h4>
                        <p class="accomodation-text">
                            Objekat Garni hotel Ami raspolaže zajedničkim salonom, besplatnim privatnim parkingom, restoranom i barom. Smešten je u Novom Sadu, na 2 km od tržnog centra Promenada. Ovaj hotel sa četiri zvezdice nudi ostavu za prtljag, prevoz od/do aerodroma i poslugu
                            u sobi. Recepcija radi non-stop, dok je besplatan WiFi dostupan u celom objektu. Sobe su klimatizovane i sadrže prostor za sedenje, flat-screen TV sa satelitskim kanalima i sopstveno kupatilo sa tušem, besplatnim toaletnim
                            priborom i fenom za kosu. Opremljene su sefom i kuvalom. Pojedine sobe imaju popločano dvorište, dok se iz pojedinih pruža pogled na grad. U sobama objekta GARNI HOTEL AMI su obezbeđeni peškiri i posteljina. U objektu se služi
                            doručak na bazi švedskog stola ili kontinentalni doručak. Nedaleko od objekta GARNI HOTEL AMI se nalaze popularna odredišta, kao što su Srpsko narodno pozorište, Muzej Vojvodine i Novosadska sinagoga. Najbliži aerodrom je Aerodrom
                            Nikola Tesla u Beogradu, udaljen 80 km. </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                        </div>
                    </div>
                </div>
            </div>



            <div class="card-columns container-lg">
                <div class="accomodation-card">
                    <img src="img/accommodation/6. Lanterna Rooms City Center.jpeg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>6. Lanterna Rooms City Center</h4>
                        <p class="accomodation-text">
                            Objekat Lanterna Rooms City Center nudi smeštaj sa restoranom, privatnim parkingom, barom i vrtom u Novom Sadu, na 1,4 km od Sportskog centra SPENS. Gostima su takođe na raspolaganju posluga u sobi, ostava za prtljag i besplatan WiFi u svim prostorijama.
                            Pansion poseduje porodične sobe. Gostima pansiona su na raspolaganju klimatizovane sobe sa garderoberom, kuvalom, frižiderom, sefom, flat-screen TV-om, popločanim dvorištem i sopstvenim kupatilom sa tušem. Sve sobe u objektu
                            Lanterna Rooms City Center imaju posteljinu i peškire. U smeštajnom objektu se služi kontinentalni ili à-la-carte doručak. Objekat Lanterna Rooms City Center poseduje terasu. Popularna mesta u blizini ovog pansiona su Muzej
                            Vojvodine, Srpsko narodno pozorište i mesto održavanja Exit festivala. Najbliži aerodrom je Aerodrom Nikola Tesla u Beogradu, udaljen 84 km od objekta Lanterna Rooms City Center. Usluga prevoza od/do aerodroma je dostupna uz
                            doplatu. </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                        </div>
                    </div>
                </div>
                <div class="accomodation-card">
                    <img src="img/explore/zmaj-jovina-min.jpg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>7. Lux new white apartment</h4>
                        <p class="accomodation-text">
                            Objekat Lux new white apartment nalazi se na atraktivnoj lokaciji u Novom Sadu, na 1,3 km od Sportskog centra SPENS i na 1,5 km od Srpskog narodnog pozorišta. Ponuda obuhvata terasu i recepciju otvorenu non-stop. Klimatizovani smeštaj je udaljen 1 km
                            od tržnog centra Promenada, a gostima su na raspolaganju privatni parking u okviru objekta i besplatan WiFi. Apartman ima 1 spavaću sobu, flat-screen TV sa satelitskim kanalima i opremljenu kuhinju sa frižiderom i pločom za
                            kuvanje. Takođe sadrži mašinu za pranje veša i 1 kupatilo sa tušem. Ponuda apartmana uključuje uslugu iznajmljivanja automobila. Muzej Vojvodine se nalazi na 2,3 km od objekta Lux new white apartment, a do Novosadskog sajma
                            ima 2,4 km. Najbliži aerodrom je Aerodrom Beograd Nikola Tesla, udaljen 59 km. Prevoz od/do aerodroma dostupan je uz doplatu. </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                        </div>
                    </div>
                </div>
                <div class="accomodation-card">
                    <img src="img/accommodation/8. Apartment Eugen.jpeg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>8. Apartment Eugen</h4>
                        <p class="accomodation-text">
                            Apartment Eugen se nalazi u Novom Sadu, na 1,5 km od sportskog centra SPENS i 1,8 km od tržnog centra Promenada. U ponudi je klimatizovan smeštaj sa balkonom i besplatnim WiFi internetom. Novosadski sajam je udaljen 2,5 km, a mesto održavanja Exit festivala
                            2,8 km od objekta. Apartman ima 1 spavaću sobu, 1 kupatilo sa tušem i opremljenu kuhinju sa frižiderom i rernom. Takođe sadrži mašinu za pranje veša i flat-screen TV sa satelitskim kanalima. Peškiri i posteljina su obezbeđeni.
                            Gosti koji borave u apartmanu mogu da koriste terasu. Popularna mesta u blizini objekta Apartment Eugen su Srpsko narodno pozorište, Muzej Vojvodine i Turistički informativni centar Jevrejska. Najbliži aerodrom je Aerodrom
                            Nikola Tesla u Beogradu, udaljen 83 km od smeštaja. Usluga prevoza od/do aerodroma je dostupna uz doplatu. </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                        </div>
                    </div>
                </div>
                <div class="accomodation-card">
                    <img src="img/accommodation/9. Sheraton Novi Sad.jpeg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>9. Sheraton Novi Sad</h4>
                        <p class="accomodation-text">
                            Sheraton Novi Sad raspolaže privatnim parkingom, fitnes centrom i zajedničkim salonom. Smešten je u Novom Sadu, na 2,7 km od tržnog centra Promenada. Ovaj hotel sa četiri zvezdice nudi bankomat, poslovni centar, prevoz od/do aerodroma i poslugu u sobi.
                            Recepcija radi non-stop, dok se WiFi i bicikli mogu besplatno koristiti. U objektu Sheraton Novi Sad se svakog dana služe doručak na bazi švedskog stola, pun engleski/irski ili italijanski doručak. U hotelskom restoranu možete
                            uživati u španskim i internacionalnim jelima. Na zahtev se mogu pripremiti vegetarijanska, veganska i bezglutenska jela. Ponuda ovog objekta sa četiri zvezdice takođe obuhvata hamam. Sportski centar SPENS se nalazi na 3 km,
                            a Srpsko narodno pozorište na 2,7 km od objekta Sheraton Novi Sad. Najbliži aerodrom je Aerodrom Nikola Tesla Beograd, udaljen 83 km.
                        </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                            <i class="rating__star far fa-star">
                                </i>
                        </div>
                    </div>
                </div>
                <div class="accomodation-card">
                    <img src="img/accommodation/10. Premium Apartments.jpeg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>10. Premium Apartments</h4>
                        <p class="accomodation-text">
                            Objekat Premium Apartments se nalazi na 2,6 km od tržnog centra Promenada. Ponuda obuhvata vrt, terasu i klimatizovani smeštaj sa balkonom i besplatnim WiFi internetom. Svaka smeštajna jedinica ima kauč, prostor za sedenje, flat-screen TV sa satelitskim
                            kanalima, dobro opremljenu kuhinju sa trpezarijom i sopstveno kupatilo sa papučama. Dodatnu pogodnost predstavljaju peškiri i posteljina koje gosti mogu da dobiju uz dodatnu naknadu. Gostima apartmana je takođe na raspolaganju
                            dečije igralište. Popularne atrakcije u blizini objekta Premium Apartments su Novosadski sajam, Srpsko narodno pozorište i Turističko-informativni centar Jevrejska. Najbliži aerodrom je Aerodrom Nikola Tesla u Beogradu, udaljen
                            82 km od smeštajnog objekta. Usluga prevoza od/do aerodroma je dostupna uz doplatu. </p>
                        <div class="rating">
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                            <i class="rating__star far fa-star">
                                    </i>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="two-col-sec">
            <div class="accomodation-label">
                <h2>Stan na dan</h2>
                <p>
                    Apartmani Novi Sad - velika ponuda smeštaja u najlepšem gradu Vojvodine. Poslednjih godina Novi Sad postaje sve posećenija turisička destinacija. Egzit, gradski kulturni sadržaji, manifestacije i posebna atmosfera kojom grad odiše privlače turiste iz
                    svih delova sveta. U skladu sa ovim dolazi do razvoja smeštajne ponude. Glavni grad Vojvodine nudi svojim posetiocima raznovrsne apartmane, koji su uređeni po najvišim evropskim standardima. Svi stanovi na dan Novi Sad poseduju moderan
                    nameštaj, niz detalja koji stvaraju prijatnu atmosferu i elemenata neophodnih za ugodan boravak. Raspoređeni su u svim novosadskim naseljima, tako da uspevaju da se prilagode različitim razlozima boravka u gradu. Pogledajte celokupnu
                    ponudu apartmana u Novom Sadu i pronađite smeštaj koji će zadovoljiti sve vaše zahteve i pokazati vam sve lepote vojvođanske prestonice. </p>
            </div>
            <div class="card-columns container-lg">
                <div class="accomodation-card">
                    <img src="img/accommodation/city centre.jpeg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>Centar grada</h4>
                        <p class="accomodation-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolore saepe nulla officia quibusdam veniam error amet tenetur rerum ut aliquam, itaque sunt corporis perferendis iste quo libero minus magni odio laboriosam doloremque consectetur explicabo.
                            Deserunt necessitatibus reiciendis, voluptatum natus ut dolore minus repudiandae provident doloribus, porro soluta placeat rerum.
                        </p>
                    </div>
                </div>
                <div class="accomodation-card">
                    <img src="img//accommodation/novo naselje.jpeg" alt="" />
                    <div class="accomodation-card-body">
                        <h4>Periferija Novog Sada</h4>
                        <p class="accomodation-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolore saepe nulla officia quibusdam veniam error amet tenetur rerum ut aliquam, itaque sunt corporis perferendis iste quo libero minus magni odio laboriosam doloremque consectetur explicabo.
                            Deserunt necessitatibus reiciendis, voluptatum natus ut dolore minus repudiandae provident doloribus, porro soluta placeat rerum.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="one-col-sec">
            <div class="accomodation-label">
                <h2>Smeštaj za Exit festival</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    tex
                </p>
            </div>

            <div class="exit-video-container">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/i0FuvHoTkwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe>
                <section class="three-col-sec">
                    <div class="accomodation-label">
                        <h2>Smeštaj za Novu Godinu i praznike</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            tex
                        </p>
                    </div>
                    <div class="card-columns container-lg">
                        <div class="accomodation-card">
                            <img src="img/accommodation/new year.jpeg" alt="" />
                            <div class="accomodation-card-body">
                                <h4>Praznična atmosfera</h4>
                                <p class="accomodation-text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolore saepe nulla officia quibusdam veniam error amet tenetur rerum ut aliquam, itaque sunt corporis perferendis iste quo libero minus magni odio laboriosam doloremque consectetur explicabo.
                                    Deserunt necessitatibus reiciendis, voluptatum natus ut dolore minus repudiandae provident doloribus, porro soluta placeat rerum.
                                </p>
                            </div>
                        </div>
                        <div class="accomodation-card">
                            <img src="img//accommodation/new year 2.jpeg" alt="" />
                            <div class="accomodation-card-body">
                                <h4>U srcu Novog Sada</h4>
                                <p class="accomodation-text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolore saepe nulla officia quibusdam veniam error amet tenetur rerum ut aliquam, itaque sunt corporis perferendis iste quo libero minus magni odio laboriosam doloremque consectetur explicabo.
                                    Deserunt necessitatibus reiciendis, voluptatum natus ut dolore minus repudiandae provident doloribus, porro soluta placeat rerum.
                                </p>
                            </div>
                        </div>
                        <div class="accomodation-card">
                            <img src="img//accommodation/new year 3.jpeg" alt="" />
                            <div class="accomodation-card-body">
                                <h4>Fijakerom do vašeg apartmana</h4>
                                <p class="accomodation-text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolore saepe nulla officia quibusdam veniam error amet tenetur rerum ut aliquam, itaque sunt corporis perferendis iste quo libero minus magni odio laboriosam doloremque consectetur explicabo.
                                    Deserunt necessitatibus reiciendis, voluptatum natus ut dolore minus repudiandae provident doloribus, porro soluta placeat rerum.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>`;

  return ctn;
};

export default writeAccomondation;
