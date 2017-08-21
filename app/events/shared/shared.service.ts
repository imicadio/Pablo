import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { IHero } from './hero.model'

@Injectable()
export class SharedService{
    getEvents(): Observable<IHero[]>{
      let subject = new Subject<IHero[]>()
      setTimeout(() => {subject.next(HERO); subject.complete(); }, 100)
      return subject
    }

    getHero(id:number): IHero {
        return HERO.find(hero => hero.id === id)
      }
}

const HERO: IHero[] = [
        {
          id: 1,
          name: 'Jon Snow',
          opis: 'Jon Snow uważany jest za bękarta lorda Eddarda Starka. Ned nigdy nie wyjawił nikomu tożsamości matki chłopca, nawet samemu Jonowi, co jest niecodzienne, jako iż zazwyczaj bękarci mieszkają z matkami i nie znają swoich ojców. Wyruszając na południe, by dołączyć do rebelii swojego przyjaciela, Roberta, zostawił swoją nową żonę Catelyn Tully w Riverrun, która później urodziła jego pierworodnego syna, Robba. Wkrótce Eddard powrócił z wojny z niemowlęciem, które nazwał swoim bękartem. Uznane bękarty wielkich panów zazwyczaj odsyłane są do innych zamków lub twierdz, będących w posiadaniu ich rodziców, by dobrze się nimi zajęto, ale aby równocześnie nie wychowywały się razem z prawowitymi dziećmi lordów. Jednakże Eddard Stark ogłosił, że wychowa Jona w Winterfell razem ze swoimi potomkami. Robb zawsze traktowany był jak dziedzic Północy, ale bękart Neda nigdy nie miał gorszego życia niż jego młodsi bracia, Bran i Rickon. Obecność Jona w zamku zawsze była źródłem sprzeczek między Eddardem i jego żoną Catelyn. Chłopak zawsze przypominał jej o tym, że Ned zdradził ją, lecz mimo to zawsze kochała swojego męża. Natomiast samego Jona zawsze nienawidziła. Nie była jego macochą, ponieważ bękart nigdy nie został legitymizowany. Lecz mimo to zawsze był dobrze traktowany przez żonę swego ojca. Była dla niego oschła i unikała kontaktu, kiedy mogła, ale nigdy nie był przez nią zaniedbany[3][4]. Cat wspomina, że kiedy Jon był młody i zachorował, ona żałowała, iż wcześniej modliła się o jego śmierć i pozostała przy chłopcu całą noc, modląc się do bogów, by pozwolili mu przeżyć. Wtedy też zaakceptowała to, że nie może winić Jona za romans swojego męża. Jako bękart, Jon dorastał, czując się jak odmieniec. Ogólnie był traktowany dobrze, zawsze miał dach nad głową, jednakże w przypadku większych uczt, w których brały udział wielkie rody szlacheckie, Jon nie mógł zasiadać blisko swojej rodziny przy braciach i siostrach i zazwyczaj pozostawał z tyłu sali[3]. To jednak mu nie przeszkadzało, ponieważ mógł wtedy bawić się jak każdy prostaczek oraz pić tyle alkoholu, ile chciał, czego lord Eddard Stark zabraniał swoim pozostałym dzieciom. Jon otrzymał stosowne szkolenie bojowe od kasztelana Winterfell, ser Rodrika Cassela. Był bardzo dobrym przyjacielem swojego przybranego brata Robba oraz jego towarzyszem w treningu i jeździe. Ze swojego przybranego rodzeństwa największa więź łączyła go z Aryą, która ze względu na swoją chłopięcą naturę również czuła się jak odmieniec. Druga siostra Jona, Sansa nie była tak uprzejma wobec przybranego brata i często obrażała go, najprawdopodobniej mając za przykład swą matkę. Z pozostałymi braćmi, Branem i Rickonem, Jon rozwinął ciepłą, braterską więź.',
          imageUrl: 'https://vignette3.wikia.nocookie.net/gameofthrones/images/4/49/Battle_of_the_Bastards_08.jpg/revision/latest/scale-to-width-down/310?cb=20160615184845',
          },      
        {
          id: 2,
          name: 'Daenerys Targaryen',
          opis: `Daenerys ma tradycyjnie fioletowe oczy[3] i srebrno-złote włosy Targaryenów.[3][8][10] Jest szczupła i niska, ale mimo tego posiada pewną wytrzymałość ze względu na swoje trudne życiowe doświadczenia. Ma smukłe ciało,[3] z małymi piersiami. Dany jest sprytna i przebiegła, stanowcza i zdecydowana, lecz niedoświadczona. Nienawidzi uzurpatora, ponieważ oskarża go o śmierć rodziny i swoją tułaczkę po Wolnych Miastach. Z radością przyjęła wieść o jego śmierci i wojnie domowej w Siedmiu Królestwach. Mimo że została oddana Khalowi Drogo siłą, z czasem pokochała Dothraka. Obecnie darzy gorącym uczuciem Daaria Naharisa. Jest bardzo nieufna z powodu przepowiedni, według której czekają ją trzy zdrady: „jedna za krew, druga z miłości, a trzecia za złoto”. Główną jej słabością jest to, że musi bardzo polegać na wiedzy innych otaczających ją ludzi. Wierzyła w opowieści Viserysa o ich rodzinie, gdyż nie miała nikogo innego, kto by jej o tym opowiedział; była całkiem nieświadoma, że jej ojciec został uznany za szaleńca. Prawdę uświadomił jej dopiero ser Barristan Selmy. Słabością Daenerys jest to, że nigdy nie czytała żadnych książek o wychowywaniu smoków i nie jest pewna, jak rozwijać swoje umiejętności kontroli i dyscypliny nad nimi, nie wie jak wytrenować smoki, aby wykorzystały w pełni swój ognisty potencjał. Martwi się, że jak jej smoki dorosną, nie będzie w stanie ich kontrolować lub używać do walki czy wykorzystać przy inwazji Westeros. Daenerys jest znakomitym jeźdźcem, ale nie posiada szczególnych umiejętności walki.`,
          imageUrl: 'https://vignette3.wikia.nocookie.net/gameofthrones/images/8/88/Daenerys_Targaryen_S7_Promo_Image.PNG/revision/latest/scale-to-width-down/310?cb=20170420191154'      
        },
        {
          id: 3,
          name: `Eddard Stark`,
          opis: `Lord Eddard Stark (wym. /'ɛdɑɹd stɑɹk/) (w gronie przyjaciół nazywany Nedem) – lord Winterfell, namiestnik Północy i Królewski Namiestnik, przez krótki czas Lord Regent Królestwa. Był drugim synem lorda Rickarda Starka i jego żony lady Lyarry Stark. Mąż Catelyn Tully i ojciec piątki dzieci: Robba, Sansy, Aryi, Brana, Rickona. Został ścięty na rozkaz króla Joffreya I Baratheona przez królewskiego kata Ilyna Payne’a. W chwili rozpoczęcia akcji książki lord Eddard ma trzydzieści kilka lat i jest lordem Winterfell. Ma 5 dzieci.
          
          Posiada charakterystyczną dla rodu Starków urodę: pociągłą twarz, szare oczy i ciemne włosy. Oblicze Neda zdobi broda, zaczynająca robić się siwa. Nie jest bardzo przystojny ani wysoki.
          
          Wśród wielu ludzi uznawany był za zimnego człowieka, jednak w stosunku do rodziny odnosi się z miłością i serdecznością. Głęboko wierzy w Starych Bogów. Ma silnie zakorzenione poczucie honoru i sprawiedliwości. W przeciwieństwie do południowych lordów nie zatrudnia zawodowego kata, ale sam wymierza sprawiedliwość. Ze swoją ostrożnością stanowił pewnego rodzaju przeciwwagę dla porywczości Roberta. Był dobrym strategiem i wojownikiem.
          
          Nienawidził prowadzonej na południu gry o tron i wszystkich związanych z nią spiskami i układami.`,
          imageUrl: 'https://vignette2.wikia.nocookie.net/gameofthrones/images/9/9c/EddardStark.jpg/revision/latest/scale-to-width-down/307?cb=20110626030942'       
        },
        {
          id: 4,
          name: 'Margaery Tyrell',
          opis: `Królowa Margaery Baratheon z domu Tyrell (wym. /mɑɹdʒəɹi 'tirɛl/), zwana nieraz Różyczką lub Małą Królową – jedyna córka i czwarte dziecko lorda Wysogródu i namiestnika Południa Mace Tyrella i jego żony Lady Alerie Tyrell z Rodu Hightower, siostra Willasa, Garlana, i Lorasa Tyrellów, kuzynka i bratanica Paxtera Redwyne'a, kuzynka Horasa, Hobbera i Desmery Redwyne'ów. Trzykrotnie zamężna najpierw z Renlym Baratheonem, a po jego śmierci z królem Joffrey’em I Baratheonem, po jego otruciu z Tommenem I Baratheonem, Królowa Siedmiu Królestw. Margaery to urodziwa dziewczyna o delikatnych i subtelnych rysach twarzy. Ma długie, falowane, jasnobrązowe włosy i szaro-błękitne, pogodne oczy. Pomimo faktu, że została wychowana w luksusie i prowadzi wystawny tryb życia i okazuje dużo zrozumienia i współczucia ubogim. Jest damą o łagodnym i przyjaznym usposobieniu, choć wie czego chce i kiedy zdobyć dla siebie korzyści czego Cersei bardzo się obawia. Stara się nawiązać pozytywne relacje z Cersei co nie przynosi efektu ze strony Królowej. Łatwo zdobywa przyjaciół i sprzymierzeńców. Ma bliskie relacje ze swoim bratem Lorasem oraz babką Lady Olenną, zdobywa sympatię Sansy Stark, stają się przyjaciółkami. Wśród mieszkańców stolicy jest postrzegana bardzo pozytywnie gdyż dokonuje wiele działań ku polepszeniu sytuacji mieszczan. Lubi dzieci i chętnie pomaga tym najuboższym.`,
          imageUrl: 'https://vignette1.wikia.nocookie.net/westerosessos/images/f/f4/Kr%C3%B3lowa_Margaery_Tyrell.jpg/revision/latest/scale-to-width-down/310?cb=20161125085046&path-prefix=pl' 
        },
        {
          id: 5,
          name: 'Oberyn Martell',
          opis: `Oberyn Martell, zwany również Czerwoną Żmiją – członek rodu Martell, młodszy brat księcia Dorne, Dorana Martella, czwarty syn i piąte dziecko poprzedniej księżnej Dorne. Jest wojownikiem, znanym na całe Dorne, jest również ojcem ośmiu Wężowych Bękarcic. Według plotek jest biseksualistą. Oberyn urodził się po między rokiem 257 a 258 o. P., w Dorne, w Słonecznej Włóczni. Był czwartym synem i piątym dzieckiem obecnej księżnej Dorne i trzecim dzieckiem, które dożyło dorosłości, młodszym bratem dziedzica włóczni Dorana Martella i Eli Martell. Doran, Elia i Oberyn byli jedynym dziećmi księżnej, które dożyły dorosłości. W okresie młodości Oberyn i Elia byli najbliższymi sobie osobami i cały czas trzymali się razem.
          
          Oberyn otrzymał staranne wykształcenie, a kiedy nieco dorósł został wysłany w charakterze giermka i pazia na wychowanie do lorda domu Qorgyle.
          
          Dorosłe życie Edytuj
          Kiedy Oberyn i Elia nieco dorośli, ich matka rozpoczęła starania o wydanie ich za mąż, dlatego zorganizowała wyprawę do Królestwa Zachodu. Choć po drodze odwiedzili kilka miast i rodzin szlacheckich m. in. Stare Miasto, ich celem było Casterly Rock. Księżna była bliską przyjaciółką obecnej pani Casterly Rock i żony lorda Tywina Lannistera, Joanny Lannister. Księżna liczyła, że uzgodni z przyjaciółką małżeństwo pomiędzy swoimi dziećmi, Oberyna z Cersei Lannister, a Eli z Jaime Lannister.
          
          Chwila odwiedzin została jednak wybrana w najgorszym momencie, gdyż kiedy dornijczycy przybyli na skałę, lady Joanna nie żyła. Umarła w czasie porodu, rodząc karłowatego syna Tyriona Lannistera. Tak więc pogłoski o tym, że Tywinowi urodził się potwór doszły do uszu Oberyna i jego siostry, którzy chcieli zobaczyć małego potwora. W tym czasie plany księżnej sypały się w gruzy, a załamany Tywin nawet nie przyjął gości. Oberyn i Elia zostali zaprowadzeni do komnat Tyriona, gdzie zobaczyli, że pogłoski o rzekomym potworze były mocno przesadzone, a Tyrion jest prawie normalnym dzieckiem. Ostatecznie wizyta na skale zakończyła się skandalem, kiedy Tywin zaproponował małżeństwo zamiast swych bliźniaków, Tyriona. Martellowie uznali to za obelgę i opuścili skałę.`,
          imageUrl: 'https://vignette1.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/310?cb=20150815065729' 
        },
        {
          id: 6,
          name: 'Nocny Król',
          opis: `Nocny Król – członek Nocnej Straży i trzynasty Lord dowódca na Murze, żyjący w Erze Herosów.`,
          imageUrl: 'https://vignette1.wikia.nocookie.net/gameofthrones/images/2/2d/NightsKingCrop_%28Hardhome%29.PNG/revision/latest/scale-to-width-down/180?cb=20170809124618' 
        }
]