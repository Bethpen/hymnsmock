// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");
// import hymnList from "./hymnlist";

const prisma = new PrismaClient();

const  hymnList = [
  {
      "number": "1",
      "title": "All Your Anxiety",
      "titleWithHymnNumber": "1 All Your Anxiety",
      "chorus": "All your anxiety, all your care,\nBring to the mercy seat--leave it there;\nNever a burden He cannot bear,\nNever a friend like Jesus.",
      "verses": [
          "Is there a heart o'er-bound by sorrow?\nIs there a life weighed down by care?\nCome to the cross--each burden bearing,\nAll your anxiety--leave it there.",
          "No other friend so keen to help you,\nNo other friend so quick to hear;\nNo other place to leave your burden,\nNo other one to hear your prayer.",
          "Come then at once--delay no longer!\nHeed His entreaty kind and sweet;\nYou need not fear a disappointment--\nYou shall find peace at the mercy seat."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2001%20All%20Your%20Anxiety.mp3",
      "category": "admonition"
  },
  {
      "number": "2",
      "title": "Come Unto Me",
      "titleWithHymnNumber": "2 Come Unto Me",
      "chorus": "Come unto me; I will give you rest;\nTake My yoke upon you, hear Me and be blest;\nI am meek and lowly, come and trust My might;\nCome, My yoke is easy, and My burden's light.",
      "verses": [
          "Hear the blessed Saviour Calling the oppressed,\n\"O ye heavy laden, come to me and rest;\nCome, no longer tarry, I your load will bear,\nBring Me ev'ry burden, bring me ev'ry care\".",
          "Are you disappointed, wand'ring here and there,\nDragging chains of doubt and loaded down with care?\nDo unholy feelings struggle in your breast?\nBring your case to Jesus, He will give you rest.",
          "Stumbling on the mountains dark with sin and shame, \nStumbling tow'rd the pit of hell's consuming flames,\nBy the pow'rs of sin deluded and oppressed,\nHear the tender Shepherd, \"Come to Me and rest\"",
          "Have you cares of business, cares of pressing debt?\nCares of social life or cares of hope unmet?\nAre you by remorse of sense of guilt depressed,\nCome right to Jesus, He will give you rest.",
          "Have you by temptations often conquered been,\nHas a sense of weakness brought distress within?\nChrist will sanctify you, if you'll claim His best,\nIn the Holy Spirit, He will give you rest."
      ],
      "sound": "",
      "category": "admonition"
  },
  {
      "number": "3",
      "title": "Impatient Heart Be Still",
      "titleWithHymnNumber": "3 Impatient Heart Be Still",
      "chorus": "Be still! Be still!\nImpatient heart be still!",
      "verses": [
          "Impatient heart, be still!\nWhat though He tarries long?\nWhat though the triumph song\nIs still (is still) delayed?\nThou hast His promise sure,\nAnd that is all secure;\nBe not afraid! Be not afraid!",
          "My eager heart, be still!\nThy Lord will surely come,\nAnd take thee to His home,\nWith Him (with Him) to dwell;\nIt may not be today;\nAnd yet, my soul, it may;\nI cannot tell, I cannot tell.",
          "My anxious heart, be still!\nWatch, work, and pray, and then\nIt will not matter when\nThy Lord (Thy Lord) shall come;\nAt midnight, or at noon;\nHe cannot come too soon\nTo take thee home, to take thee home.\n"
      ],
      "sound": "",
      "category": "admonition"
  },
  {
      "number": "4",
      "title": "Leave It There",
      "titleWithHymnNumber": "4 Leave It There",
      "chorus": "Leave it there, leave it there,\nTake your burden to the Lord and leave it there.\nIf you trust and never doubt, He will surely bring you out.\nTake your burden to the Lord and leave it there.",
      "verses": [
          "If the world from you withhold of its silver and its gold,\nAnd you have to get along with meager fare,\nJust remember, in His Word, how He feeds the little bird;\nTake your burden to the Lord and leave it there.",
          "If your body suffers pain and your health you can’t regain,\nAnd your soul is almost sinking in despair,\nJesus knows the pain you feel, He can save and He can heal;\nTake your burden to the Lord and leave it there.",
          "When your enemies assail and your heart begins to fail,\nDon’t forget that God in Heaven answers prayer;\nHe will make a way for you and will lead you safely through.\nTake your burden to the Lord and leave it there.",
          "When your youthful days are gone and old age is stealing on,\nAnd your body bends beneath the weight of care;\nHe will never leave you then, He’ll go with you to the end.\nTake your burden to the Lord and leave it there.\n"
      ],
      "sound": "",
      "category": "admonition"
  },
  {
      "number": "5",
      "title": "Never Give Up",
      "titleWithHymnNumber": "5 Never Give Up",
      "chorus": "Never give up, never give up,\nNever give up to thy sorrows,\nJesus will bid them depart.\nTrust in the Lord, trust in the Lord,\nSing when your trials are greatest,\nTrust in the Lord and take heart.",
      "verses": [
          "Never be sad or desponding,\nIf thou hast faith to believe.\nGrace, for the duties before thee,\nAsk of thy God and receive.",
          "What if thy burdens oppress thee;\nWhat though thy life may be drear;\nLook on the side that is brightest,\nPray, and thy path will be clear.",
          "Never be sad or desponding,\nThere is a morrow for thee;\nSoon thou shalt dwell in its brightness,\nThere with the Lord thou shalt be.",
          "Never be sad or desponding,\nLean on the arm of thy Lord;\nDwell in the depths of His mercy,\nThou shalt receive thy reward.",
          ""
      ],
      "sound": "",
      "category": "admonition"
  },
  {
      "number": "6",
      "title": "Yield Not To Temptation",
      "titleWithHymnNumber": "6 Yield Not To Temptation",
      "chorus": "Ask the Saviour to help you;\nComfort, strengthen and keep you;\nHe's willing to aid you,\nHe will carry you through.",
      "verses": [
          "\nYield not to temptation, for yielding is sin;\nEach victory will help you some other to win;\nFight manfully onward, dark passions subdue;\nLook ever to Jesus, He'll carry you through.",
          "Shun evil companions, bad language disdain;\nGod's name hold in reverence, nor take it in vain;\nBe thoughtful and earnest, kind-hearted and true;\nLook ever to Jesus, He'll carry you through.",
          "To him that o'ercometh, God giveth a crown;\nThrough faith we will conquer, though often cast down;\nHe who is our Saviour, our strength will renew;\nLook ever to Jesus, He'll carry you through."
      ],
      "sound": "",
      "category": "admonition"
  },
  {
      "number": "7",
      "title": "Turn Your Eyes Unto Jesus",
      "titleWithHymnNumber": "7 Turn Your Eyes Unto Jesus",
      "chorus": "Turn your eyes upon Jesus,\nLook full in His wonderful face,\nAnd the things of earth will grow strangely dim,\nIn the light of His glory and grace.",
      "verses": [
          "O soul, are you weary and troubled?\nNo light in the darkness you see?\nThere’s a light for a look at the Savior,\nAnd life more abundant and free!",
          "Through death into life everlasting\nHe passed, and we follow Him there;\nOver us sin no more hath dominion—\nFor more than conquerors we are!",
          "His Word shall not fail you—He promised;\nBelieve Him, and all will be well:\nThen go to a world that is dying,\nHis perfect salvation to tell!"
      ],
      "sound": "",
      "category": "admonition"
  },
  {
      "number": "8",
      "title": "Blessed Be The Name",
      "titleWithHymnNumber": "8 Blessed Be The Name",
      "chorus": "Blessed be the name, \nBlessed be the name, \nBlessed be the name of the Lord,\nBlessed be the name, \nBlessed be the name, \nBlessed be the name of the Lord,",
      "verses": [
          "O for a thousand tonngues to sing, \nBlessed be the name of the Lord!\nThe glories of my God and King!\nBlessed be the name of the Lord",
          "Jesus! The name that charms our fears,\nBlessed be the name og the lord!\n'Tis music in the sinner's ears,\nBlessed be the name of the Lord",
          "He breaks the pow'r of cancelled sin,\nBlessed be the Name of the Lord!\nHis blood can make the foulest clean,\nBlessed be the Name of the Lord!",
          "I never shall forget that day\nBlessed be the name of the Lord! \nWhen Jesus washed my sins away, \nBlessed be the Name of the Lord"
      ],
      "sound": "",
      "category": "adoration"
  },
  {
      "number": "9",
      "title": "Great Is Thy Faithfulness",
      "titleWithHymnNumber": "9 Great Is Thy Faithfulness",
      "chorus": "Great is Thy faithfulness! Great is Thy faithfulness!\nMorning by morning new mercies I see;\nAll I have needed Thy hand hath provided,\nGreat is Thy faithfulness, Lord, unto me!",
      "verses": [
          "\nGreat is Thy faithfulness, O God my Father,\nThere is no shadow of turning with Thee;\nThou changest not, Thy compassions they fail not,\nAs Thou hast been Thou for ever wilt be.",
          "Summer and winter, and spring-time and harvest,\nSun, moon and stars in their courses above,\nJoin with all nature in manifold witness\nTo Thy great faithfulness, mercy and love.",
          "Pardon for sin and a peace that endureth,\nThine own dear presence to cheer and to guide;\nStrength for today and bright hope for tomorrow,\nBlessings all mine, with ten thousand beside!"
      ],
      "sound": "",
      "category": "adoration"
  },
  {
      "number": "10",
      "title": "Oh For A Thousand",
      "titleWithHymnNumber": "10 Oh For A Thousand",
      "chorus": "",
      "verses": [
          "O for a thousand tongues to sing\nMy great Redeemer’s praise,\nThe glories of my God and King,\nThe triumphs of His grace.",
          "Jesus! the name that charms our fears,\nThat bids our sorrows cease;\n’Tis music in the sinner’s ears,\n’Tis life, and health, and peace.",
          "His love my heart has captive made,\nHis captive would I be,\nFor He was bound, and scourged and died,\nMy captive soul to free.",
          "He breaks the power of canceled sin,\nHe sets the prisoner free;\nHis blood can make the foulest clean;\nHis blood availed for me.",
          "So now Thy blessed Name I love,\nThy will would e’er be mine.\nHad I a thousand hearts to give,\nMy Lord, they all were Thine!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2010%20Oh%20For%20A%20Thousand%20tongues%20to%20Sing.mp3",
      "category": "adoration"
  },
  {
      "number": "11",
      "title": "Holy Holy Holy",
      "titleWithHymnNumber": "11 Holy Holy Holy",
      "chorus": "",
      "verses": [
          "\nHoly, holy, holy, Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy, merciful and mighty!\nGod in Three Persons, blessed Trinity.",
          "Holy, holy, holy, though the darkness hide Thee,\nThough the eye of sinful man Thy glory may not see,\nOnly Thou art holy; there is none beside Thee,\nPerfect in power, in love, and purity.",
          "Holy, holy, holy, Lord God Almighty!\nAll Thy works shall praise Thy name, in earth, and sky, and sea!\nHoly, holy, holy, merciful and mighty!\nGod in Three Persons, blessed Trinity."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2011%20Holy%20Holy%20Holy.mp3",
      "category": "adoration"
  },
  {
      "number": "12",
      "title": "Praise Him Praise Him Jesus Our Blessed",
      "titleWithHymnNumber": "12 Praise Him Praise Him Jesus Our Blessed",
      "chorus": "",
      "verses": [
          "Praise Him! Praise Him! Jesus our blessed Redeemer,\nSing, O earth, His wonderful love proclaim;\nHail Him! Hail Him! Highest archangels in glory,\nStrength and honour give to His holy name.\nLike a shepherd, Jesus will guard His children,\nIn His arms He carries them all day long;\nO ye saints that dwell on the mountain of Zion,\nPraise Him! Praise Him! Ever in joyful song.",
          "Praise Him! Praise Him! Jesus our blessed Redeemer,\nHeav'nly portals, loud with hosannas ring;\nJesus, Saviour, reigneth forever and ever,\nCrown Him! Crown Him! Prophet and Priest and King!\nDeath is vanquished! Tell it with joy, ye faithful,\nWhere is now thy victory, boasting grave?\nJesus lives! No longer thy portals are cheerless,\nJesus lives, the mighty and strong to save."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2012%20%20Praise%20Him%20Praise%20Him.mp3",
      "category": "adoration"
  },
  {
      "number": "13",
      "title": "To God Be The Glory",
      "titleWithHymnNumber": "13 To God Be The Glory",
      "chorus": "Praise the Lord! Praise the Lord!\nLet the earth hear His voice!\nPraise the Lord! Praise the Lord!\nLet the people rejoice!\nOh come to the Father, through Jesus the Son,\nAnd give Him the glory; great things He hath done.",
      "verses": [
          "\nTo God be the glory, great things He hath done,\nSo loved He the world that He gave us His Son,\nWho yielded His life an atonement for sin,\nAnd opened the life gate that all may go in.",
          "O perfect redemption, the purchase of blood,\nTo ev'ry believer the promise of God;\nThe vilest offender who truly believes,\nThat moment from Jesus a pardon receives.",
          "Great things He hath taught us, great things He hath done,\nAnd great our rejoicing through Jesus the Son;\nBut purer, and higher, and greater will be,\nOur wonder, our transport when Jesus we see."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2013%20%20To%20God%20Be%20The%20Glory.mp3",
      "category": "adoration"
  },
  {
      "number": "14",
      "title": "How Great Thou Art",
      "titleWithHymnNumber": "14 How Great Thou Art",
      "chorus": "Then sings my soul, my Saviour God, to Thee,\nHow great Thou art! How great Thou art!\nThen sings my soul, my Saviour God, to Thee,\nHow great Thou art! How great Thou art!",
      "verses": [
          "\nO Lord my God! When I in awesome wonder\nConsider all the works Thy hand hath made,\nI see the stars, I hear the mighty thunder,\nThy power throughout the universe displayed.",
          "When through the woods and forest glades I wander\nAnd hear the birds sing sweetly in the trees;\nWhen I look down from lofty mountain grandeur,\nAnd hear the brook, and feel the gentle breeze.",
          "And when I think that God His Son not sparing,\nSent Him to die - I scarce can take it in.\nThat on the Cross my burden gladly bearing,\nHe bled and died to take away my sin.",
          "When Christ shall come with shout of acclamation\nAnd take me home - what joy shall fill my heart!\nThen shall I bow in humble adoration\nAnd there proclaim, my God, how great Thou art!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2014%20%20How%20Great%20Thou%20%20Art.mp3",
      "category": "adoration"
  },
  {
      "number": "15",
      "title": "O Worship The King",
      "titleWithHymnNumber": "15 O Worship The King",
      "chorus": "",
      "verses": [
          "\nO worship the King, all glorious above,\nO gratefully sing His power and His love;\nOur Shield and Defender, the Ancient of Days,\nPavillion'd in splendour, and girded with praise.",
          "Thy bountiful care, what tongue can recite?\nIt breathes in the air, it shines in the light,\nIt streams from the hills, it descends to the plain,\nAnd sweetly distils in the dew and the rain.",
          "Frail children of dust, and feeble as frail;\nIn Thee do we trust, nor find Thee to fail;\nThy mercies, how tender, how firm to the end,\nOur Maker, Defender, Redeemer, and Friend!",
          "O measureless Might! Ineffable Love!\nWhile angels delight to hymn Thee above,\nThe humbler creation, though feeble their lays,\nWith true adoration shall lisp to Thy praise."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2015%20%20O%20Worship%20The%20%20king.mp3",
      "category": "adoration"
  },
  {
      "number": "16",
      "title": "If God Be For Us",
      "titleWithHymnNumber": "16 If God Be For Us",
      "chorus": "\"If God be for us, if God be for us,\nIf God be for us, who can be against us? \nWho? Who? Who?\nWho can be against us, against us?\"",
      "verses": [
          "Rejoice in the Lord! Oh, let His mercy cheer; \nHe sunders the bands that enthral;\nRedeem'd by His blood why should we ever fear \nSince Jesus is our \"all in all\"?",
          "Be strong in the Lord! rejoicing in His might,\nBe loyal and true day by day; \nWhen evils assail, be valiant for the right, \nAnd He will be our strength and stay.",
          "Confide in His word - His promises so sure;\nIn Christ they are \"yea and amen;\"\nThough earth pass away, they ever shall endure,\n'Tis written o'er and o'er again.",
          "Abide in the Lord; secure in His control, \n'Tis life everlasting begun; \nTo pluck from His hand the weakest, trembling soul- \nIt never, never can be done!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2016%20%20If%20God%20Be%20For%20%20us.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "17",
      "title": "Nothing But The Blood",
      "titleWithHymnNumber": "17 Nothing But The Blood",
      "chorus": "Oh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus.",
      "verses": [
          "\nWhat can wash away my sin?\nNothing but the blood of Jesus;\nWhat can make me whole again?\nNothing but the blood of Jesus.",
          "For my pardon, this I see,\nNothing but the blood of Jesus;\nFor my cleansing this my plea,\nNothing but the blood of Jesus.",
          "Nothing can for sin atone,\nNothing but the blood of Jesus;\nNaught of good that I have done,\nNothing but the blood of Jesus.",
          "This is all my hope and peace,\nNothing but the blood of Jesus;\nThis is all my righteousness,\nNothing but the blood of Jesus.",
          "Now by this I'll overcome—\nNothing but the blood of Jesus,\nNow by this I'll reach my home—\nNothing but the blood of Jesus.",
          "Glory! Glory! This I sing—\nNothing but the blood of Jesus,\nAll my praise for this I bring—\nNothing but the blood of Jesus."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2017%20%20Nothing%20but%20The%20Blood%20of%20Jesus.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "18",
      "title": "Blessed Assurance",
      "titleWithHymnNumber": "18 Blessed Assurance",
      "chorus": "This is my story, this is my song,\nPraising my Saviour all the day long;\nThis is my story, this is my song,\nPraising my Saviour all the day long.",
      "verses": [
          "Blessed assurance, Jesus is mine!\nOh, what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of His Spirit, washed in His blood.",
          "Perfect submission, perfect delight,\nVisions of rapture now burst on my sight;\nAngels descending, bring from above\nEchoes of mercy, whispers of love.",
          "Perfect submission, all is at rest,\nI in my Saviour am happy and blest;\nWatching and waiting, looking above,\nFilled with His goodness, lost in His love."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2018%20%20Blessed%20Assurance.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "19",
      "title": "Christ Jesus Hath The Power",
      "titleWithHymnNumber": "19 Christ Jesus Hath The Power",
      "chorus": "Christ Jesus hath the pow'r, \nthe pow'r of God He wields!\nChrist Jesus hath the pow'r,\n my heart surrender yields!\nChrist Jesus hath the pow'r,\nI trust Him evermore!\nChrist Jesus hath the pow'r,\nI worship and adore!",
      "verses": [
          "Christ Jesus hath the power, the power to forgive,\nThe pow'r to quicken whom He will and make the sinner live.\nChrist Jesus hath the pow'r, O tell it far and near!\nO bring to Him your guilty heart, and grace shall banish fear!",
          "Christ Jesus hath the pow'r, the power to renew,\nThe pow'r to cleanse your heart from sin, and make you wholly true.\nChrist Jesus hath the pow'r for evermore to keep:\nO none can pluck you from His hand or rob Him of His sheep!",
          "Christ Jesus hath the pow'r, the power to console,\nThe pow'r to carry all your care - on Him your burdens roll.\nChrist Jesus hath the pow'r to wipe the tear away:\nO place in Him your confidence! O trust Him and obey!",
          "Christ Jesus hath the pow'r, the power to destroy,\nThe pow'r to bruise your enemy, who would your soul annoy.\nChrist Jesus hath the pow'r, when on your dying bed,\nTo give your soul the victory, the pow'r to raise the dead!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2019%20%20Christ%20Jesus%20Hath%20the%20Power.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "20",
      "title": "The Way The Truth The Life",
      "titleWithHymnNumber": "20 The Way The Truth The Life",
      "chorus": "“I am the Way, the Truth, and the Life,\nNo man cometh unto the Father but by Me.”\n“I am the Way, the Truth, and the Life,\nNo man cometh unto the Father but by Me.”",
      "verses": [
          "1 “I am the Way,” the Saviour said,\nAnd I would follow on,\nContent to know that after night\nShall break a glorious dawn.",
          "“I am the Truth;” then Truth shall be\nA beacon light to guide\nMy bark across the stormy sea\nTo where still waters glide.",
          "“I am the Life,” there is no death\nFor me to fear, nor dread,\nSince by His all-atoning blood\nMy life to His is wed."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2020%20%20The%20Way%20The%20Truth%20The%20Life.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "21",
      "title": "Will Your Anchor Hold",
      "titleWithHymnNumber": "21 Will Your Anchor Hold",
      "chorus": "We have an anchor that keeps the soul\nSteadfast and sure while the billows roll:\nFasten'd to the Rock which cannot move,\nGrounded firm and deep in the Saviour's love!",
      "verses": [
          " \n Will your anchor hold in the storms of life?\n When the clouds unfold their wings of strife;\n When the strong tides lift and the cables strain,\n Will your anchor drift, or firm remain?\n \n    We have an anchor that keeps the soul\n    Steadfast and sure while the billows roll:\n    Fasten'd to the Rock which cannot move,\n    Grounded firm and deep in the Saviour's love!\n \n It is safely moored 'twill the storms withstand,\n For 'tis well secured by the Saviour's hand;\n And the cables passed from His heart to mine,\n Can defy the blast through strength divine.\n \n It will firmly hold in the straits of fear,\n When the breakers have told the reef is near,\n Though the tempest rave and the wild winds blow,\n Not an angry wave shall our bark o'erflow.\n \n It will surely hold in the floods of death,\n When the waters cold, chill our latest breath,\n On the rising tide it can never fail,\n While our hopes abide within the veil!\n \n When our eyes behold, through the gathering night\n The city of gold, our harbour bright,\n We shall anchor fast by the heavenly shore,\n With the storms all past for evermore.\n ",
          " \n \n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2021%20%20Will%20Your%20Anchor%20Hold.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "22",
      "title": "Simply Trusting Everyday",
      "titleWithHymnNumber": "22 Simply Trusting Everyday",
      "chorus": "",
      "verses": [
          "Simply trusting every day;\nTrusting through a stormy way;\nEven when my faith is small,\nTrusting Jesus, that is all",
          "Brightly doth His Spirit shine\nInto this poor heart of mine;\nWhile He leads I cannot fall,\nTrusting Jesus, that is all.",
          "Singing if my way be clear,\nPraying if the path be drear;\nIf in danger, for Him call,\nTrusting Jesus, that is all.",
          "Trusting Him while life shall last,\nTrusting Him till earth is past,\nTill His gracious advent call,\nTrusting Jesus, that is all."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2022%20%20Simply%20Trusting%20Everyday.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "23",
      "title": "No Other Plea",
      "titleWithHymnNumber": "23 No Other Plea",
      "chorus": "I need no other argument.\nI need no other plea,\nIt is enough that Jesus died,\nAnd that He died for me.",
      "verses": [
          "\nMy faith has found a resting place,\nNot in device nor creed;\nI trust the ever Living One,\nHis wounds for me shall plead.",
          "Enough for me that Jesus saves,\nThis ends my fear and doubt;\nA sinful soul I come to Him,\nHe'll never cast me out.",
          "My heart is leaning on the Word,\nThe written Word of God,\nSalvation by my Saviour's Name,\nSalvation through His Blood.",
          "My great Physician heals the sick,\nThe lost He came to save:\nFor me His precious Blood He shed,\nFor me His life He gave."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2023%20%20No%20Other%20Plea.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "24",
      "title": "It Is Well With My Soul",
      "titleWithHymnNumber": "24 It Is Well With My Soul",
      "chorus": "It is well . . . with my soul . . .\nIt is well, it is well with my soul.",
      "verses": [
          "\nWhen peace like a river attendeth my way,\nWhen sorrows like sea billows roll;\nWhatever my lot, Thou hast taught me to say,\nIt is well, it is well with my soul.",
          "Though Satan should buffet, tho' trials should come,\nLet this blest assurance control,\nThat Christ has regarded my helpless estate,\nAnd hath shed His own blood for my soul.",
          "My sin - oh the bliss of this glorious thought -\nMy sin - not in part, but the whole -\nIs nailed to His cross: and I bear it no more,\nPraise the Lord, praise the Lord, O my soul!",
          "For me, be it Christ, be it Christ hence to live!\nIf Jordan above me shall roll;\nNo pang shall be mine, for in death as in life\nThou wilt whisper Thy peace to my soul.",
          "But Lord, 'tis for Thee, for Thy coming we wait,\nThe sky, not the grave, is our goal:\nOh, trump of the angel! oh, voice of the Lord!\nBlessed hope! Blessed rest of my soul!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2024%20%20It%20Is%20well%20With%20My%20Soul.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "25",
      "title": "Now I Belong To Jesus",
      "titleWithHymnNumber": "25 Now I Belong To Jesus",
      "chorus": "Now I belong to Jesus,\nJesus belongs to me,\nNot for the years of time alone,\nBut for eternity.",
      "verses": [
          "Jesus, my Lord will love me forever,\nFrom Him no pow'r of evil can sever,\nHe gave His life to ransom my soul;\nNow I belong to Him;",
          "Once I was lost in sin's degradation,\nJesus came down to bring me salvation,\nLifted me up from sorrow and shame,\nNow I belong to Him;",
          "Now I belong to Jesus,\nJesus belongs to me,\nNot for the years of time alone,\nBut for eternity.",
          "Joy floods my soul for Jesus has saved me,\nFreed me from sin that long had enslaved me\nHis precious blood, He came to redeem,\nNow I belong to Him;",
          "Now I belong to Jesus,\nJesus belongs to me,\nNot for the years of time alone,\nBut for eternity."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2025%20%20Now%20I%20Belong%20to%20Jesus.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "26",
      "title": "I Know Whom I Have Believed",
      "titleWithHymnNumber": "26 I Know Whom I Have Believed",
      "chorus": "But I know Whom I have believèd,\nAnd am persuaded that He is able\nTo keep that which I’ve committed\nUnto Him against that day.",
      "verses": [
          "I know not why God’s wondrous grace\nTo me He hath made known,\nNor why, unworthy, Christ in love\nRedeemed me for His own.",
          "I know not how this saving faith\nTo me He did impart,\nNor how believing in His Word\nWrought peace within my heart.",
          "I know not how the Spirit moves,\nConvincing us of sin,\nRevealing Jesus through the Word,\nCreating faith in Him.",
          "I know not what of good or ill\nMay be reserved for me,\nOf weary ways or golden days,\nBefore His face I see.",
          "I know not when my Lord may come,\nAt night or noonday fair,\nNor if I walk the vale with Him,\nOr meet Him in the air.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2026%20%20I%20Know%20Whom%20I%20Have%20Believed.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "27",
      "title": "I Am Bound For Canan",
      "titleWithHymnNumber": "27 I Am Bound For Canan",
      "chorus": "Let those who will stay in Egypt land,\nI am bound for Canaan,\nWhere milk and honey flowing, shall every need supply;\nAll battles fought and the victory won,\nPeace and joy my portion,\nMy soul shall rest on its shore by and by.",
      "verses": [
          "Storms do not alarm me, they sometime must cease,\nTrials cannot harm me, for I have blessed peace;\nAll I've left behind me, I long for no more,\nBetter things shall find me on Canaan's shore.",
          "Troubles do not fret me, they cannot abide,\nThough they may beset me, in Jesus, I will hide,\nAll the world's commotion about me may roam,\nThere's no stormy ocean on Canaan's shore.",
          "I in grace abiding, am trying to stay,\nIn the shadow hiding of Canaan's perfect day;\nAll I trust may fail me, 'twill matter no more,\nNothing can assail me on Canaan's shore.",
          ""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2027%20%20I%20Am%20Bound%20For%20Canaan.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "28",
      "title": "I Am Living In Cannan",
      "titleWithHymnNumber": "28 I Am Living In Cannan",
      "chorus": "I am living in Canaan now,\nWhere the showers of blessing abound\nWhere the riches of grace in plenty are found,\nI am living in Canaan now.",
      "verses": [
          "\nAll that draw me I have left behind\nHere in Canaan better joys I find;\nPeace abiding, blessings unconfined,\nFor I'm living in Canaan now.",
          "Safe abiding I will never fear,\nFor my Saviour ever will be near;\nWhen I call Him He will always hear,\nFor I'm living in Canaan now.",
          "I am drinking from a ceaseless well,\nHere in Canaan where I love to dwell,\nSo to others I am glad to tell,\nThat I'm living in Canaan now.",
          "Praises ever I am glad to bring\nUnto Jesus, my Redeemer, King;\nFor His mercies I will shout and sing,\nFor I'm living in Canaan now.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2028%20%20I'm%20Living%20in%20Canaan.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "29",
      "title": "I Know Who Holds Tomorrow",
      "titleWithHymnNumber": "29 I Know Who Holds Tomorrow",
      "chorus": "Many things about tomorrow,\nI don't seem to understand;\nBut I know Who holds tomorrow,\nAnd I know Who holds my hand.",
      "verses": [
          "\nI don't know about tomorrow,\nI just live from day to day.\nI don't borrow from its sunshine,\nFor its skies may turn to gray.\nI don't worry o'er the future,\nFor I know what Jesus said,\nAnd today I'll walk beside Him,\nFor He knows what is ahead.",
          "Ev'ry step is getting brighter,\nAs the golden stairs I climb;\nEv'ry burden's getting lighter;\nEv'ry cloud is silver lined.\nThere the sun is always shining,\nThere no tear will dim the eyes,\nAt the ending of the rainbow,\nWhere the mountains touch the sky.",
          "I don't know about tomorrow,\nIt may bring me poverty;\nBut the One Who feeds the sparrow,\nIs the One Who stands by me.\nAnd the path that be my portion,\nMay be through the flame or flood,\nBut His presence goes before me,\nAnd I'm covered with His blood."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2029%20%20I%20Know%20Who%20Holds%20Tomorrow.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "30",
      "title": "I've Anchored In Jesus",
      "titleWithHymnNumber": "30 I've Anchored In Jesus",
      "chorus": "I’ve anchored in Jesus, the storms of life I’ll brave,\nI’ve anchored in Jesus, I fear no wind or wave.\nI’ve anchored in Jesus, for He hath power to save,\nI’ve anchored to the Rock of Ages.",
      "verses": [
          "Upon life’s boundless ocean where mighty billows roll,\nI’ve fixed my hope in Jesus, blest anchor of my soul;\nWhen trials fierce assail me as storms are gathering o’er,\nI rest upon His mercy and trust Him more.",
          "He keeps my soul from evil and gives me blessèd peace,\nHis voice hath stilled the waters and bid their tumult cease;\nMy Pilot and Deliverer, to Him I all confide,\nFor always when I need Him, He’s at my side.",
          "He is my Friend and Savior, in Him my anchor’s cast,\nHe drives away my sorrows and shields me from the blast;\nBy faith I’m looking upward beyond life’s troubled sea,\nThere I behold a haven prepared for me.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2030%20%20I've%20Anchored%20In%20Jesus.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "31",
      "title": "He Touched Me",
      "titleWithHymnNumber": "31 He Touched Me",
      "chorus": "He touched me, Oh He touched me,\nAnd oh the joy that floods my soul!\nSomething happened and now I know,\nHe touched me and made me whole.",
      "verses": [
          "\nShackled by a heavy burden,\n'Neath a load of guilt and shame.\nThen the hand of Jesus touched me,\nAnd now I am no longer the same.",
          "Since I met this blessed Savior,\nSince He cleansed and made me whole,\nI will never cease to praise Him,\nI'll shout it while eternity rolls."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2031%20%20He%20Touched%20Me.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "32",
      "title": "Heaven Came Down",
      "titleWithHymnNumber": "32 Heaven Came Down",
      "chorus": "Heaven came down and glory filled my soul,\nWhen at the cross the Saviour made me whole;\nMy sins were washed away\nAnd my night was turned to day –\nHeaven came down and glory filled my soul.",
      "verses": [
          "O what a wonderful, wonderful day –\nDay I will never forget;\nAfter I'd wandered in darkness away,\nJesus my Saviour I met;\nO what a tender, compassionate Friend –\nHe met the need of my heart;\nShadows dispelling, with joy I am telling,\nHe made all the darkness depart!",
          "Born of the Spirit with life from above\nInto God's fam'ly divine,\nJustified fully thru Calvary's love\nO what a standing is mine!\nAnd the transaction so quickly was made\nWhen as a sinner I came,\nTook of the offer of grace He did proffer –\nHe saved me, O praise His dear name.",
          "Now I've a hope that will surely endure\nAfter the passing of time;\nI have a future in heaven for sure,\nThere in those mansions sublime;\nAnd it's because of that wonderful day\nWhen at the cross I believed;\nRiches eternal and blessings supernal\nFrom His precious hand I received."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2032%20%20Heaven%20Came%20Down.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "33",
      "title": "Since Jesus Came Into My Heart",
      "titleWithHymnNumber": "33 Since Jesus Came Into My Heart",
      "chorus": "Since Jesus came into my heart\nSince Jesus came into my heart;\nFloods of joy o'er my soul like the sea billows roll,\nSince Jesus came into my heart",
      "verses": [
          "What a wonderful change in my life has been wrought\nSince Jesus came into my heart; \nI have light in my soul for which long I had sought,\nSince Jesus came into my heart.",
          "I have ceased from my wand'ring and going astray, \nSince Jesus came into my heart; \nAnd my sins which were many are all washed away,\nSince Jesus came into my heart.",
          "I'm possessed of a hope that is steadfast and sure,\nSince Jesus came into my heart!\nAnd no dark clouds of doubt now my pathway obscure,\nSince Jesus came into my heart!",
          "There's a light in the valley of death now for me,\nSince Jesus came into my heart!\nAnd the gates of the City beyond I can see,\nSince Jesus came into my heart!",
          "I shall go there to dwell in that City I know,\nSince Jesus came into my heart; \nAnd I'm happy, so happy as onward I go, \nSince Jesus came into my heart."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2033%20%20Since%20Jesus%20Came%20Into%20My%20Heart.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "34",
      "title": "Constantly Abiding",
      "titleWithHymnNumber": "34 Constantly Abiding",
      "chorus": "Constantly abiding, Jesus is mine;\nConstantly abiding, rapture divine;\nHe never leaves me lonely,\nWhispers, O so kind:\nI will never leave thee, Jesus is mine.",
      "verses": [
          "There’s a peace in my heart\nThat the world never gave,\nA peace it cannot take away;\nThough the trials of life\nMay surround like a cloud,\nI’ve a peace that has come here to stay!",
          "All the world seemed to sing\nOf a Savior and king,\nWhen peace sweetly came to my heart;\nTroubles all fled away\nAnd my night turned to day,\nBlessed Jesus, how glorious Thou art!",
          "This treasure I have\nIn a temple of clay,\nWhile here on His footstool I roam;\nBut He’s coming to take\nMe some glorious day,\nOver there to my heavenly home!\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2034%20%20Constantly%20Abiding.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "35",
      "title": "A New Name In Glory",
      "titleWithHymnNumber": "35 A New Name In Glory",
      "chorus": "There's a new name written down in glory,\nAnd it's mine, O yes, it's mine!\nAnd the white robed angels sing the story,\n\"A sinner has come home.\"\nFor there's a new name written down in glory,\nAnd it's mine, O yes, it's mine!\nWith my sins forgiven I am bound for Heaven,\nNever more to roam.",
      "verses": [
          "I was once a sinner, but I came\nPardon to receive from my Lord:\nThis was freely given, and I found\nThat He always kept His word. ",
          "I was humbly kneeling at the cross,\nFearing naught but God's angry frown;\nWhen the heavens opened and I saw\nThat my name was written down! ",
          "In the Book 'tis written, \"Saved by Grace,\"\nO the joy that came to my soul!\nNow I am forgiven, and I know\nBy the blood I am made whole!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2035%20%20A%20New%20Name%20In%20Glory.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "36",
      "title": "My Name's Written There",
      "titleWithHymnNumber": "36 My Name's Written There",
      "chorus": "My name's written there,\nOn the page white and fair;\nIn the Book of God's kingdom,\nMy name's written there.",
      "verses": [
          "1 I am bought not with riches,\nNeither silver nor gold;\nBut Christ hath redeemed me,\nI am safe in His fold;\nIn the Book of His kingdom,\nWith its pages so fair,\nThrough Jesus my Saviour,\nMy name's written there.",
          "My sins, they were many,\nLike the sands of the sea,\nBut the blood of my Saviour\nIs sufficient for me;\nFor His promise is written,\nIn bright letters that glow,\n\"Though your sins be as scarlet,\nI will make them like snow.\"",
          "Oh! that beautiful city,\nWith its mansions of light,\nWith its glorified beings,\nIn pure garments of white;\nWhere no evil thing cometh\nTo despoil what is fair;\nWhere the angels are watching,\nMy name's written there. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2036%20%20My%20Name's%20Written%20There.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "37",
      "title": "When I See The Blood",
      "titleWithHymnNumber": "37 When I See The Blood",
      "chorus": "",
      "verses": [
          "Christ our Redeemer died on the cross,\nDied for the sinner, paid all his due;\nAll who receive Him need never fear,\nYes, He will pass, will pass over you. ",
          "Chiefest of sinners, Jesus will save;\nAs He has promised, so He will do;\nOh, sinner, hear Him, trust in His Word,\nThen He will pass, will pass over you.",
          "Judgment is coming, all will be there.\nWho have rejected, who have refused?\nOh, sinner, hasten, let Jesus in,\nOh, He will pass, will pass over you.",
          "O great compassion! O boundless love!\nJesus hath power, Jesus is true;\nAll who believe are safe from the storm,\nOh, He will pass, will pass over you."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2037%20%20When%20I%20See%20The%20Blood.mp3",
      "category": "blood of jesus"
  },
  {
      "number": "38",
      "title": "Have You Been To Jesus",
      "titleWithHymnNumber": "38 Have You Been To Jesus",
      "chorus": "Are you washed in the blood,\nIn the soul cleansing blood of the Lamb?\nAre your garments spotless?\nAre they white as snow?\nAre you washed in the blood of the Lamb?",
      "verses": [
          "Have you been to Jesus for the cleansing power?\nAre you washed in the blood of the Lamb?\nAre you fully trusting in His grace this hour?\nAre you washed in the blood of the Lamb?",
          "Are you walking daily by the Savior's side?\nAre you washed in the blood of the Lamb?\nDo you rest each moment in the Crucified?",
          "When the Bridegroom cometh will your robes be white?\nAre you washed in the blood of the Lamb?\nWill your soul be ready for the mansions bright,\nAnd be washed in the blood of the Lamb?",
          "Lay aside the garments that are stained with sin,\nAnd be washed in the blood of the Lamb;\nThere's a fountain flowing for the soul unclean,\nO be washed in the blood of the Lamb!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2038%20Have%20You%20Been%20to%20Jesus%20.mp3",
      "category": "blood of jesus"
  },
  {
      "number": "39",
      "title": "Power In The Blood",
      "titleWithHymnNumber": "39 Power In The Blood",
      "chorus": "There is pow'r, pow'r, wonder-working pow'r\nIn the blood of the Lamb,\nThere is pow'r, pow'r, wonder-working pow'r\nIn the precious blood of the Lamb.",
      "verses": [
          "\nWould you be free from your burden of sin?\nThere's pow'r in the blood, pow'r in the blood;\nWould you o'er evil a victory win?\nThere's wonderful pow'r in the blood.",
          "Would you be free from your passion and pride?\nThere's pow'r in the blood, pow'r in the blood;\nCome for a cleansing to Calvary's tide,\nThere's wonderful pow'r in the blood.",
          "Would you be whiter. Much whiter than snow?\nThere's pow'r in the blood, pow'r in the blood;\nSin stains are lost in its life-giving flow,\nThere's wonderful pow'r in the blood.",
          "Would you do service for Jesus your King?\nThere's pow'r in the blood, pow'r in the blood;\nWould you live daily His praises to sing?\nThere's wonderful pow'r in the blood."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2039%20%20Power%20In%20The%20Blood.mp3",
      "category": "blood of jesus"
  },
  {
      "number": "40",
      "title": "Wash Me O Lamb Of God",
      "titleWithHymnNumber": "40 Wash Me O Lamb Of God",
      "chorus": "",
      "verses": [
          "Wash me, O Lamb of God,\nWash me from sin!\nBy Thine atoning blood,\nOh, make me clean!\nPurge me from every stain,\nLet me Thine image gain,\nIn love and mercy reign\nO'er all within.",
          "Wash me, O Lamb of God,\nWash me from sin!\nI will not, cannot, rest\nTill pure within.\nAll human skill is vain,\nBut Thou canst cleanse each stain\nTill not a spot remain –\nMade wholly clean.",
          "Wash me, O Lamb of God,\nWash me from sin!\nBy faith Thy cleansing blood\nNow makes clean.\nSo near art Thou to me,\nSo sweet my rest in Thee –\nOh, blessed purity,\nSaved, saved from sin.",
          "Wash me, O Lamb of God,\nWash me from sin!\nThou, while I trust in Thee,\nWilt keep me clean.\nEach day to Thee I bring\nHeart, life – yea everything;\nSaved, while to Thee I cling,\nSaved from all sin!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2040%20%20Wash%20%20Me%20O%20lamb%20of%20God.mp3",
      "category": "blood of jesus"
  },
  {
      "number": "41",
      "title": "Onward Christian Soldiers",
      "titleWithHymnNumber": "41 Onward Christian Soldiers",
      "chorus": "Onward Christian soldiers!\nMarching as to war,\nWith the cross of Jesus\nGoing on before.",
      "verses": [
          "Onward, Christian soldiers! marching as to war,\nWith the cross of Jesus going on before;\nChrist, the royal Master leads against the foe;\nForward into battle, see, His banners go!",
          "Like a mighty army moves the Church of God;\nBrothers we are treading where the saints have trod;\nWe are not divided, all one body we;\nOne in hope and doctrine, one in charity.",
          "Crowns and thrones may perish, kingdoms rise and wane;\nBut the Church of Jesus constant will remain;\nGates of hell can never 'gainst that Church prevail;\nWe have Christ's own promise, which can never fail.",
          "Onward, then, ye people, join our happy throng;\nBlend with ours your voices in the triumph song;\nGlory, laud, and honour, unto Christ the King;\nThis thro' countless ages men and angels sing."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2041%20%20Onward%20Christian%20Soldiers.mp3",
      "category": "christian life"
  },
  {
      "number": "42",
      "title": "Close To Thee",
      "titleWithHymnNumber": "42 Close To Thee",
      "chorus": "Close to Thee, close to Thee,\nClose to Thee, close to Thee;\nAll along my pilgrim journey,\nSaviour, let me walk with Thee.",
      "verses": [
          "Thou my everlasting Portion,\nMore than friend or life to me;\nAll along my pilgrim journey,\nSaviour, let me walk with Thee.",
          "Not for ease or worldly pleasure,\nOr for fame, my pray'r shall be;\nGladly will I toil and suffer,\nOnly let me walk with Thee.",
          "Close to Thee, close to Thee,\nClose to Thee, close to Thee;\nGladly will I toil and suffer,\nOnly let me walk with Thee.",
          "Lead me thro' the vale of shadow;\nBear me o'er life's fitful sea;\nThen the gate of life eternal,\nMay I enter, Lord, with Thee.",
          "Close to Thee, close to Thee,\nClose to Thee, close to Thee;\nThen the gates of life eternal,\nMay I enter, Lord, with Thee."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2042%20%20Close%20To%20Thee.mp3",
      "category": "christian life"
  },
  {
      "number": "43",
      "title": "Trust And Obey",
      "titleWithHymnNumber": "43 Trust And Obey",
      "chorus": "Trust and obey, for there's no other way\nTo be happy in Jesus,\nBut to trust and obey.",
      "verses": [
          "When we walk with the Lord\nIn the light of His Word\nWhat a glory He sheds on our way!\nWhile we do His good will,\nHe abides with us still,\nAnd with all who will trust and obey.",
          "Not a shadow can rise,\nNot a cloud in the skies,\nBut His smile quickly drives it away;\nNot a doubt or a fear,\nNot a sight nor a tear,\nCan abide while we trust and obey.",
          "Not a burden we bear,\nNot a sorrow we share,\nBut our toil He doth richly repay;\nNot a grief nor a loss,\nNot a frown nor a cross,\nBut is blest if we trust and obey.",
          "But we never can prove\nThe delights of His love\nUntil all on the altar we lay;\nFor the favour He shows,\nAnd the joy He bestows,\nAre for them who will trust and obey.",
          "Then in fellowship sweet\nWe will sit at His feet,\nOr we'll walk by His side in the way;\nWhat He says we will do,\nWhere He leads we will go,\nNever fear, only trust and obey."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2043%20%20Trust%20And%20Obey.mp3",
      "category": "christian life"
  },
  {
      "number": "44",
      "title": "Come Over",
      "titleWithHymnNumber": "44 Come Over",
      "chorus": "Come over, come over,\nTo the land of corn and wine;\nThere is nothing can compare\nWith the many holy pleasures there;\nCome over, come over,\nLeave the desert plain below\nAnd come away, away,\nCome over.",
      "verses": [
          "There’s a land of peace and plenty,\nAnd its gates are open wide,\nAnd the pure in heart and holy\nIn its shelter may abide;\nIt is not through gates of glory\nThat a soul must enter in;\nBut all who would find entrance there\nMust leave the ways of sin.",
          "There is bread of heaven growing,\nIn its fair and fertile fields,\nAnd the wine of love its vineyard\nTo the thirsting mortal yields;\nThere are mountain heights of glory\nThat await the trav’ler’s rod,\nAnd blest retreats where empty souls\nDraw nearer unto God.",
          "Who would stay without its borders,\nIn the desert dark and drear,\nWhen the luscious grapes of Eschol\nAre so very, very near?\nEnter in then with rejoicing,\nFor the Lord is on your side,\nAnd in his glorious presence\nEvermore you shall abide."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2044%20%20Come%20Over.mp3",
      "category": "christian life"
  },
  {
      "number": "45",
      "title": "Jesus My Strengh My Hope",
      "titleWithHymnNumber": "45 Jesus My Strengh My Hope",
      "chorus": "",
      "verses": [
          "JESUS, my strength, my hope,\nOn thee I cast my care,\nWith humble confidence look up,\nAnd know thou hearest prayer.\nGive me on thee to wait,\nTill I can all things do,\nOn thee, almighty to create,\nAlmighty to renew.",
          "I want a godly fear,\nA quick-discerning eye,\nThat looks to thee when sin is near,\nAnd sees the tempter fly;\nA spirit still prepared\nAnd armed with jealous care,\nFor ever standing on its guard,\nAnd watching unto prayer.",
          "\nI rest upon thy word;\nThe promise is for me;\nMy succour and salvation, Lord,\nShall surely come from thee.\nBut let me still abide,\nNor from my hope remove,\nTill thou my patient spirit guide\nInto thy perfect love."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2045%20%20Jesus%20My%20Strength%20My%20Hope.mp3",
      "category": "christian life"
  },
  {
      "number": "46",
      "title": "A Christian Home",
      "titleWithHymnNumber": "46 A Christian Home",
      "chorus": "",
      "verses": [
          "O give us homes built firm upon the Saviour,\nWhere Christ is Head, and Counsellor and Guide;\nWhere ev'ry child is taught His love and favor\nAnd gives his heart to Christ, the crucified:\nHow sweet to know that tho' his footsteps waver\nHis faithful Lord is walking by his side!",
          "O give us homes where Christ is Lord and Master,\nThe Bible read, the precious hymns still sung;\nWhere prayer comes first in peace or in disaster,\nAnd praise is natural speech to ev'ry tongue;\nWhere mountains move before a faith that's vaster,\nAnd Christ sufficient is for old and young.",
          "O Lord, our God, our homes are Thine forever!\nWe trust to Thee their problems, toil, and care;\nTheir bonds of love no enemy can sever\nIf Thou art always Lord and Master there:\nBe Thou the center of our least endeavor:\nBe Thou our Guest, our hearts and homes to share."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2046%20%20A%20Christian%20Home.mp3",
      "category": "christian life"
  },
  {
      "number": "47",
      "title": "Just Obey",
      "titleWithHymnNumber": "47 Just Obey",
      "chorus": "Just obey . . ., just obey . . .,\nIs the way . . ., God's way . . .,\nWhen His message comes to you,\nThere is but one thing to do:\nJust obey . . . just obey.",
      "verses": [
          "Just as God who reigns on high\nSpake to men in days gone by;\nSo the Lord is calling men today;\nAnd, my brother, this is true,\nWhatsoe'er He says to you,\nThere is but one thing to do -\nJust obey.",
          "If you're in the Saviour's hands,\nYou must do as He commands,\nFor there is no other gospel way;\nNever put the message by,\nNever stop to reason, \"why?\"\nWhen the Saviour speaks to you -\nJust obey.",
          "If for mansions fair you sigh,\nIn that land beyond the sky,\nAfter time with you has pass'd away;\nThough the way you may not see,\nChrist is calling, \"Follow me,\"\nFaith and duty both will cry -\nJust obey."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2047%20%20Just%20Obey.mp3",
      "category": "christian life"
  },
  {
      "number": "48",
      "title": "Tis So Sweet To Trust",
      "titleWithHymnNumber": "48 Tis So Sweet To Trust",
      "chorus": "Jesus, Jesus, how I trust Him,\nHow I've proved Him o'er and o'er!\nJesus, Jesus, precious Jesus!\nO for grace to trust Him more!",
      "verses": [
          "'Tis so sweet to trust in Jesus,\nJust to take Him at His word;\nJust to lean upon His promise,\nJust to know, \"Thus saith the Lord.\"",
          "O how sweet to trust in Jesus,\nJust to trust His cleansing blood;\nJust in simple faith to plunge me\n'Neath the healing, cleansing flood!",
          "Yes, 'tis sweet to trust in Jesus –\nJust from sin and self to cease;\nJust from Jesus simply taking\nLife and rest, and joy and peace!",
          "I'm so glad I learned to trust Thee,\nPrecious Jesus, Saviour, Friend;\nAnd I know that Thou art with me,\nWilt be with me to the end."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2048%20%20Tis%20So%20Sweet%20To%20Trust%20In%20%20Jesus.mp3",
      "category": "NOT FOUND"
  },
  {
      "number": "49",
      "title": "Let Others See Jesus In You",
      "titleWithHymnNumber": "49 Let Others See Jesus In You",
      "chorus": "Let others see Jesus in you…\nLet others see Jesus in you…;\nKeep telling the story, be faithful and true,\nLet others see Jesus in you.",
      "verses": [
          "\nWhile passing through this world of sin,\nAnd others your life shall view;\nBe clean and pure without, within,\nLet others see Jesus in you.",
          "Your life's a book before their eyes,\nThey're reading it through and through;\nSay, does it point them to the skies,\nDo others see Jesus in you?",
          "What joy 'twill be at set of sun,\nIn mansions beyond the blue,\nTo find some souls that you have won;\nLet others see Jesus in you.",
          "Then live for Christ both day and night,\nBe faithful, be brave and true,\nAnd lead the lost to life and light;\nLet others see Jesus in you."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2049%20%20%20Let%20Others%20See%20Jesus%20In%20You.mp3",
      "category": "christian life"
  },
  {
      "number": "50",
      "title": "Count Your Blessings",
      "titleWithHymnNumber": "50 Count Your Blessings",
      "chorus": "Count your blessings, name them one by one;\nCount your blessings, see what God hath done;\nCount your blessings, name them one by one;\nCount your many blessings, see what God hath done.",
      "verses": [
          "\nWhen upon life's billows you are tempest tossed,\nWhen you are discouraged, thinking all is lost,\nCount your many blessings, name them one by one,\nAnd it will surprise you what the Lord hath done.",
          "Are you ever burdened with a load of care?\nDoes the cross seem heavy you are called to bear?\nCount your many blessings, ev'ry doubt will fly,\nAnd you will be singing as the days go by.",
          "When you look at others with their lands and gold,\nThink that Christ has promised you His wealth untold;\nCount your many blessings, money cannot buy\nYour reward in Heaven, nor your home on high.",
          "So, amid the conflict, whether great or small,\nDo not be discouraged, God is over all;\nCount your many blessings, angels will attend,\nHelp and comfort give you to your journey's end."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2050%20%20%20Count%20Your%20Blessings.mp3",
      "category": "christian life"
  },
  {
      "number": "51",
      "title": "That Blessed Canan Land",
      "titleWithHymnNumber": "51 That Blessed Canan Land",
      "chorus": "It is wonderful to live in Canaan,\nWhere the milk and honey flow.\nWhere the land is bearing in abundance\nAnd the grapes of Eschol grow.\nIt is wonderful to live in Canaan,\nWhere the milk and honey flow.\nWon't you join that band,\nWhere the live is grand,\nIn that blessed Canaan land?",
      "verses": [
          "There's a blessed land that we call Canaan,\nLand of promise, land of victory,\nWhere the Spirit's given without measure,\nWhere the soul from self has been set free.",
          "In the land of Canaan there is blessing,\nAll HIs fullness as He takes control.\nBlessed fullness of the Holy Spirit;\nO what glory He brings to the soul! ",
          "Have you crossed the Jordan into Canaan,\nHave you left the wilderness behind\nAnd received the Spirit in His fullness?\nIf you haven't then make up your mind."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2051%20%20%20That%20Blessed%20Canaan%20Land.mp3",
      "category": "christian life"
  },
  {
      "number": "52",
      "title": "Count Me",
      "titleWithHymnNumber": "52 Count Me",
      "chorus": "Count me with the children of the heavenly King;\nCount me with the servants who would service bring;\nCount me with the ransomed who His praises sing;\nCount me… count me…",
      "verses": [
          "When you count the ones who love the Lord,\nCount me, count me;\nWhen you count up those who trust His Word,\nCount me, count me.",
          "When you count up those who 're saved by grace,\nCount me, count me;\nWho have found in Christ a hiding place,\nCount me, count me.",
          "When you count up those who do the right,\nCount me, count me;\nWho are walking in the Gospel light\nCount me, count me.",
          "When you count up those who forward press,\nCount me, count me;\nWho shall gain the crown of righteousness,\nCount me, count me."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2052%20%20%20Count%20Me.mp3",
      "category": "christian life"
  },
  {
      "number": "53",
      "title": "So Send I You",
      "titleWithHymnNumber": "53 So Send I You",
      "chorus": "\"As the Father hath sent me, so send I you\"",
      "verses": [
          "So send I you to labour unrewarded\nTo serve unpaid, unloved, unsought, unknown\nTo bear rebuke, ot suffer scorn and scoffing\nSo send I you to toil for Me alone",
          "So send I you to bind the bruised and broken\nOver wandering souls to work, to weep, to wake\nTo bear the burdens of a world a-weary\nSo send I you to suffer for My sake",
          "So send I you to loneliness and longing\nWith hart a-hungering for tthe loved and known\nForsaking kin and kindred, friend and dear one\nSo send I you to know My love alone",
          "So send I you to leave your life's ambition\nTo die to dear desire, self-will resign\nTo labour long, and love where men revile you\nSo send I you to lsoe you life in Mine",
          "So send I you to hearts made hard by hatred\nTo eyes made blind because they will not see\nTo spend, though it be blood to spend and spare not\nSo send I you to taste of Calvary",
          ""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2053%20%20%20So%20Send%20%20I%20%20You.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "54",
      "title": "I Am Ready For Service",
      "titleWithHymnNumber": "54 I Am Ready For Service",
      "chorus": "I am ready for the service for Thee, dear Lord,\nHere am I, send me,\nI am willing to be what you’d have me be,\nI will go where you want me to go,\nI am ready for service for Thee, dear Lord,\nHere am I, send me\nTho’ the pathway seems dark, for Thee I’ll do or die,\nI am ready for service, Lord.",
      "verses": [
          "Listen to the Master’s pleading,\nThere is urgent work for all;\nHeed the Spirit’s interceding,\nGive this answer to the call",
          "There’s a voice to you now calling,\nWill you heed the earnest word?\nOn the ear ‘tis gently falling,\nGive this answer to your Lord",
          "Many souls in sin are dying;\nHaste to help them while you may,\nFor the time is swiftly flying,\nWill you now to Jesus say? "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2054%20%20%20I%20Am%20Ready%20%20For%20Service.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "55",
      "title": "Anywhere With Jesus",
      "titleWithHymnNumber": "55 Anywhere With Jesus",
      "chorus": "Anywhere! Any where!\nFear I cannot know;\nAnywhere with Jesus\nI can safely go.",
      "verses": [
          "Anywhere with Jesus I can safely go;\nAnywhere He leads me in this world below;\nAnywhere without Him dearest joys would fade;\nAnywhere with Jesus, I am not afraid.",
          "Anywhere with Jesus I am not alone;\nOther friends may fail me, He is still my own;\nTho' His hand may lead me over the dreariest ways,\nAnywhere with Jesus is a house of praise.",
          "Anywhere with Jesus over land and sea,\nTelling souls in darkness of salvation free;\nReady as He summons me to go or stay,\nAnywhere with Jesus when He points the way.",
          "Anywhere with Jesus I can go to sleep,\nWhen the dark'ning shadows round about me creep;\nKnowing I shall waken never more to roam,\nAnywhere with Jesus will be home, sweet home."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2055%20%20%20Anywhere%20With%20%20Jesus.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "56",
      "title": "I Love My Master",
      "titleWithHymnNumber": "56 I Love My Master",
      "chorus": "",
      "verses": [
          "I love, I love my Master,\nI will not go out free!\nFor He is my Redeemer;\nHe paid the price for me.\nI would not leave His service,\nIt is so sweet and blest;\nAnd in the weariest moments\nHe gives the truest rest.",
          "I would not halve my service,\nHis only it must be!\nHis only – Who so loved me,\nAnd gave Himself for me.\nRejoicing and adoring,\nHenceforth my song shall be –\n\"I love, I love my Master,\nI will not go out free!\""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2056%20%20%20I%20Love%20I%20Love%20My%20Master.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "57",
      "title": "They That Wait Upon The Lord",
      "titleWithHymnNumber": "57 They That Wait Upon The Lord",
      "chorus": "For “they that wait upon the Lord\nshall renew their strength,\nthey shall mount up with wings,\nthey shall mount up with wings as eagles,\nThey shall run and not be weary;\nthey shall walk and not faint;\nThey shall run and not be weary;\nthey shall walk and not faint;\nThey shall run and not be weary,\nshall walk and not faint.”",
      "verses": [
          "Ho, reapers in the whitened harvest!\nOft feeble, faint and few;\nCome, wait upon the blessed Master,\nOur strength He will renew.",
          "Too oft aweary and discouraged,\nWe pour a sad complaint;\nBelieving in a living Saviour,\nWhy should we ever faint?",
          "Rejoice, for He is with us alway,\nLo, even to the end!\nLook up, take courage and go forward,\nAll needed grace He’ll send!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2057%20%20%20They%20%20That%20Wait%20%20Upon%20the%20Lord.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "58",
      "title": "The Last Mile Of The Way",
      "titleWithHymnNumber": "58 The Last Mile Of The Way",
      "chorus": "",
      "verses": [
          "\nIf I walk in the pathway of duty,\nIf I work till the close of the day;\nI shall see the great King in His beauty\nWhen I've gone the last mile of the way.",
          "If for Christ I proclaim the glad story,\nIf I seek for His sheep gone astray;\nI am sure He will show me His glory\nWhen I've gone the last mile of the way.",
          "Here the dearest of ties we must sever,\nTears of sorrow are seen everyday;\nBut no sickness, no sighing forever\nWhen I've gone the last mile of the way.",
          "And if here I have earnestly striven\nAnd have tried all His will to obey;\n'Twill enhance all the rapture of heaven\nWhen I've gone the last mile of the way."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2058%20%20%20The%20Last%20Mile%20of%20the%20Way.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "59",
      "title": "Little Is Much When God Is In It",
      "titleWithHymnNumber": "59 Little Is Much When God Is In It",
      "chorus": "Little is much when God is in it!\nLabor not for wealth or fame.\nThere’s a crown—and you can win it,\nIf you go in Jesus’ Name.",
      "verses": [
          "In the harvest field now ripened\nThere’s a work for all to do;\nHark! the voice of God is calling\nTo the harvest calling you.",
          "In the mad rush of the broad way,\nIn the hurry and the strife,\nTell of Jesus’ love and mercy,\nGive to them the Word of Life.",
          "Does the place you’re called to labor\nSeem too small and little known?\nIt is great if God is in it,\nAnd He’ll not forget His own.",
          "Are you laid aside from service,\nBody worn from toil and care?\nYou can still be in the battle,\nIn the sacred place of prayer.",
          "When the conflict here is ended\nAnd our race on earth is run,\nHe will say, if we are faithful,\n“Welcome home, My child—well done!\"\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2059%20%20%20Little%20Is%20Much%20When%20God%20%20Is%20In%20%20It.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "60",
      "title": "Where Could I Go",
      "titleWithHymnNumber": "60 Where Could I Go",
      "chorus": "Where could I go, O where could I go,\nSeeking a refuge for my soul?\nNeeding a friend to save me in the end,\nWhere could I go but to the Lord?",
      "verses": [
          "Living below in this old sinful world,\nHardly a comfort can afford;\nStriving alone to face temptations sore,\nWhere could I go but to the Lord?",
          "Neighbours are kind, I love them every one,\nWe get along in sweet accord;\nBut when my soul needs manna from above,\nWhere could I go but to the Lord?",
          "Life here is grand with friends I love so dear,\nComfort I get from God's own word;\nYet when I face the chilling hand of death,\nWhere could I go but to the Lord?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2060%20%20%20Where%20Could%20I%20Go.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "61",
      "title": "Lord Speak To Me",
      "titleWithHymnNumber": "61 Lord Speak To Me",
      "chorus": "",
      "verses": [
          "\nLord, speak to me, that I may speak\nIn living echoes of Thy tone;\nAs Thou hast sought, so let me seek\nThy erring children lost and lone.",
          "Oh, strengthen me, that while I stand\nFirm on the Rock, and strong in Thee,\nI may stretch out a loving hand\nTo wrestlers with the troubled sea.",
          "Oh, teach me, Lord, that I may teach\nThe precious things Thou dost impart;\nAnd wing my words, that they may reach\nThe hidden depths of many a heart.",
          "Oh, give Thine own sweet rest to me,\nThat I may speak with soothing power\nA word in season, as from Thee,\nTo weary ones in needful hour.",
          "Oh, fill me with Thy fulness, Lord,\nUntil my very heart o'erflow\nIn kindling thought, and glowing word,\nThy love to tell, Thy praise to show.",
          "Oh, use me Lord, use even me,\nJust as Thou wilt and how, and where;\nUntil Thy blessed face I see,\nThy rest, Thy joy, Thy glory share."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2061%20%20%20Lord%20Speak%20to%20Me%20That%20I%20May%20Speak.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "62",
      "title": "Go Labor On",
      "titleWithHymnNumber": "62 Go Labor On",
      "chorus": "",
      "verses": [
          "Go, labour on, spend, and be spent,\nThy joy to do the Father's will;\nIt is the way the Master went,\nShould not the servant tread it still?",
          "Men die in darkness at your side,\nWithout a hope to cheer the tomb:\nTake up the torch, and wave it wide,\nThe torch that lights time's thickest gloom.",
          "Toil on, and in thy toil rejoice,\nFor toil comes rest, for exile home;\nSoon shalt thou hear the Bridegroom's voice,\nThe midnight peal, \"Behold, I come!'"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2062%20%20%20Go%20Labour%20On.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "63",
      "title": "Will There Be Any Stars",
      "titleWithHymnNumber": "63 Will There Be Any Stars",
      "chorus": "Will there be any stars, any stars in my crown\nWhen at evening the sun goeth down?\nWhen I wake with the blest in the mansions of rest\nWill there be any stars in my crown?",
      "verses": [
          "I am thinking today of that beautiful land\nI shall reach when the sun goeth down;\nWhen through wonderful grace by my Savior I stand,\nWill there be any stars in my crown?",
          "In the strength of the Lord let me labor and pray,\nLet me watch as a winner of souls,\nThat bright stars may be mine in the glorious day,\nWhen His praise like the sea billow rolls.",
          "O what joy it will be when His face I behold,\nLiving gems at his feet to lay down!\nIt would sweeten my bliss in the city of gold,\nShould there be any stars in my crown.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2063%20%20%20Will%20There%20Be%20Any%20Stars.mp3",
      "category": "christian service & reward"
  },
  {
      "number": "64",
      "title": "The Old Rugged Cross",
      "titleWithHymnNumber": "64 The Old Rugged Cross",
      "chorus": "So I'll cherish the old rugged cross,\nTill my trophies at last I lay down;\nI will cling to the old rugged cross,\nAnd exchange some day for a crown.",
      "verses": [
          "\nOn a hill far away stood the old rugged cross\nThe emblem of suffering and shame,\nAnd I love that old cross where the dearest and best\nFor a world of lost sinners was slain.",
          "O that old rugged cross, so despised by the world,\nHas a wondrous attraction for me,\nFor the dear Lamb of God left His glory above,\nTo bear it to dark Calvary.",
          "In the old rugged cross, stained with blood so divine,\nA wondrous beauty I see;\nFor 'twas on that old cross Jesus suffered and died,\nTo pardon and sanctify me.",
          "To the old rugged cross I will ever be true,\nIts shame and reproach gladly bear;\nThen He'll call me some day to my home far away,\nWhere His glory for ever I'll share."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2064%20%20%20The%20Old%20Rugged%20%20Cross.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "65",
      "title": "Oh How I Love Jeus",
      "titleWithHymnNumber": "65 Oh How I Love Jeus",
      "chorus": "O how I love Jesus!\nAnd O how I love Jesus!\nO how I love Jesus\nBecause He first loved me!",
      "verses": [
          "I am thinking today of that beautiful land\nI shall reach when the sun goeth down;\nWhen through wonderful grace by my Savior I stand,\nWill there be any stars in my crown?",
          "Will there be any stars, any stars in my crown\nWhen at evening the sun goeth down?\nWhen I wake with the blest in the mansions of rest\nWill there be any stars in my crown?",
          "In the strength of the Lord let me labor and pray,\nLet me watch as a winner of souls,\nThat bright stars may be mine in the glorious day,\nWhen His praise like the sea billow rolls.",
          "O what joy it will be when His face I behold,\nLiving gems at his feet to lay down!\nIt would sweeten my bliss in the city of gold,\nShould there be any stars in my crown.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2065%20%20%20O%20How%20I%20Love%20Jesus.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "66",
      "title": "Jesus Is The Sweetest",
      "titleWithHymnNumber": "66 Jesus Is The Sweetest",
      "chorus": "Jesus is the sweetest name I know,\nAnd He’s just the same as His lovely Name,\nAnd that’s the reason why I love Him so;\nOh, Jesus is the sweetest name I know.",
      "verses": [
          "There have been names that I have loved to hear,\nBut never has there been a name so dear\nTo this heart of mine, as the Name divine,\nThe precious, precious Name of Jesus.",
          "There is no name in earth or Heav’n above,\nThat we should give such honor and such love\nAs the blessèd Name, let us all acclaim,\nThat wondrous, glorious Name of Jesus.",
          "And some day I shall see Him face to face\nTo thank and praise Him for His wondrous grace,\nWhich He gave to me, when He made me free,\nThe blessèd Son of God called Jesus.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2066%20%20%20Jesus%20Is%20The%20Sweetest%20Name%20I%20Know.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "67",
      "title": "My Jesus I Love Thee",
      "titleWithHymnNumber": "67 My Jesus I Love Thee",
      "chorus": "",
      "verses": [
          "My Jesus I love Thee, I know Thou art mine;\nFor Thee all the follies of sin I resign;\nMy gracious Redeemer, my Saviour art Thou;\nIf ever I loved Thee, my Jesus 'tis now.",
          "I'll love Thee in life, I will love Thee in death,\nAnd praise Thee as long as Thou lendest me breath;\nAnd say when the death-dew lies cold on my brow,\n\"If ever I loved Thee, my Jesus, 'tis now.\"",
          "In mansions of glory and endless delight,\nI'll ever adore Thee in heaven so bright;\nI'll sing with the glittering crown on my brow,\n\"If ever I loved Thee, my Jesus 'tis now.\""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2067%20%20%20My%20Jesus%20I%20Love%20Thee.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "68",
      "title": "Like A Shepherd Lead Us",
      "titleWithHymnNumber": "68 Like A Shepherd Lead Us",
      "chorus": "",
      "verses": [
          "Saviour, like a Shepherd, lead us,\nMuch we need Thy tender care;\nIn Thy pleasant pastures feed us,\nFor our use Thy folds prepare;\nBlessed Jesus, Blessed Jesus,\nThou hast bought us Thine we are;\nBlessed Jesus, Blessed Jesus,\nThou hast bought us Thine we are.",
          "Thou has promised to receive us,\nPoor and sinful though we be;\nThou hast mercy to relieve us,\nGrace to cleanse and pow'r to free;\nBlessed Jesus, Blessed Jesus,\nEarly let us turn to Thee;\nBlessed Jesus, Blessed Jesus,\nEarly let us turn to Thee.",
          "Early let us seek Thy favour,\nEarly let us do Thy will;\nBlessed Lord and only Saviour\nWith Thy love our bosoms fill;\nBlessed Jesus, Blessed Jesus,\nThou hast loved us, love us still;\nBlessed Jesus, Blessed Jesus,\nThou hast loved us, love us still.",
          "Like a Shepherd come receive us\nWhen Thou comest in the air;\nIn Thine arms wilt Thou now take us\nTo that joyful union there;\nBlessed Jesus, Blessed Jesus,\nIn that land beyond compare;\nBlessed Jesus, Blessed Jesus,\nIn that land beyond compare."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2068%20%20%20Saviour%20Like%20A%20Shepherd%20Lead%20us.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "69",
      "title": "Christ Be Beside Me",
      "titleWithHymnNumber": "69 Christ Be Beside Me",
      "chorus": "",
      "verses": [
          "Christ beside me,\nChrist before me,\nChrist behind me,\nKing of my heart;\nChrist within me,\nChrist below me,\nChrist above me\nnever to part.",
          "Chist be in all hearts thinking about me,\nChrist be in all tongues telling of me\nChrist be the vision in eyes that see me \nin ears that hear me \nChist ever be",
          "Christ beside me,\nChrist before me,\nChrist behind me,\nKing of my heart;\nChrist within me,\nChrist below me,\nChrist above me\nnever to part.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2069%20%20%20Christ%20Be%20%20Beside%20Me.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "70",
      "title": "Have You Any Room For Jesus",
      "titleWithHymnNumber": "70 Have You Any Room For Jesus",
      "chorus": "Room for Jesus, King of Glory!\nHasten now, His Word obey.\nSwing the heart’s door widely open;\nBid Him enter while you may.",
      "verses": [
          "Have you any room for Jesus,\nHe who bore your load of sin?\nAs He knocks and asks admission,\nSinner, will you let Him in?",
          "Room for pleasure, room for business;\nBut for Christ, the Crucified,\nNot a place that He can enter,\nIn the heart for which He died? ",
          "Have you any room for Jesus, \nSoon will pass God's day of grace \nSoon thy heart left cold and silent\nAnd thy saviour pleading cease",
          "Room and time now give to Jesus;\nSoon will pass God’s day of grace -\nSoon your heart left cold and silent,\nAnd your Savior’s pleading cease.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2070%20%20%20Have%20You%20Any%20Room%20For%20Jesus.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "71",
      "title": "I Want To See Jesus Dont You",
      "titleWithHymnNumber": "71 I Want To See Jesus Dont You",
      "chorus": "I want to see Jesus, don’t you?\nMy Savior so faithful and true;\nWhen I reach the strand of that love-bright land,\nO I want to see Jesus, don’t you?",
      "verses": [
          "There is One loved me so that for me He died,\nHe’s my dear, precious Savior so true;\nOn the cross for my sins He was crucified:\nI want to see Jesus, don’t you?",
          "When I’m weary and faint He is always near,\nWith His joy He my strength doth renew;\nAnd He comforts my heart, speaking words of cheer:\nI want to see Jesus, don’t you? ",
          "Holy angels keep watch o’er me through the night,\nAnd each morning He guards me anew;\nIn the smile of His love doth my soul delight:\nI want to see Jesus, don’t you?",
          "He is fairer than lily or rose to me,\nAnd His blessings fall soft as the dew;\nO my heart, how it longs His dear face to see:\nI want to see Jesus, don’t you? ",
          "There’s a place for my soul that He doth prepare,\nAnd its beauty by faith I can view;\nFirst of all, when I enter that mansion fair,\nI want to see Jesus, don’t you?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2071%20%20%20I%20Want%20To%20See%20Jesus%20Don't%20You.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "72",
      "title": "The Solid Rock",
      "titleWithHymnNumber": "72 The Solid Rock",
      "chorus": "On Christ, the Solid Rock, I stand;\nAll other ground is sinking sand,\nAll other ground is sinking sand.",
      "verses": [
          "My hope is built on nothing less\nThan Jesus' blood and righteousness;\nI dare not trust the sweetest frame,\nBut wholly lean on Jesus' name.",
          "When darkness seems to hide His face,\nI rest on His unchanging grace;\nIn every high and stormy gale,\nMy anchor holds within the vale.",
          "His oath, His covenant, His blood,\nSupport me in the whelming flood;\nWhen all around my soul gives way,\nHe then is all my hope and stay.",
          "When He shall come with trumpet sound,\nOh, may I then in Him be found\nDressed in His righteousness alone,\nFaultless to stand before the throne."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2072%20%20%20The%20Solid%20Rock.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "73",
      "title": "Jesus Only Is Our Message",
      "titleWithHymnNumber": "73 Jesus Only Is Our Message",
      "chorus": "Jesus only, Jesus ever,\nJesus all in all we sing;\nSaviour, Sanctifier, Healer,\nBaptizer and coming King.",
      "verses": [
          "\nJesus only is our Message,\nJesus all our theme shall be;\nWe will lift up Jesus ever\nJesus Only will we see.",
          "Jesus only is our Saviour,\nAll our guilt He bore away;\nAll our righteousness He gives us,\nAll our strength from day to day.",
          "Jesus is our Sanctifier,\nCleansing us from self and sin;\nAnd with all His Spirit's fulness,\nFilling all our hearts within.",
          "Jesus only is our Healer,\nAll our sicknesses He bare;\nAnd His risen life and fulness,\nAll His members still may share.",
          "Jesus only is our Power,\nHis the gift of Pentecost;\nJesus, breathe Thy power upon us,\nFill us with the Holy Ghost.",
          "And for Jesus we are waiting,\nListening for the trumpet's sound;\nThen it will be us and Jesus,\nLiving ever with our God."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2073%20%20%20Jesus%20Only%20Is%20Our%20Message.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "74",
      "title": "The Heart That Was Broken For Me",
      "titleWithHymnNumber": "74 The Heart That Was Broken For Me",
      "chorus": "They crown’d Him with thorns,\nHe was beaten with stripes,\nHe was smitten and nailed to the tree;\nBut the pain in His heart was the hardest to bear,\nThe heart that was broken for me.",
      "verses": [
          "There came from the skies in the days long ago,\nThe Lord with a message of love;\nThe world knew Him not; He was treated with scorn—\nThis wonderful gift from above.",
          "He came to His own—to the ones that He lov’d—\nThe sheep that had wander’d astray;\nThey heard not His voice; but the friend of mankind\nWas hated and driven away.",
          "The birds have their nest, and the foxes have holes,\nBut He had no place for His head;\nA pallet of stone on the cold mountainside,\nWas all that He had for His bed.",
          "I cannot reject such a Saviour as He;\nDishonor and wound Him again;\nI'll go to His feet and repent of my sin,\nBe willing to suffer the pain.",
          "I'll take up my cross, I will walk by His side,\nFor the pathway of duty I see;\nI will follow my Lord and abide in His heart,\nThe heart that was broken for me."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2074%20%20%20The%20Heart%20That%20Was%20Broken%20For%20Me.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "75",
      "title": "The Church's One Foundation",
      "titleWithHymnNumber": "75 The Church's One Foundation",
      "chorus": "",
      "verses": [
          "The church's one foundation\nis Jesus Christ, her Lord;\nshe is his new creation\nby water and the Word:\nfrom heav'n he came and sought her\nto be his holy bride;\nwith his own blood he bought her,\nand for her life he died.",
          "Though with a scornful wonder\nmen see her sore oppressed,\nby schisms rent asunder,\nby heresies distressed,\nyet saints their watch are keeping,\ntheir cry goes up, \"How long?\"\nAnd soon the night of weeping\nshall be the morn of song.",
          "Mid toil and tribulation,\nand tumult of her war,\nshe waits the consummation\nof peace forevermore;\ntill with the vision glorious\nher longing eyes are blest,\nand the great church victorious\nshall be the church at rest.",
          "Yet she on earth hath union\nwith the God the Three in One,\nand mystic sweet communion\nwith those whose rest is won:\nO happy ones and holy!\nLord, give us grace that we,\nlike them, the meek and lowly,\non high may dwell with thee."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2075%20%20%20The%20Church's%20One%20Foundation.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "76",
      "title": "In Times Like These",
      "titleWithHymnNumber": "76 In Times Like These",
      "chorus": "This Rock is Jesus, Yes He's the One,\nThis Rock is Jesus, the only One;\nBe very sure, be very sure,\nYour anchor holds and grips the Solid Rock!",
      "verses": [
          "In times like these you need a Savior,\nIn times like these you need an anchor;\nBe very sure, be very sure,\nYour anchor holds and grips the Solid Rock!",
          "In times like these you need the Bible,\nIn times like these, O be not idle;\nBe very sure, be very sure,\nYour anchor holds and grips the Solid Rock!",
          "In times like these I have a Savior,\nIn times like these I have an anchor;\nI'm very sure, I'm very sure\nMy anchor holds and grips the Solid Rock!",
          "This Rock is Jesus, Yes He's the One,\nThis Rock is Jesus, the only One;\nBe very sure, be very sure,\nYour anchor holds and grips the Solid Rock!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2076%20%20%20In%20Times%20Like%20These.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "77",
      "title": "I Have Decided To Follow Jesus",
      "titleWithHymnNumber": "77 I Have Decided To Follow Jesus",
      "chorus": "",
      "verses": [
          "I have decided to follow Jesus;\nI have decided to follow Jesus;\nI have decided to follow Jesus;\nno turning back, no turning back.",
          "The world behind me, the cross before me;\nthe world behind me, the cross before me,\nthe world behind me, the cross before me;\nno turning back, no turning back."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2077%20%20I%20Have%20Decided%20To%20Follow%20%20Jesus.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "78",
      "title": "Faith Of Our Fathers",
      "titleWithHymnNumber": "78 Faith Of Our Fathers",
      "chorus": "Faith of our fathers, holy faith!\nWe will be true to Thee till death.",
      "verses": [
          "\nFaith of our fathers living still\nIn spite of dungeon, fire and sword,\nO how our hearts beat high with joy\nWhene'er we hear that glorious word.",
          "Faith of our fathers, we will strive\nTo win all nations unto Thee,\nAnd through the truth that comes from God\nMankind shall then be truly free.",
          "Faith of our fathers, we will love\nBoth friend and foe in all our strife,\nAnd preach Thee, too, as love knows how\nBy kindly words and virtuous life."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2078%20%20Faith%20of%20Our%20Fathers.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "79",
      "title": "The Way Of The Cross",
      "titleWithHymnNumber": "79 The Way Of The Cross",
      "chorus": "The way of the cross leads home,\nThe way of the cross leads home\nIt is sweet to know, as I onward go,\nThe way of the cross leads home.",
      "verses": [
          "I must needs go home by the way of the cross,\nThere's no other way but this; \nI shall ne'er get sight of the Gates of Light, \nIf the way of the cross I miss.",
          "I must needs go on in the blood-sprinkled way,\nThe path that the Saviour trod, \nIf I ever climb to the heights sublime, \nWhere the soul is at home with God.",
          "Then I bid farewell to the way of the world, \nTo walk in it never more; \nFor my Lord says \"Come\" and seek my home,\nWhere He waits at the open door."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2079%20%20The%20Way%20of%20the%20Cross%20Leads%20Home.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "80",
      "title": "At The Cross",
      "titleWithHymnNumber": "80 At The Cross",
      "chorus": "At the cross, at the cross where i first saw the light\nand the burden of my heart rolled away\nit was there by faith ireciived my sight\nand now i am happy all the day!",
      "verses": [
          "Alas! and did my Savior bleed, \nand did my Sovereign die!\nWould he devote that sacred head \nfor sinners such as I? ",
          "Was it for crimes that I have done, \nhe groaned upon the tree? \nAmazing pity! Grace unknown! \nAnd love beyond degree! ",
          "Well might the sun in darkness hide, \nand shut its glories in, \nwhen God, the mighty maker, died \nfor his own creature's sin. ",
          "Thus might I hide my blushing face \nwhile his dear cross appears; \ndissolve my heart in thankfulness, \nand melt mine eyes to tears. ",
          "But drops of tears can ne'er repay \nthe debt of love I owe. \nHere, Lord, I give myself away; \n'tis all that I can do. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2080%20%20At%20The%20Cross.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "81",
      "title": "Lead Me To Calvary",
      "titleWithHymnNumber": "81 Lead Me To Calvary",
      "chorus": "Lest I forget Gethsemane,\nLest I forget thine agony,\nLest I forget thy love for me,\nLead me to Calvary.",
      "verses": [
          "King of my life I crown thee now\nThine shall the glory be;\nLest I forget thy thorn-crowned brow,\nLead me to Calvary.",
          "Let me like Mary, thru the gloom,\nCome with a gift to thee;\nShow to me now the empty tomb \nLead me to Calvary.",
          "May I be willing, Lord, to bear\nDaily my cross for thee;\nEven thy cup of grief to share\nThou hast borne all for me."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2081%20%20Lead%20Me%20To%20Calvary.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "82",
      "title": "When I Survey The Wondrous Cross",
      "titleWithHymnNumber": "82 When I Survey The Wondrous Cross",
      "chorus": "",
      "verses": [
          "When I survey the wondrous cross\nOn which the Prince of glory died\nMy richest gain I count but loss,\nAnd pour contempt on all my pride.",
          "See, from His head, His hands, His feet,\nSorrow and love flow mingled down;\nDid e'er such love and sorrow met,\nOr thorns compose so rich a crown?",
          "Were the whole realm of nature mine,\nThat were an offering far too small;\nLove so amazing, so divine,\nDemands my soul, my life, my all."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2082%20%20When%20I%20Survey%20The%20Wondrous%20Cross.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "83",
      "title": "Thy Word Have I Hid In My Heart",
      "titleWithHymnNumber": "83 Thy Word Have I Hid In My Heart",
      "chorus": "Thy Word have I hid in my heart…\nThat I might not sin against thee…\nThat I might not sin, that I might not sin,\nThy Word have I hid in my heart.",
      "verses": [
          "\nThy Word is a lamp to my feet;\nA light to my path always;\nTo guide and to save me from sin,\nAnd show me the heavenly way.",
          "For ever o Lord is Thy Word\nEstablished and fixed on high;\nThy faithfulness to all men\nAbideth for ever nigh.",
          "At morning, at noon, and at night\nI ever will give Thee praise;\nFor Thou art my portion, O Lord,\nAnd shall be though all my days!",
          "Through Him whom Thy Word hath foretold,\nThe Saviour and Morning Star,\nSalvation and peace have been brought\nTo those who have strayed afar."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2083%20%20Thy%20Word%20Have%20I%20Hid%20%20In%20My%20Heart.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "84",
      "title": "Deeper Deeper In The Love Of Jesus",
      "titleWithHymnNumber": "84 Deeper Deeper In The Love Of Jesus",
      "chorus": "O deep...er yet, I pray,...\nAnd high...er everyday...\nAnd wis...er, blessed Lord,\nIn Thy precious, holy word.",
      "verses": [
          "Deeper, deeper, in the love of Jesus,\nDaily let me go;\nHigher, higher in the school of wisdom,\nMore of grace to know.",
          "Deeper, deeper! blessed Holy Spirit,\nTake me deeper still,\nTill my life is wholly lost in Jesus\nAnd His perfect will.",
          "Deeper, deeper! though it cost hard trials,\nDeeper let me go!\nRooted in the holy love of Jesus,\nLet me fruitful grow.",
          "Deeper, higher everyday in Jesus,\nTill all conflict past,\nFinds me conqu'ror, and in His own image\nPerfected at last."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2084%20%20Deeper%20%20Deeper%20In%20The%20love%20of%20Jesus.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "85",
      "title": "Give Of Your Best To The Master",
      "titleWithHymnNumber": "85 Give Of Your Best To The Master",
      "chorus": "Give of your best to the Master;\nGive of the strength of your youth.\nClad in salvation’s full armor,\nJoin in the battle for truth.",
      "verses": [
          "\nGive of the strength of your youth.\nThrow your soul’s fresh, glowing ardor\nInto the battle for truth.\nJesus has set the example,\nDauntless was He, young and brave.\nGive Him your loyal devotion;\nGive Him the best that you have.",
          "Give of your best to the Master;\nGive Him first place in your heart.\nGive Him first place in your service;\nConsecrate every part.\nGive, and to you will be given;\nGod His beloved Son gave.\nGratefully seeking to serve Him,\nGive Him the best that you have.",
          "Give of your best to the Master;\nNaught else is worthy His love.\nHe gave Himself for your ransom,\nGave up His glory above.\nLaid down His life without murmur,\nYou from sin’s ruin to save.\nGive Him your heart’s adoration;\nGive Him the best that you have.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2085%20%20Give%20of%20Your%20Best%20To%20The%20Master.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "86",
      "title": "Nothing Between",
      "titleWithHymnNumber": "86 Nothing Between",
      "chorus": "",
      "verses": [
          "Nothing between my soul and my Savior,\nNaught of this world’s delusive dream;\nI have renounced all sinful pleasure;\nJesus is mine, there’s nothing between.",
          "Nothing between, like pride or station;\nSelf or friends shall not intervene;\nThough it may cost me much tribulation,\nI am resolved, there’s nothing between.",
          "Nothing between, e’en many hard trials,\nThough the whole world against me convene;\nWatching with prayer and much self denial,\nI’ll triumph at last, there’s nothing between."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2086%20%20Nothing%20Between.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "87",
      "title": "Take My Life",
      "titleWithHymnNumber": "87 Take My Life",
      "chorus": "",
      "verses": [
          "Take my life and let it be\nConsecrated, Lord, to Thee;\nTake my moments and my days,\nLet them flow in ceaseless praise.",
          "Take my voice, and let me sing\nAlways, only, for my King;\nTake my lips, and let them be\nFilled with messages from Thee.",
          "Take my silver and my gold;\nNot a mite would I withhold;\nTake my intellect and use\nEvery power as Thou shalt choose.",
          "Take my will, and make it thine,\nIt shall be no longer mine;\nTake my heart, it is Thine own,\nIt shall be Thy royal throne.",
          "Take my love; my Lord, I pour\nAt Thy feet its treasure-store;\nTake myself, and I will be\nEver, only, all for Thee."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2087%20%20Take%20My%20Life.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "88",
      "title": "Wherever He Leads I'll Go",
      "titleWithHymnNumber": "88 Wherever He Leads I'll Go",
      "chorus": "Wherever He leads I'll go,\nWherever He leads I'll go,\nI'll follow my Christ, Who loves me so,\nWherever He leads I'll go.",
      "verses": [
          "\"Take up thy cross and follow me,\"\nI heard my Master say;\n\"I gave My life to ransom thee,\nSurrender your all today.\"",
          "He drew me closer to His side,\nI sought His will to know,\nAnd in that will I now abide,\nWherever He leads I'll go.",
          "It may be through the shadows dim,\nOr o'er the stormy sea,\nI take my cross and follow Him,\nWherever He leadeth me.",
          "My heart, my life, my all I bring\nTo Christ Who loves me so;\nHe is my Master, Lord, and King,\nWherever He leads I'll go."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2088%20%20Wherever%20He%20Leads%20I'll%20Go.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "89",
      "title": "O Jesus I Have Promised",
      "titleWithHymnNumber": "89 O Jesus I Have Promised",
      "chorus": "",
      "verses": [
          "O Jesus, I have promised\nTo serve Thee to the end;\nBe Thou for ever near me,\nMy Master and my Friend;\nI shall not fear the battle\nIf Thou art by my side,\nNor wander from the pathway\nIf Thou wilt be my Guide.",
          "O let me hear Thee speaking\nIn accents clear and still,\nAbove the storms of passion,\nThe murmurs of self-will;\nO speak to reassure me,\nTo hasten or control;\nO speak, and make me listen,\nThou Guardian of my soul.",
          "O Jesus, Thou hast promised,\nTo all who follow Thee,\nThat where Thou art in glory\nThere shall Thy servant be;\nAnd, Jesus, I have promised\nTo serve Thee to the end,\nO give me grace to follow\nMy Master and my Friend.",
          "O let me see Thy footmarks,\nAnd in them plant mine own;\nMy hope to follow duly\nIs in Thy strength alone;\nO guide me, call me, draw me,\nUphold me to the end;\nAnd then in heav'n receive me,\nMy Saviour and my Friend!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2089%20%20O%20Jesus%20I%20Have%20Promised.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "90",
      "title": "Oh Love That Will Not Let Me Go",
      "titleWithHymnNumber": "90 Oh Love That Will Not Let Me Go",
      "chorus": "",
      "verses": [
          "O Love that wilt not let me go,\nI rest my weary soul in thee;\nI give thee back the life I owe,\nThat in thine ocean depths its flow\nMay richer, fuller be.",
          "O Joy that seekest me through pain,\nI cannot close my heart to thee;\nI trace the rainbow through the rain,\nAnd feel the promise is not vain,\nThat morn shall tearless be.",
          "O Cross that liftest up my head,\nI dare not ask to fly from thee;\nI lay in dust life’s glory dead,\nAnd from the ground there blossoms red\nLife that shall endless be."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2090%20%20O%20love%20that%20Wilt%20Not%20Let%20Me%20Go.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "91",
      "title": "Where He Leads Me",
      "titleWithHymnNumber": "91 Where He Leads Me",
      "chorus": "Where He leads me I will follow,\nWhere He leads me I will follow,\nWhere He leads me I will follow;\nI’ll go with Him, with Him, all the way.",
      "verses": [
          "I can hear my Savior calling,\nI can hear my Savior calling,\nI can hear my Savior calling,\n“Take thy cross and follow, follow Me.\"",
          "I’ll go with Him through the garden,\nI’ll go with Him through the garden,\nI’ll go with Him through the garden,\nI’ll go with Him, with Him all the way.",
          "I’ll go with Him through the judgment,\nI’ll go with Him through the judgment,\nI’ll go with Him through the judgment,\nI’ll go with Him, with Him all the way.",
          "He will give me grace and glory,\nHe will give me grace and glory,\nHe will give me grace and glory,\nAnd go with me, with me all the way.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2091%20%20Where%20He%20Leads%20Me.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "92",
      "title": "I Surrender All",
      "titleWithHymnNumber": "92 I Surrender All",
      "chorus": "I surrender all,\nI surrender all;\nAll to Thee, my blessed Saviour,\nI surrender all.",
      "verses": [
          "All to Jesus I surrender,\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live.",
          "All to Jesus I surrender,\nHumbly at His feet I bow;\nWorldly pleasures all forsaken,\nTake me, Jesus, take me now.",
          "All to Jesus I surrender,\nLord, I give myself to Thee;\nFill me with Thy love and power,\nLet Thy blessing fall on me.",
          "All to Jesus I surrender,\nNow I feel the sacred flame;\nO the joy of full salvation!\nGlory, glory to His name!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2092%20%20I%20Surrender%20All.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "93",
      "title": "More Love To Thee",
      "titleWithHymnNumber": "93 More Love To Thee",
      "chorus": "",
      "verses": [
          "More love to Thee, O Christ, more love to Thee!\nHear Thou the prayer I make on bended knee.\nThis is my earnest plea: More love, O Christ, to Thee;\nMore love to Thee, more love to Thee!",
          "Let sorrow do its work, come grief or pain;\nSweet are Thy messengers, sweet their refrain,\nWhen they can sing with me: More love, O Christ, to Thee;\nMore love to Thee, more love to Thee!",
          "Then shall my latest breath whisper Thy praise;\nThis be the parting cry my heart shall raise;\nThis still its prayer shall be: More love, O Christ to Thee;\nMore love to Thee, more love to Thee!\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2093%20%20More%20Love%20To%20Thee.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "94",
      "title": "Draw Me Nearer Blessed Jesus",
      "titleWithHymnNumber": "94 Draw Me Nearer Blessed Jesus",
      "chorus": "Draw me nearer, nearer blessèd Lord,\nTo the cross where Thou hast died.\nDraw me nearer, nearer, nearer blessèd Lord,\nTo Thy precious, bleeding side.",
      "verses": [
          "I am Thine, O Lord, I have heard Thy voice,\nAnd it told Thy love to me;\nBut I long to rise in the arms of faith\nAnd be closer drawn to Thee.",
          "Consecrate me now to Thy service, Lord,\nBy the power of grace divine;\nLet my soul look up with a steadfast hope,\nAnd my will be lost in Thine.",
          "O the pure delight of a single hour\nThat before Thy throne I spend,\nWhen I kneel in prayer, and with Thee, my God\nI commune as friend with friend!",
          "There are depths of love that I cannot know\nTill I cross the narrow sea;\nThere are heights of joy that I may not reach\nTill I rest in peace with Thee.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2094%20%20Draw%20Me%20Nearer%20Blessed%20Lord.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "95",
      "title": "Come Saviour Jesus From Above",
      "titleWithHymnNumber": "95 Come Saviour Jesus From Above",
      "chorus": "",
      "verses": [
          "COME, Saviour, Jesus, from above!\nAssist me with thy heavenly grace;\nEmpty my heart of earthly love,\nAnd for thyself prepare the place.",
          "While in this region here below,\nNo other good will I pursue;\nI'll bid this world of noise and show,\nWith all its glittering snares, adieu!",
          "That path with humble speed I'll seek,\nIn which my Saviour's footsteps shine;\nNor will I hear, nor will I speak,\nOf any other love but thine.",
          "Henceforth may no profane delight\nDivide this consecrated soul;\nPossess it thou, who hast the right,\nAs Lord and Master of the whole.",
          "Wealth, honour, pleasure, and what else\nThis short-enduring world can give,\nTempt as ye will, my soul repels,\nTo Christ alone resolved to live.",
          "Thee I can love, and thee alone,\nWith pure delight and inward bliss:\nTo know thou tak'st me for thine own,\nO what a happiness is this!",
          "Nothing on earth do I desire,\nBut thy pure love within my breast;\nThis, only this, will I require,\nAnd freely give up all the rest."
      ],
      "sound": "",
      "category": "commitment & consecration"
  },
  {
      "number": "96",
      "title": "Peace Be Still",
      "titleWithHymnNumber": "96 Peace Be Still",
      "chorus": "\"The winds and the waves shall obey My will,\nPeace, be still!\"\nWhether the wrath of the storm-tossed sea,\nOr demons, or men, or whatever it be,\nNo water can swallow the ship where lies\nThe Master of ocean and earth and skies;\nThey all shall sweetly obey My will;\nPeace, be still! Peace, be still!\nThey all shall sweetly obey My will:\nPeace, peace, be still!",
      "verses": [
          "Master, the tempest is raging!\nThe billows are tossing high!\nThe sky is o'ershadowed with blackness,\nNo shelter or help is nigh:\n\"Careth not Thou not that we perish?\"\nHow canst Thou lie asleep,\nWhen each moment so madly is threatening\nA grave in the angry deep?",
          "Master, with anguish of spirit\nI bow in my grief today;\nThe depths of my sad heart are troubled;\nO waken and save, I pray!\nTorrents of sin and of anguish\nSweep o'er my sinking soul!\nAnd I perish! I perish, dear Master;\nO hasten, and take control!",
          "Master, the terror is over,\nThe elements sweetly rest;\nEarth's sun in the calm lake is mirrored,\nAnd heaven's within my breast,\nLinger, O blessed Redeemer,\nLeave me alone no more;\nAnd with joy I shall make the blest harbour,\nAnd rest on the blissful shore."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2096%20%20Peace%20Be%20Still.mp3",
      "category": "conflict & victory"
  },
  {
      "number": "97",
      "title": "Oft In Danger Oft In Woe",
      "titleWithHymnNumber": "97 Oft In Danger Oft In Woe",
      "chorus": "",
      "verses": [
          "Oft in danger, oft in woe,\nonward, Christians, onward go;\nbear the toil, maintain the strife,\nstrengthened with the bread of life",
          "Let not sorrow dim your eye;\nsoon shall every tear be dry:\nlet not fears your course impede;\ngreat your strength, if great your need.",
          "Let your drooping hearts be glad;\nmarch in heavenly armour clad;\nfight, nor think the battle long:\nsoon shall victory wake your song.",
          "Onward then in battle move;\nmore than conquerors ye shall prove:\nthough opposed by many a foe,\nChristian soldiers, onward go."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2097%20%20Oft%20In%20Danger%20Oft%20in%20Woe.mp3",
      "category": "conflict & victory"
  },
  {
      "number": "98",
      "title": "The Song Of The Solider",
      "titleWithHymnNumber": "98 The Song Of The Solider",
      "chorus": "Pour it forth a mighty anthem,\nPour it forth a mighty anthem,\nLike the thunders of the sea;\nThrough the blood of Christ our ransom,\nMore than conquerors are we,\nMore than conquerors are we,\nMore than conquerors are we;\nThrough the blood of Christ our ransom,\nMore than conquerors are we.",
      "verses": [
          "Rise, ye children of salvation,\nAll who cleave to Christ the Head;\nWake, arise, O mighty nation,\nEre the foe on Zion tread.",
          "Saints, and heroes long before us\nFirmly on this ground have stood;\nSee their banners waving o’er us,\nConquerors though Jesus’ blood.",
          "Deathless, we are all unfearing,\nLife laid up with Christ in God;\nIn the morn of His appearing\nFloweth forth, a glory flood. ",
          "Soon we all shall stand before Him,\nSee and know our glorious Lord;\nSoon in joy and light adore Him,\nEach receiving his reward. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%2098%20%20The%20Song%20of%20the%20Soldier.mp3",
      "category": "conflict & victory"
  },
  {
      "number": "99",
      "title": "There Is Victory Within My Soul",
      "titleWithHymnNumber": "99 There Is Victory Within My Soul",
      "chorus": "Victory, Victory, Vict’ry in my soul,\nI have glorious victory\nSince Jesus took control,\nVictory, Victory, sweeping like a flood,\nI have glorious victory thro’ Jesus’ blood.",
      "verses": [
          "There is vict’ry within my soul\nFor the Spirit with me abides,\nLet the waves of temptation roll,\nJesus keeps me whate’er betides.",
          "Tho’ the conflict be fierce and long,\nTho’ the tempter my heart assail,\nIn my weakness yet I am strong,\nFor with Jesus I’ll e’er prevail.",
          "I have victory over sin,\nI have victory o’er grave;\nEven death now has lost its sting,\nHalleluyah I know I’m saved."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20099%20%20There%20is%20Victory%20Within%20My%20Soul.mp3",
      "category": "conflict & victory"
  },
  {
      "number": "100",
      "title": "Christ Our Mighty Captain",
      "titleWithHymnNumber": "100 Christ Our Mighty Captain",
      "chorus": "Forward! forward! 'tis the Lord's command.\nForward! forward to the promised land;\nForward! forward! let the chorus ring;\nWe are sure to win with Christ our King!",
      "verses": [
          "Christ, our mighty Captain, leads against the foe;\nWe will never falter when He bids us go;\nTho' His righteous purpose we may never know,\nYet we'll follow all the way.",
          "Satan's fearful onslaught cannot make us yield\nwhile we trust in Christ our Buckler and our shield\npressing ever on the Spirit's sword we weild,\nAnd follow all the way",
          "Let our glorious banner ever be unfurled;\nFrom its mighty stronghold evil shall be hurled;\nChrist, our mighty Captain, overcomes the world,\nAnd we follow all the way. ",
          "Fierce the battle rages, but 'twill not be long,\nThen triumphant shall we join the blessed throng,\nJoyfully uniting in the victor's song,\nIf we follow all the way. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20100%20%20Christ%20Our%20Mighty%20Captain.mp3",
      "category": "conflict & victory"
  },
  {
      "number": "101",
      "title": "My Father Knows",
      "titleWithHymnNumber": "101 My Father Knows",
      "chorus": "",
      "verses": [
          "I know my heav’nly Father knows\nThe storms that would my way oppose;\nBut He can drive the clouds away,\nAnd turn the darkness into day.",
          "I know my heav’nly Father knows\nHow frail I am to meet my foes;\nBut He my cause will e’er defend,\nUphold and keep me to the end.",
          "I know my heav’nly Father knows\nThe hour my journey here will close;\nAnd may that hour, O faithful Guide,\nFind me safe sheltered by Thy side."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20101%20%20My%20Father%20Knows.mp3",
      "category": "conflict & victory"
  },
  {
      "number": "102",
      "title": "The Healer",
      "titleWithHymnNumber": "102 The Healer",
      "chorus": "HE WAS WOUNDED FOR OUR TRANSGRESSIONS, \nHE WAS BRUISED FOR OUR INIQUITIES, \nSURELY HE BORE OUR SORROWS,\nAND BY HIS STRIPES WE ARE HEALED",
      "verses": [
          "ON THE CROSS CRUCIFIED, IN GREAT SORROW HE DIED; \nTHE GIVER OF LIFE WAS HE, \nYET MY LORD WAS DESPISED AND REJECTED OF MEN, \nTHIS JESUS OF CALVARY",
          "PRICE FOR HEALING WAS PAID,\nAS THOSE CRUEL STRIPES WERE MADE,\nWITHIN PILATE'S JUDGEMENT HALL, \nNOW HIS SUFF'RING AFFORD PERFECT HEALING FOR ALL, \nTHIS WONDERFUL HEALER'S MINE",
          "CAME THE LEPER TO CHRIST, SAYING \"SURELY I KNOW, \nTHAT THOU, LORD CANST MAKE ME WHOLE\", \nWHEN HIS GREAT FAITH WAS SEEN\nJESUS SAID, \"YES I WILL\",\nAND TOUCHED HIM AND MADE HIM CLEAN.",
          "HE HAS HEALED MY SICK SOUL, \nMADE ME EV'RY WHIT WHOLE,\nAND HE'LL DO THE SAME FOR YOU, \nHE'S THE SAME YESTERDAY AND TODAY AND FOR AYE, \nTHIS HEALER OF MEN TODAY.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20102%20%20The%20Healer.mp3",
      "category": "divine healing"
  },
  {
      "number": "103",
      "title": "He Healed Them All",
      "titleWithHymnNumber": "103 He Healed Them All",
      "chorus": "",
      "verses": [
          "\nHe healed them all – the blind, the lame, the palsied,\nThe sick in body and the weak in mind,\nWhoever came, no matter how afflicted,\nWere sure a sovereign remedy to find.",
          "And is our Lord, the kind, the good, the tender,\nLess loving now than in those days of old?\nOr is it that our faith is growing feeble,\nAnd Christian energy is waxing cold?",
          "Why do we not with equal expectation,\nNow bring our sick ones to the Lord in prayer\nRight through the throng of unbelieving scruples\nUp to His very side and leave them there?",
          "He never health refused in bygone ages,\nNor feared to take the “chastisement” away;\nThen why not ask it now, instead of praying\nFor “patience” to endure from day to day?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20103%20%20He%20Healed%20Them%20%20All.mp3",
      "category": "divine healing"
  },
  {
      "number": "104",
      "title": "Tell Somebody",
      "titleWithHymnNumber": "104 Tell Somebody",
      "chorus": "Tell somebody, tell somebody\nAll of the wonderful love you know;\nTell somebody, tell somebody,\nChrist and His goodness show.",
      "verses": [
          "1 Are you trusting the love of the Savior divine,\nDoes His smile make the darkest day bright?\nAre you laying on Him all the burdens that fret,\nDoes the cross that He gave you seem light?",
          "Are you resting today ‘neath the sheltering Rock,\nHave you given your Lord full control?\nAre you glad in the love that redeemed you from sin,\nHas He spoken His peace to your soul? ",
          "Is there victory now where there once was defeat,\nBlessed triumph through Jesus alone?\nTell somebody today of a Master and Friend,\nAnd His wonderful mercy make known."
      ],
      "sound": "",
      "category": "evangelism"
  },
  {
      "number": "105",
      "title": "I'll Tell The World",
      "titleWithHymnNumber": "105 I'll Tell The World",
      "chorus": "",
      "verses": [
          "\nI'll tell the world that I'm a Christian –\nI'm not ashamed His name to bear;\nI'll tell the world that I'm a Christian,\nI'll take Him with me anywhere;\nI'll tell the world how Jesus saved me,\nAnd how He gave me a life brand-new;\nAnd I know that if you trust Him,\nThat all He gave me He'll give to you;\nI'll tell the world that He's my Saviour,\nNo other one could love me so;\nMy life my all is His for ever,\nAnd where He leads me I will go."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20105%20%20I'll%20Tell%20The%20World.mp3",
      "category": "evangelism"
  },
  {
      "number": "106",
      "title": "Tell The Whole Wide",
      "titleWithHymnNumber": "106 Tell The Whole Wide",
      "chorus": "Tell the world, the whole wide world,\nBear the news from shore to shore;\nTell the whole wide world of Jesus,\nPraise His name forevermore!",
      "verses": [
          "1. Tell the whole wide world of Jesus,\nBear the news from shore to shore;\nTelling sinners of the Savior,\nLet the light spread more and more.",
          "Send abroad the Gospel heralds,\nLet them take the blessèd light;\nInto every land of darkness,\nPiercing through the shades of night.",
          "Yes, we’ll send the joyful message,\nOver mountain, over wave;\nTelling everywhere of Jesus,\nAnd His mighty power to save.",
          "While we pray for other nations,\nSend them help with willing hand,\nLet us not forget the home fields,\nJesus for our native land! "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20106%20%20Tell%20The%20Whole%20Wide%20World.mp3",
      "category": "evangelism"
  },
  {
      "number": "107",
      "title": "Send The Gospel Light",
      "titleWithHymnNumber": "107 Send The Gospel Light",
      "chorus": "Go and tell them, go and tell them, \nJesus died for sinful men. \nGo and tell them, go and tell them, \nHe is coming, He is coming, \nHe is coming back again.",
      "verses": [
          "Send the gospel of salvation, \nto a world of dying men; \ntell it out to every nation, \n'til the Lord shall come again. ",
          "'This the church's great commission, \n'This the Master's last command; \nChrist has died for every creature, \ntell it out in every land. ",
          "Christ is gathering out a people \nto His name from every race; \nhaste to give the invitation \nere shall end the day of grace. ",
          "Give the gospel as a witness \nto a world of sinful men; \ntill the Bride shall be completed, \nand the Lord shall come again\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20107%20%20Go%20%20And%20Tell%20Them.mp3",
      "category": "evangelism"
  },
  {
      "number": "108",
      "title": "Must I Go And Empty Handed",
      "titleWithHymnNumber": "108 Must I Go And Empty Handed",
      "chorus": "\"Must I go, and empty-handed?\"\nMust I meet my Saviour so?\nNot one soul with which to greet Him,\nMust I empty-handed go?",
      "verses": [
          "\"Must I go and empty-handed,\"\nThus my dear Redeemer meet?\nNot one day of service give Him,\nLay no trophy at His feet?",
          "Not at death I shrink nor falter,\nFor my Saviour saves me now;\nBut to meet Him empty-handed,\nThought of that now clouds my brow.",
          "O the years in sinning wasted,\nCould I but recall them now;\nI would give them to my Saviour,\nTo His will I'd gladly bow.",
          "O ye saints, arouse, be earnest,\nUp and work while yet 'tis day;\nEre the night of death o'ertake thee,\nStrive for souls while still you may."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20108%20%20Must%20I%20Go%20And%20Empty-Handed.mp3",
      "category": "evangelism"
  },
  {
      "number": "109",
      "title": "To The Work",
      "titleWithHymnNumber": "109 To The Work",
      "chorus": "Toiling on, toiling on,\nToiling on, toiling on;\nLet us hope, let us watch,\nAnd labor till the Master comes.",
      "verses": [
          "To the work! to the work! we are servants of God,\nLet us follow the path that our Master has trod;\nWith the balm of His counsel our strength to renew,\nLet us do with our might what our hands find to do.",
          "To the work! to the work! let the hungry be fed,\nTo the fountain of life let the weary be led;\nIn the cross and its banner our glory shall be,\nWhile we herald the tidings, \"Salvation is free!\"",
          "To the work! to the work! there is labor for all,\nFor the kingdom of darkness and error shall fall;\nAnd the name of Jehovah exalted shall be\nIn the loud swelling chorus, \"Salvation is free!\" ",
          "To the work! to the work! in the strength of the Lord,\nAnd a robe and a crown shall our labor reward\nWhen the home of the faithful our dwelling shall be\nAnd we shout with the ransomed, \"Salvation is free!\"\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20109%20%20To%20The%20Work.mp3",
      "category": "evangelism"
  },
  {
      "number": "110",
      "title": "Till The Whole World Knows",
      "titleWithHymnNumber": "110 Till The Whole World Knows",
      "chorus": "Till the whole world knows,\nTill the whole world knows,\nI will shout and sing of Christ my King,\nTill the whole world knows.",
      "verses": [
          "I will tell to all that God is love;\nFor the world has never known\nThe great compassion of His heart\nFor the wayward and the lone.",
          "I'll tell of mercy's boundless tide,\nLike the waters of the sea,\nThat covers every sin of man;\n'Tis salvation full and free.",
          "I'll tell of grace that keeps the soul,\nOf abiding peace within,\nOf faith that overcomes the world,\nWith its tumult and its din.",
          "Eternal glory is the goal\nThat awaits the sons of light;\nEternal darkness, black as death,\nFor the children of the night."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20110%20%20Till%20The%20Whole%20World%20Knows.mp3",
      "category": "evangelism"
  },
  {
      "number": "111",
      "title": "Rescue The Perishing",
      "titleWithHymnNumber": "111 Rescue The Perishing",
      "chorus": "Rescue the perishing, \ncare for the dying,\nJesus is merciful,\n Jesus will save.",
      "verses": [
          "Rescue the perishing, care for the dying,\nSnatch them in pity from sin and the grave;\nWeep o'er the erring one, lift up the fallen,\nTell them of Jesus the mighty to save.",
          "Though they are slighting Him, still He is waiting,\nWaiting the penitent child to receive;\nPlead with them earnestly, plead with them gently,\nHe will forgive if they only believe.",
          "Down in the human heart, crushed by the tempter,\nFeelings lie buried that grace can restore;\nTouched by a loving heart, wakened by kindness,\nChords that are broken will vibrate once more.",
          "Rescue the perishing, duty demands it,\nStrength for thy labour the Lord will provide;\nBack to the narrow way patiently win them,\nTell the poor wanderer a Saviour has died."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20111%20%20Rescue%20The%20Perishing.mp3",
      "category": "evangelism"
  },
  {
      "number": "112",
      "title": "Win Them One By One",
      "titleWithHymnNumber": "112 Win Them One By One",
      "chorus": "So you bring the one next to you,\nAnd I’ll bring the one next to me;\nIn all kinds of weather, we’ll all work together,\nAnd see what can be done;",
      "verses": [
          "1 If to Christ our only king\nMen redeemed we strive to bring,\nJust one way this may be done—\nWe must win them one by one.",
          "If you’ll bring the one next to you,\nAnd I bring the one next to me,\nIn no time at all we’ll have them all,\nSo win them, win them, one by one.",
          "Side by side we stand each day,\nSaved are we, but lost are they;\nThey will come if we but dare\nSpeak a word backed up by prayer.",
          "Only cowards dare refuse,\nDare this gift of God misuse;\nEre some friend goes to his grave,\nSpeak a word his soul to save.",
          "Not for hope of great reward\nTurn men’s hearts unto the Lord;\nJust to see a saved man smile\nMakes the effort well worth while."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20112%20%20Win%20Them%20One%20By%20One.mp3",
      "category": "evangelism"
  },
  {
      "number": "113",
      "title": "Go And Tell The Story",
      "titleWithHymnNumber": "113 Go And Tell The Story",
      "chorus": "Go and tell the story, tell it fer and wide,\nHow the Lord of glory for the sinner died;\nAnd the soul that hears it, and in faith believes,\nStraightway he the cleansing from the Lord receives.",
      "verses": [
          "Go and tell the story to thy friends to-day,\nHow the Lord of glory met thee on thy way;\nHow He cleansed thy spirit from the stain of sin,\nDriving out the foe who reigned thy heart within.",
          "Go and tell the story, of His pow'r to save,\nOf the sinful \"Legion\" sunk beneath the wave;\nTell of His compassion, of His love so true,\nOf the wondrous things the Lord hath done for you.",
          "Go and tell the story, how He reigns above,\nWinning men to glory thro' His dying love;\nHow He waits to crown them kings forevermore,\nIn the home awaiting, on the other shore.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20113%20%20Go%20%20And%20Tell%20The%20Story.mp3",
      "category": "evangelism"
  },
  {
      "number": "114",
      "title": "Brighten The Corner Where You Are",
      "titleWithHymnNumber": "114 Brighten The Corner Where You Are",
      "chorus": "Brighten the corner where you are!\nBrighten the corner where you are!\nSomeone far from harbour you may guide across the bar,\nBrighten the corner where you are.",
      "verses": [
          "\nDo not wait until some deed of greatness you may do,\nDo not wait to shed your light afar;\nTo the many duties ever near you now be true,\nBrighten the corner where you are.",
          "Just above are clouded skies that you may help to clear,\nLet not narrow self your way debar;\nThough into one heart alone may fall your song of cheer,\nBrighten the corner where you are.",
          "Here for all your talent you will surely find a need,\nHere reflect the Bright and Morning star;\nEven from your humble hand the bread of life may feed,\nBrighten the corner where you are."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20114%20%20Brighten%20The%20Corner%20Where%20You%20Are.mp3",
      "category": "evangelism"
  },
  {
      "number": "115",
      "title": "Lift Him Up",
      "titleWithHymnNumber": "115 Lift Him Up",
      "chorus": "Lift Him up…Lift Him up …\nStill He speaks from eternity:\n\"And I, if I be lifted up from the earth,\nWill draw all men unto Me.\"",
      "verses": [
          "How to reach the masses, men of every birth,\nFor an answer Jesus gave the key:\n\"And I, if I be lifted up from the earth,\nWill draw all men unto Me.\"",
          "Oh! The world is hungry for the living bread,\nLift the Saviour up for them to see;\nTrust Him, and do not doubt the words that He said,\n\"I'll draw all men unto Me.\"",
          "Don't exalt the preacher, don't exalt the pew,\nPreach the Gospel simple, full and free;\nProve Him and you will find that promise is true,\n\"I'll draw all men unto me.\"",
          "Lift Him up by living as a Christian ought,\nLet the world in you the Saviour see;\nThen men will gladly follow Him who once taught,\n\"I'll draw all men unto me.\""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20115%20%20Lift%20Him%20Up.mp3",
      "category": "evangelism"
  },
  {
      "number": "116",
      "title": "Carry Your Bible",
      "titleWithHymnNumber": "116 Carry Your Bible",
      "chorus": "Take it wherever you go,\nTake it wherever you go,\nGod’s message of love,\nSent down from above,\nO take it wherever you go.",
      "verses": [
          "Carry your Bible with you,\nLet all its blessings outflow;\nIt will supply you each moment,\nTake it wherever you go.",
          "Carry the word of pardon,\nSweeter each day it will grow;\nSomewhere some heart will be waiting,\nTake it wherever you go.",
          "Carry the wondrous story,\nTell it to hearts plunged in woe;\nThis word of gracious redemption,\nTake it wherever you go. ",
          "Carry the word of promise;\nSinners unpardoned may know\nGod’s path from sin unto safety,\nTake it wherever you go."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20116%20Carry%20Your%20Bible.mp3",
      "category": "evangelism"
  },
  {
      "number": "117",
      "title": "Show A Little Bit Of Love And Kindness",
      "titleWithHymnNumber": "117 Show A Little Bit Of Love And Kindness",
      "chorus": "Show a little bit of love and kindness,\nNever go along with hatred's blindness,\nTake a little time to reach for joy and wear a happy face;\nSing a little bit when the days are dreary,\nGive a little help to a friend who's weary \nThat's the way to make the world a happy place.",
      "verses": [
          "Sing a song, spread some cheer,\nThere are sad and lonely people ev'rywhere;\nBe a friend, show some love,\nIt will lift them from the dungeons of despair.",
          "Offer help, bring some hope,\nTo the fainting and discouraged on life's road;\nSee a need, lend a hand,\nThere are many who are crushed beneath their load.",
          "Be a light, show the way,\nBe a light within the night for those astray;\nSpeak a word, loving word,\nThat will bring them back to walk the narrow way."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20117%20Show%20A%20Little%20Bit%20of%20Love%20and%20Kindness.mp3",
      "category": "evangelism"
  },
  {
      "number": "118",
      "title": "I Love To Tell The Story",
      "titleWithHymnNumber": "118 I Love To Tell The Story",
      "chorus": "I love to tell the story! \n'twill be my theme in glory\nto tell the old, old story \nof Jesus and his love.",
      "verses": [
          "I love to tell the story \nof unseen things above,\nof Jesus and his glory, \nof Jesus and his love.\nI love to tell the story \nbecause I know 'tis true;\nit satisfies my longings \nas nothing else could do.",
          "I love to tell the story; \nmore wonderful it seems\nthan all the golden fancies \nof all our golden dreams.\nI love to tell the story, \nit did so much for me;\nand that is just the reason \nI tell it now to thee.",
          "I love to tell the story; \n'tis pleasant to repeat\nwhat seems, each time I tell it, \nmore wonderfully sweet.\nI love to tell the story, \nfor some have never heard\nthe message of salvation \nfrom God's own holy Word. ",
          "I love to tell the story, \nfor those who know it best\nseem hungering and thirsting \nto hear it like the rest.\nAnd when in scenes of glory \nI sing the new, new song,\n'twill be the old, old story\nthat I have loved so long."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20118%20%20I%20Love%20To%20Tell%20The%20Story%20.mp3",
      "category": "evangelism"
  },
  {
      "number": "119",
      "title": "Do Something For Others",
      "titleWithHymnNumber": "119 Do Something For Others",
      "chorus": "Do something for others,\nSomething for others today!\nDuty demands it,\nAnd Jesus commands it!\nDo something for others today",
      "verses": [
          "Many a soul in the battle of life\nTrembles with fear at the din and the strife,\nBearing alone, amid trial and care,\nBurdens and sorrows God bids you to share.",
          "Many in doubt or in fear of the way,\nMutely appeal for your guidance today;\nOn your demeanor the choice may depend—\nAre you concerned for the stranger or friend? ",
          "Many, disheartened by cruel deceit,\nBroken and worn by the pangs of defeat,\nDoubting, despairingly, helplessly stand,\nWaiting, perhaps, for your strengthening hand.",
          "Many are turning away from the right\nInto the maze of the shadows of night;\nGo to them, speak to them, over them pray,\nHelp them, support them—do something today. [Refrain]"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20119%20%20Do%20Something%20For%20Others.mp3",
      "category": "evangelism"
  },
  {
      "number": "120",
      "title": "Speak A Word For Jesus",
      "titleWithHymnNumber": "120 Speak A Word For Jesus",
      "chorus": "Speak just a word,\nEver to Him be true;\nSpeak just a word,\nTell what He's doing for you!",
      "verses": [
          "Speak just a word for Jesus,\nTell how he died for you;\nOften repeat the story,\nWonderful, glad, and true!",
          "Speak just a word for Jesus,\nTell how He helps you live;\nTell of the strength and comfort\nWhich He will freely give! ",
          "Speak just a word for Jesus,\nDo not for others wait;\nGladly proclaim the message\nSoon it will be too late! ",
          "Speak just a word for Jesus,\nWhy should you doubt or fear?\nSurely His love will bless it;\nSome one will gladly hear. ",
          "Speak just a word for Jesus,\nTell of His love for men!\nSome one distressed may listen,\nWilling to trust Him then. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20120%20%20Speak%20%20A%20Word.mp3",
      "category": "evangelism"
  },
  {
      "number": "121",
      "title": "Somebody Else Needs Him Too",
      "titleWithHymnNumber": "121 Somebody Else Needs Him Too",
      "chorus": "Somebody somewhere perhaps at you side\nsomewhere is waiting for you Say  that \nfor all jesus suffered and died; they needs him \nthey need him too",
      "verses": [
          "If you've found Jesus \nthe friend  that you\nneed if He is loving and true,\nif you  have found him a saviour indeed,\nSomebody else needs him too",
          "If you are happy, and praise fills your heart,\nTrust him to carry you through \nif He His Spirit and love can\nimpart Somebody else needs Him too..",
          "If you have comfort in being God's child\nIf he is faithful to you Think when you see those whom\nsin has defiled Somebody else needs Him, tooo..",
          "When the lord gives you His love and grace \nsomethings he give you to do;\nyou have the gospel  with others to share\nsomebody needs him too..."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20121%20%20Somebody%20Else%20Needs%20Him,Too.mp3",
      "category": "evangelism"
  },
  {
      "number": "122",
      "title": "Somebody Needs Your Love",
      "titleWithHymnNumber": "122 Somebody Needs Your Love",
      "chorus": "Somebody needs your love,\nSomebody needs your love,\nSomeone in sadness,\nYearning for gladness,\nSomebody needs your love.",
      "verses": [
          "Out in the darkness of sorrow and sin,\nSomebody needs your love;\nLed by the Master, that soul you may win,\nSomebody needs your love.",
          "Many are helpless, and wait for your call,\nSomebody needs your love;\nShow them that Jesus is all and in all,\nSomebody needs your love.",
          "Some one is tempted to turn from the right,\nSomebody needs your love;\nLonging for courage and strength for the fight,\nSomebody needs your love.",
          "Some are down-hearted, in sorrow they roam,\nSomebody needs your love;\nMany are sighing for heaven and home,\nSomebody needs your love."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20122%20%20Somebody%20Needs%20Your%20Love.mp3",
      "category": "evangelism"
  },
  {
      "number": "123",
      "title": "No One Like My Saviour",
      "titleWithHymnNumber": "123 No One Like My Saviour",
      "chorus": "No one, no one like my precious Saviour,\nNo one, no, such a friend can be;\nNo one, no one like my precious Saviour,\nGlory, glory, Jesus cares for me.",
      "verses": [
          "There’s no one like my Saviour,\nNo friend can be like Him;\nMy never failing sunshine\nWhen earthly lights grow dim;\nWhen summer flow'rs are blooming,\nThe brightness of my joy;\nO, may His happy service\nMy heart and life employ!",
          "There’s no one like my Saviour;\nIn seasons of distress\nHe draws me closer to Him,\nTo comfort and to bless;\nHe gives me in temptation\nThe strength of His right arm;\nHis angels camp around me\nTo keep me from all harm. ",
          "There’s no one like my Saviour;\nHe pardons all my sin,\nAnd gives his Holy Spirit\nA springing well within;\nHe leads me out to service\nWith gentle touch and mild;\nO wonder of all wonders\nThat I should be His child!",
          "There’s no one like my Saviour,\nCome now, and find it true;\nHe gave His life a ransom,\nHis blood was shed for you;\nThen when we reach the City\nOf everlasting light,\nWe’ll sing with saints and angels,\nAll honour, pow'r and might."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20123%20%20No%20One%20Like%20My%20Saviour.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "124",
      "title": "Christ Receiveth Sinful Men",
      "titleWithHymnNumber": "124 Christ Receiveth Sinful Men",
      "chorus": "Sing it o'er.. and o'er again...\nChrist receiv..eth sinful men...\nMake the mes..sages clear and plain\nChrist receiv...eth sinful me",
      "verses": [
          "Sinners Jesus will receive: \nSound this word of grace to all \nWho the heav'nly pathway leave, \nAll who linger, all who fall.",
          "Now my heart condemns me not, \nPure before the law I stand; \nHe who cleansed me from all spot \nSatisfied its last demand.",
          "Christ receiveth sinful men, \nEven me with all my sin; \nPurged from ev’ry spot and stain, \nHeav’n with Him I enter in."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20124%20%20Christ%20Receiveth%20Sinful%20Men.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "125",
      "title": "Wondeful Grace Of Jesus",
      "titleWithHymnNumber": "125 Wondeful Grace Of Jesus",
      "chorus": "Wonderful the matchless Grace of Jesus,\nthe matchless Grace of Jesus,\nDeeper than the mighty rolling sea;\nthe rolling sea;\nWonderful Grace, all sufficient for me, for even\nHigher than the mountain, sparkling like a fountain,\nAll sufficient Grace for even me.\nBroader than the scope of my transgressions,\nsing it!\nGreater far than all my sin and shame\nmy sin and shame,\nO magnify the precious name of Jesus,\nPRAISE HIS NAME!",
      "verses": [
          "Wonderful Grace of Jesus, greater than all my sin;\nHow shall my tongue describe it,\nWhere shall its praise begin?\nTaking away my burden, setting my spirit free;\nO the Wonderful Grace of Jesus reaches me!",
          "Wonderful Grace of Jesus, reaching to all the lost;\nBy it I have been pardoned, saved to the uttermost.\nChains have been torn asunder, giving me liberty;\nO the Wonderful Grace of Jesus, reaches me!",
          "Wonderful Grace of Jesus, reaching the most defiled;\nBy its transforming power,\nMaking me God's dear child,\nPurchasing peace and Heaven, for all eternity;\nAnd the Wonderful Grace of Jesus, reaches me!\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20125%20%20Wonderful%20Grace%20of%20Jesus.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "126",
      "title": "Great God Of Wonders",
      "titleWithHymnNumber": "126 Great God Of Wonders",
      "chorus": "Who is a pardoning God like Thee?\nor Who has grace so rich and free?",
      "verses": [
          "Great God of wonders!\nAll Thy ways Are matchless,\nGodlike and divine;\nBut the fair glories of Thy grace\nMore Godlike and unrivalled shine.",
          "In wonder lost, in trembling joy,\nWe take the pardon of our God:\nPardon for crimes of deepest dye,\nA pardon bought with Jesus' blood.",
          "Pardon - from an offended God!\nPardon - for sins of deepest dye!\nPardon - bestowed throughh Jesus' blood!\nPardon - that brings the rebel nigh!",
          "O may this strange,\nthis matchless grace,\nThis Godlike miracle of love,\nFill the wide earth with grateful praise,\nAnd all the angelic chorus above!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20126%20%20Great%20God%20of%20Wonders.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "127",
      "title": "Rock Of Ages Cleft For Me",
      "titleWithHymnNumber": "127 Rock Of Ages Cleft For Me",
      "chorus": "",
      "verses": [
          "\nRock of ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy wounded side which flowed,\nBe of sin the double cure,\nCleanse me from its guilt and pow'r.",
          "Nothing in my hands I bring,\nSimply to Thy cross I cling;\nNaked come to Thee for dress,\nHelpless look to Thee for grace,\nFoul I to the fountain fly,\nCleanse me, Saviour, or I die.",
          "While I draw this fleeting breath,\nWhen mine eyes are closed in death;\nWhile I soar through tracks unknown, \nSee Thee on Thy judgement throne,\nRock of ages, cleft for me,\nLet me hide myself in Thee."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20127%20%20Rock%20of%20Ages%20Cleft%20For%20Me.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "128",
      "title": "Vicory In Jesus",
      "titleWithHymnNumber": "128 Vicory In Jesus",
      "chorus": "O victory in Jesus,\nMy Savior, forever.\nHe sought me and bought me\nWith His redeeming blood;\nHe loved me ere I knew Him\nAnd all my love is due Him,\nHe plunged me to victory,\nBeneath the cleansing flood.",
      "verses": [
          "I heard an old, old story,\nHow a Savior came from glory,\nHow He gave His life on Calvary\nTo save a wretch like me;\nI heard about His groaning,\nOf His precious blood's atoning,\nThen I repented of my sins\nAnd won the victory. ",
          "I heard about His healing,\nOf His cleansing pow'r revealing.\nHow He made the lame to walk again\nAnd caused the blind to see;\nAnd then I cried, \"Dear Jesus,\nCome and heal my broken spirit,\"\nAnd somehow Jesus came and bro't\nTo me the victory. ",
          "I heard about a mansion\nHe has built for me in glory.\nAnd I heard about the streets of gold\nBeyond the crystal sea;\nAbout the angels singing,\nAnd the old redemption story,\nAnd some sweet day I'll sing up there\nThe song of victory. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20128%20%20Victory%20In%20%20Jesus.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "129",
      "title": "Grace Greater Than Our Sin",
      "titleWithHymnNumber": "129 Grace Greater Than Our Sin",
      "chorus": "Grace, grace, God's grace,\nGrace that will pardon and cleanse within;\nGrace, grace, God's grace,\nGrace that is greater than all our sin.",
      "verses": [
          "\nMarvellous grace of our loving Lord,\nGrace that exceeds our sin and our guilt,\nYonder on Calvary's mount outpoured,\nThere where the blood of the Lamb was split.",
          "Sin and despair like the sea waves cold,\nThreaten the soul with infinite loss;\nGrace that is greater, yes, grace untold,\nPoints to the Refuge, the Mighty Cross.",
          "Dark is the stain that we cannot hide,\nWhat can avail to wash it away?\nLook! there is flowing a crimson tide;\nWhiter than snow you may be today.",
          "Marvellous, infinite, matchless grace,\nFreely bestowed on all who believe;\nYou that are longing to see His face,\nWill you this moment His grace receive?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20129%20%20Grace%20Greater%20Than%20Our%20Sin.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "130",
      "title": "Just As I Am Without One Plea",
      "titleWithHymnNumber": "130 Just As I Am Without One Plea",
      "chorus": "",
      "verses": [
          "Just as I am, without one plea,\nBut that Thy blood was shed for me,\nAnd that Thou bid'st me come to Thee,\nO Lamb of God, I come! I come!",
          "Just as I am, though tossed about\nWith many a conflict, many a doubt;\nFightings within, and fears without,\nO Lamb of God, I come, I come!",
          "Just as I am, poor, wretched, blind;\nSight, riches, healing of the mind;\nYes, all I need, in Thee to find,\nO Lamb of God, I come, I come!",
          "Just as I am, Thou wilt receive,\nWilt welcome, pardon, cleanse, relieve;\nBecause Thy promise I believe,\nO Lamb of God, I come, I come!",
          "Just as I am, Thy love unknown\nHas broken every barrier down;\nNow, to be Thine, yea, Thine alone,\nO Lamb of God, I come, I come!",
          "Just as I am, of that free love\nThe breadth, length, depth and height to prove,\nHere for a season, then above,\nO Lamb of God, I come, I come.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20130%20%20Just%20As%20I%20Am%20Without%20%20One%20Plea.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "131",
      "title": "In Tenderness He Sought Me",
      "titleWithHymnNumber": "131 In Tenderness He Sought Me",
      "chorus": "Oh, the love that sought me!\nOh, the blood that bought me!\nOh, the grace that brought me to the fold,\nWondrous grace that brought me to the fold!",
      "verses": [
          "In tenderness He sought me,\nWeary and sick with sin,\nAnd on His shoulders brought me\nBack to His fold again;\nWhile angels in His presence sang,\nUntil the courts of heaven rang.",
          "He washed the bleeding sin-wounds,\nAnd poured in oil and wine;\nHe whispered to assure me,\n\"I've found thee, thou art Mine,\"\nI never heard a sweeter voice,\nIt made my aching heart rejoice!",
          "He pointed to the nail-prints,\nFor me His blood was shed,\nA mocking crown so thorny,\nWas placed upon His head:\nI wondered what He saw in me,\nTo suffer such deep agony.",
          "I'm sitting in His presence,\nThe sunshine of His face,\nWhile with adoring wonder\nHis blessing I retrace;\nIt seems as if eternal days\nAre far too short to sound His praise.",
          "So while the hours are passing,\nAll is now perfect rest;\nI'm waiting for the morning,\nThe brightest and the best,\nWhen He will call us to His side,\nTo be with Him, His spotless bride."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20131%20%20In%20Tenderness%20He%20Sought%20Me.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "132",
      "title": "Running Over",
      "titleWithHymnNumber": "132 Running Over",
      "chorus": "Running over, running over,\nMy cups filled and running over\nSince the lord saved me\nI'm as happy as can be\nMy cup's filled and running over",
      "verses": [
          "Since the Saviour came to this heart of mine\nMy cups filled and running over\nFilling my poor soul with his joy divine\nMy cup's filled and running over.",
          "With my Lord so Dear\nI have naught to fear\nMy cup's filled and running over\nThough my way be drear\nHe is ever near\nMy cup's filled and running over",
          "Even though I walk\nThrough the death's darksome vale\nMy cup's filled and running over\nChrist my lord shall be\nMy comfort still\nMy cup's filled and running over",
          "Sinner seek the Lord\nTrust his precious word\nWhile the Angels round you hover\nHeaven's Bells will ring\nAnd you then will sing\nMy Cup's filled and running over\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20132%20%20Running%20Over.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "133",
      "title": "Out Of My Bondage",
      "titleWithHymnNumber": "133 Out Of My Bondage",
      "chorus": "",
      "verses": [
          "Out of my bondage, sorrow and night,\nJesus, I come, Jesus, I come;\nInto Thy freedom, gladness and light,\nJesus, I come to Thee.\nOut of my sickness into Thy health,\nOut of my want and into Thy wealth,\nOut of my sin and into Thyself,\nJesus, I come to Thee.",
          "Out of unrest and arrogant pride,\nJesus, I come, Jesus, I come;\nInto Thy blessed will to abide,\nJesus, I come to Thee.\nOut of myself to dwell in Thy love,\nOut of despair into raptures above,\nUpward for aye on wings like a dove,\nJesus, I come to Thee.",
          "Out of the fear and dread of the tomb,\nJesus I come, Jesus I come;\nInto the joy and light of Thy home,\nJesus, I come to Thee.\nOut of the depths of ruin untold,\nInto the peace of Thy sheltering fold,\nEver Thy glorious face to behold,\nJesus, I come to Thee."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20133%20%20Out%20of%20My%20Bondage.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "134",
      "title": "And Can It Be That I Should Gain",
      "titleWithHymnNumber": "134 And Can It Be That I Should Gain",
      "chorus": "",
      "verses": [
          "\nAnd can it be, that I should gain\nAn interest in the Saviour's blood?\nDied He for me, who caused His pain?\nFor me, who Him to death pursued?\nAmazing love! how can it be\nThat Thou, my God, shouldst die for me?",
          "He left His Father's throne above\n(So free, so infinite His Grace!)\nEmptied Himself of all but love,\nAnd bled for Adam's helpless race;\n'Tis mercy all, immense and free,\nFor, O my God, it found out me!",
          "Long my imprisoned spirit lay\nFast bound in sin and nature's night;\nThine eye diffused a quickening ray,\nI woke, the dungeon flamed with light;\nMy chains fell off, my heart was free,\nI rose, went forth, and followed Thee.",
          "No condemnation now I dread,\nJesus, and all in Him, is mine;\nAlive in Him, my living Head,\nAnd clothed in righteousness divine,\nBold I approach the eternal throne,\nAnd claim the crown, through Christ my own."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20134%20%20And%20Can%20It%20be%20that%20I%20should%20Gain.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "135",
      "title": "Tell Me The Old Old Story",
      "titleWithHymnNumber": "135 Tell Me The Old Old Story",
      "chorus": "Tell me the story simply, \nAs to a little child;\nFor I am weak and weary, \nAnd helpless and defiled.",
      "verses": [
          "Tell me the old, old story \nOf unseen things above,\nOf Jesus and His glory, \nOf Jesus and His love.",
          "Tell me the story slowly, \nThat I may take it in -\nThat wonderful redemption,\nGod's remedy for sin.\nTell me the story often,\nFor I forget so soon;\nThe early dew of morning\nHas passed away at noon.",
          "Tell me the story softly,\nWith the earnest tones and grave\nRemember I'm the sinner\nWhom God came to save\nTell me the story always \nIf you would really be,\nIn any timw of trouble\nA comforter to me",
          "Tell me the same old story\nWhen you have cause to fear\nThat this world's empty glory \nIs costing me too dear.\nYes, and when that world's glory \nis dawning on my soul Tell me the old story\nChrist Jesus make thee whole"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20135%20%20Tell%20Me%20The%20Old%20Old%20Story.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "136",
      "title": "At Calvary",
      "titleWithHymnNumber": "136 At Calvary",
      "chorus": "Mercy there was great and grace was free,\nPardon there was multiplied to me;\nThere my burden'd soul found liberty,\nAt Calvary.",
      "verses": [
          "Years I spent in vanity and pride,\nCaring not my Lord was crucified,\nKnowing not it was for me He died\nOn Calvary.",
          "By God's word at last my sin I learned,\nThen I trembl'd at the law I'd spurn'd,\nTill my guilty soul, imploring turned\nTo Calvary.",
          "Now I've given to Jesus everything;\nNow I gladly own Him as my King;\nNow my raptured soul can only sing\nOf Calvary.",
          "Oh, the love that drew salvation's plan!\nOh, the grace that brought it down to man!\nOh the mighty gulf that God did span\nAt Calvary!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20136%20%20At%20Calvary.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "137",
      "title": "How Beautiful Heaven Must Be",
      "titleWithHymnNumber": "137 How Beautiful Heaven Must Be",
      "chorus": "How beautiful heaven must be,\nSweet home of the happy and free;\nFair haven of rest for the weary,\nHow beautiful heaven must be.",
      "verses": [
          "We read of a place that’s called heaven,\nIt’s made for the pure and the free;\nThese truths in God’s Word He hath given,\nHow beautiful heaven must be.",
          "In heaven no drooping nor pining,\nNo wishing for elsewhere to be;\nGod’s light is forever there shining,\nHow beautiful heaven must be.",
          "I'm longing to go to fair heaven, \nTo be with the happpy an free\nTo spend the long ages in singing \nHow beautiful heaven must be",
          "The angels so sweetly are singing,\nUp there by the beautiful sea;\nSweet chords from their gold harps are ringing,\nHow beautiful heaven must be. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20137%20%20How%20Beautiful%20Heaven%20Must%20Be%20.mp3",
      "category": "heaven"
  },
  {
      "number": "138",
      "title": "When We All Get To Heaven",
      "titleWithHymnNumber": "138 When We All Get To Heaven",
      "chorus": "When we all get to heaven,\nWhat a day of rejoicing that will be!\nWhen we all see Jesus,\nWe'll sing and shout the victory.",
      "verses": [
          "\nSing the wondrous love of Jesus,\nSing His mercy and His grace;\nIn the mansions bright and blessed,\nHe'll prepare for us a place.",
          "While we walk the pilgrim pathway\nClouds will overspread the sky;\nBut when trav'ling days are over,\nNot a shadow, not a sigh.",
          "Let us then be true and faithful,\nTrusting, serving ev'ry day;\nJust one glimpse of Him in glory\nWill the toils of life repay.",
          "Onward to the prize before us!\nSoon His beauty we'll behold;\nSoon the pearly gates will open,\nWe shall tread the streets of gold."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20138%20%20When%20We%20All%20Get%20To%20Heaven.mp3",
      "category": "heaven"
  },
  {
      "number": "139",
      "title": "Beautiful Home",
      "titleWithHymnNumber": "139 Beautiful Home",
      "chorus": "Home, Beautiful Home!\nBrigh,t beautiful Home!\nHome, home of our Saviour,\nBright, beautiful Home!",
      "verses": [
          "There is a Home eternal,\nBeautiful and bright,\nWhere sweet joys supernal\nNever are dimm’d by night;\nWhite-rob’d angels are singing\nEver around the bright throne;\nWhen, O when shall I see thee,\nBeautiful, beautiful Home?",
          "Flow’rs are ever springing\nIn that Home so fair,\nThousands of children are singing\nPraises to Jesus there;",
          "How they swell the glad anthems\nEver around the bright throne;\nWhen, O when shall I see thee,\nBeautiful, beautiful Home?",
          "Soon shall I join that anthem,\nFar beyond the sky;\nChrist became my ransom,\nWhy should I fear to die?\nSoon my eyes shall behold Him\nSeated upon the bright throne;\nThen, O then shall I see thee,\nBeautiful, beautiful Home? "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20139%20%20Beautiful%20Home.mp3",
      "category": "heaven"
  },
  {
      "number": "140",
      "title": "Laying My Treasure Up There",
      "titleWithHymnNumber": "140 Laying My Treasure Up There",
      "chorus": "I am laying my treasure up there, up there,\nIn that beautiful city so fair;\nWhen its glories unfold\nI'll have riches untold,\nFor I'm laying my treasure up there.",
      "verses": [
          "On the mountain of Zion beyond the blue sky,\nStands a city so wondrous and fair;\nI expect to depart for that land, by and by,\nFor I'm laying my treasure up there.",
          "There's a mansion awaiting God's people, I'm told,\nWhich the Savior has gone to prepare;\nThere the walls are of jasper, the streets are of gold,\nI am laying my treasure up there.",
          "All the love of my heart, and my soul, mind and strength,\nAnd the work that with Jesus I share,\nAre but some of the riches I'll find there at length,\nFor I'm laying my treasure up there.",
          "So altho' a poor pilgrim on earth I may roam,\nEver constant in watching and prayer,\nSoon I'll hear the glad summons to start for my home,\nFor I'm laying my treasure up there."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20140%20%20Laying%20My%20Treasure%20up%20There.mp3",
      "category": "heaven"
  },
  {
      "number": "141",
      "title": "I Shall See The King",
      "titleWithHymnNumber": "141 I Shall See The King",
      "chorus": "In His glory, I shall see the King,\nAnd forever endless praises sing;\n’Twas on Calvary Jesus died for me;\nI shall see the King some day.",
      "verses": [
          "I shall see the King\nWhere the angels sing;\nI shall see the King some day,\nIn the better land,\nOn the golden strand,\nAnd with Him shall ever stay.",
          "In the land of song,\nIn the glory-throng,\nWhere there never comes a night,\nWith my Lord once slain\nI shall ever reign\nIn the glory-land of light.",
          "I shall see the King,\nAll my tributes bring,\nAnd shall look upon His face;\nThen my song shall be\nHow He ransomed me\nAnd has kept me by His grace.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20141%20%20I%20Shall%20See%20The%20King.mp3",
      "category": "heaven"
  },
  {
      "number": "142",
      "title": "Holy Holy Is What The Angels Sing",
      "titleWithHymnNumber": "142 Holy Holy Is What The Angels Sing",
      "chorus": "Holy, holy, is what the angels sing,\nAnd I expect to help them make the courts of Heaven ring;\nBut when I sing redemption’s story, they will fold their wings,\nFor angels never felt the joys that our salvation brings.",
      "verses": [
          "There is singing up in Heaven \nsuch as we have never known,\nWhere the angels sing the praises \nof the Lamb upon the throne,\nTheir sweet harps are ever tuneful, \nand their voices always clear,\nO that we might be more like them \nwhile we serve the Master here!",
          "But I hear another anthem, \nblending voices clear and strong,\nUnto Him who hath redeemed us \nand hath bought us, is the song;\nWe have come through tribulation \nto this land so fair and bright,\nIn the fountain freely flowing \nHe hath made our garments white.",
          "Then the angels stand and listen, \nfor they cannot join the song,\nLike the sound of many waters, \nby that happy, blood washed throng,\nFor they sing about great trials, \nbattles fought and vict’ries won,\nAnd they praise their great Redeemer, \nwho hath said to them, Well done. ",
          "So, although I’m not an angel, \nyet I know that over there\nI will join a blessèd chorus \nthat the angels cannot share;\nI will sing about my Savior, \nwho upon dark Calvary\nFreely pardoned my transgressions, \ndied to set a sinner free."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20142%20%20Holy%20Holy%20%20Is%20What%20The%20Angels%20Sing.mp3",
      "category": "heaven"
  },
  {
      "number": "143",
      "title": "The End Of The Road",
      "titleWithHymnNumber": "143 The End Of The Road",
      "chorus": "When I come to the end, the end of the road,\nTo the land of eternity,\nWhen I come to the end of life’s long road,\nThe face of my Lord I’ll see.",
      "verses": [
          "When I come to the end of the long, long road,\nThe shadows will flee away,\nAnd I’ll stand in the glorious light of God,\nWhere dwelleth eternal day.",
          "Looking back o’er the years that were hard and drear,\nThe hand of the Christ I’ll see;\nWhile my heart will go forth with a song of praise,\nBecause of His love for me.",
          "When I come to the end of the long, long road,\nAnd trials will all be past,\nI shall look in the face of my dearest Friend,\nSafe home in His heav’n at last."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20143%20%20The%20End%20of%20The%20Road.mp3",
      "category": "heaven"
  },
  {
      "number": "144",
      "title": "I Wont Have To Cross Jordan Alone",
      "titleWithHymnNumber": "144 I Wont Have To Cross Jordan Alone",
      "chorus": "I won't have to cross Jordan alone\nJesus died all my sins to atone\nIn the darkness I see\nHe'll be waiting for me\nI won't have to cross Jordan alone",
      "verses": [
          "When I come to the river at the ending of day\nWhen the last winds of sorrow have blown\nThere'll be somebody waiting to show me the way\nI won't have to cross Jordan alone",
          "Often times I'm weary and troubled and sad\nWhen it seems that my friends have all flown\nThere is one thought that cheers me and makes my heart glad\nI won't have to cross Jordan alone",
          "I won't have to cross Jordan alone\nJesus died all my sins to atone\nIn the darkness I see\nHe'll be waiting for me\nI won't have to cross Jordan alone",
          "Though the billows of trouble and sorrow may sweep\nChrist the Savior will care for his own\nTill the end of my journey my soul he will keep\nAnd I won't have to cross Jordan alone",
          "I won't have to cross Jordan alone\nJesus died all my sins to atone\nIn the darkness I see\nHe'll be waiting for me\nI won't have to cross Jordan alone\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20144%20%20I%20Won't%20Have%20To%20Cross%20Jordan%20Alone.mp3",
      "category": "heaven"
  },
  {
      "number": "145",
      "title": "When They Ring The Golden Bell",
      "titleWithHymnNumber": "145 When They Ring The Golden Bell",
      "chorus": "Don’t you hear the bells now ringing?\nDon’t you hear the angels singing?\n’Tis the glory hallelujah Jubilee.\nIn that far-off sweet forever,\nJust beyond the shining river,\nWhen they ring the golden bells for you and me.",
      "verses": [
          "There’s a land beyond the river,\nThat we call the sweet forever,\nAnd we only reach that shore by faith’s decree;\nOne by one we’ll gain the portals,\nThere to dwell with the immortals,\nWhen they ring the golden bells for you and me.",
          "We shall know no sin or sorrow,\nIn that haven of tomorrow,\nWhen our barque shall sail beyond the silver sea;\nWe shall only know the blessing\nOf our Father’s sweet caressing,\nWhen they ring the golden bells for you and me.",
          "When our days shall know their number,\nAnd in death we sweetly slumber,\nWhen the King commands the spirit to be free;\nNevermore with anguish laden,\nWe shall reach that lovely Eden,\nWhen they ring the golden bells for you and me"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20145%20%20When%20They%20Ring%20The%20Golden%20Bells.mp3",
      "category": "heaven"
  },
  {
      "number": "146",
      "title": "Face To Face",
      "titleWithHymnNumber": "146 Face To Face",
      "chorus": "Face to face I shall behold Him,\nFar beyond the starry sky;\nFace to face in all His glory,\nI shall see Him by and by!",
      "verses": [
          "Face to face with Christ, my Saviour,\nFace to face – what will it be?\nWhen with rapture I behold Him,\nJesus Christ who died for me. ",
          "Only faintly now, I see Him,\nWith the darkling veil between,\nBut a blessed day is coming,\nWhen His glory shall be seen. ",
          "What rejoicing in His presence,\nWhen are banished grief and pain;\nWhen the crooked ways are straightened,\nAnd the dark things shall be plain. ",
          "Face to face! O blissful moment!\nFace to face – to see and know;\nFace to face with my Redeemer,\nJesus Christ who loves me so."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20146%20%20Face%20to%20Face.mp3",
      "category": "heaven"
  },
  {
      "number": "147",
      "title": "Sweet By And By",
      "titleWithHymnNumber": "147 Sweet By And By",
      "chorus": "In the sweet by and by,\nWe shall meet on that beautiful shore;\nIn the sweet by and by,\nWe shall meet on that beautiful shore.",
      "verses": [
          "There's a land that is fairer than day,\nAnd by faith we can see it afar;\nFor the Father waits over the way\nTo prepare us a dwelling place there.",
          "We shall sing on that beautiful shore\nThe melodious songs of the blessed;\nAnd our spirits shall sorrow no more,\nNot a sigh for the blessing of rest.",
          "To our bountiful Father above,\nWe will offer our tribute of praise\nFor the glorious gift of His love\nAnd the blessings that hallow our days."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20147%20%20Sweet%20By%20and%20By.mp3",
      "category": "heaven"
  },
  {
      "number": "148",
      "title": "No Tears In Heaven",
      "titleWithHymnNumber": "148 No Tears In Heaven",
      "chorus": "No tears No tears, no tears up there,\nSorrow and pain will all have flown;\nNo tears No tears, no tears up there;\nNo tears in heaven will be known.",
      "verses": [
          "1. No tears in heaven, no sorrows given.\nAll will be glory in that land;\nThere'll be no sadness, all will be gladness,\nWhen we shall join that happy band.",
          "Glory is waiting, waiting up yonder,\nWhere we shall spend an endless day;\nThere with our Savior, we'll be forever,\nWhere no more sorrow can dismay.",
          "Some morning yonder, we'll cease to ponder\nO'er things this life has brought to view;\nAll will be clearer, loved ones be dearer\nIn heav'n where all will be made new."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20148%20%20No%20Tears%20In%20Heaven.mp3",
      "category": "heaven"
  },
  {
      "number": "149",
      "title": "Farther Along",
      "titleWithHymnNumber": "149 Farther Along",
      "chorus": "Farther along we'll know all about it,\nFarther along we'll understand why;\nCheer up, my brother, live in the sunshine,\nWe'll understand it all by and by.",
      "verses": [
          "\nTempted and tried we're oft made to wonder\nWhy it should be thus all the day long,\nWhile there are others living about us,\nNever molested tho' in the wrong.",
          "When death has come and taken our loved ones,\nIt leaves our home so lonely and drear;\nThen do we wonder why others prosper,\nLiving so wicked year after year.",
          "Faithful till death said our loving Master,\nA few more days to labour and wait;\nToils of the road will then seem as nothing,\nAs we sweep through the beautiful gate.",
          "When we see Jesus coming in glory,\nWhen He comes from His home in the sky;\nThen we shall meet Him in that bright mansion,\nWe'll understand it all by and by."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20149%20%20Farther%20Along.mp3",
      "category": "heaven"
  },
  {
      "number": "150",
      "title": "Pentecostal Power",
      "titleWithHymnNumber": "150 Pentecostal Power",
      "chorus": "Lord, send the old-time power, the Pentecostal power!\nThy floodgates of blessing, on us throw open wide!\nLord, send the old-time power, the Pentecostal power!\nThat sinners be converted and Thy Name glorified!",
      "verses": [
          "Lord, as of old, at Pentecost,\nThou didst Thy pow’r display—\nWith cleansing, purifying flame,\nDescend on us today.",
          "For mighty works for Thee, prepare\nAnd strengthen every heart;\nCome, take possession of Thine own,\nAnd nevermore depart.",
          "All self consume, all sin destroy!\nWith earnest zeal endue\nEach waiting heart to work for Thee;\nO Lord, our faith renew!",
          "Speak, Lord! before Thy throne we wait,\nThy promise we believe,\nAnd will not let Thee go until\nThe blessing we receive."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%201-150/GHS%20%20150%20%20Pentecostal%20Power.mp3",
      "category": "holy spirit"
  },
  {
      "number": "151",
      "title": "There Shall Be Showers Of Blessing",
      "titleWithHymnNumber": "151 There Shall Be Showers Of Blessing",
      "chorus": "Showers of blessing,\nShowers of blessing we need;\nMercy drops round us are falling,\nBut for the showers we plead.",
      "verses": [
          "\n\"There shall be showers of blessing:\"\nThis is the promise of love;\nThere shall be seasons refreshing,\nSent from the Saviour above.",
          "\"There shall be showers of blessing:\" –\nPrecious reviving again;\nOver the hills and the valleys,\nSound of abundance of rain.",
          "\"There shall be showers of blessing:\"\nSend them upon us O Lord!\nGrant to us now a refreshing;\nCome, and now honour Thy Word.",
          "\"There shall be showers of blessing\"\nOh, that today they might fall,\nNow as to God we're confessing,\nNow as on Jesus we call.",
          "\"There shall be showers of blessing,\"\nIf we but trust and obey;\nThere shall be seasons refreshing,\nIf we let God have His way."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20151%20%20There%20Shall%20Be%20Showers%20of%20Blessing.mp3",
      "category": "holy spirit"
  },
  {
      "number": "152",
      "title": "Joys Are Flowing Like A River",
      "titleWithHymnNumber": "152 Joys Are Flowing Like A River",
      "chorus": "Blessed quietness, holy quietness,\nWhat assurance in my soul !\nOn the stormy sea, He speaks peace to me,\nHow the billows cease to roll.",
      "verses": [
          "Joys are flowing like a river,\nSince the Comforter has come;\nHe abides with us for ever,\nMakes the trusting heart His home.",
          "Bringing life, and health, and gladness,\nAll around this heav'nly Guest;\nBanish'd unbelief and sadness,\nChang'd our weariness to rest.",
          "Like the rain that falls from heaven,\nLike the sunlight from the sky,\nSo the Holy Ghost is given,\nComing on us from on high.",
          "What a wonderful salvation,\nWhere we always see His face;\nWhat a perfect habitation,\nWhat a quiet resting-place.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20152%20%20Joys%20Are%20Flowing%20Like%20A%20River.mp3",
      "category": "holy spirit"
  },
  {
      "number": "153",
      "title": "With Signs Following",
      "titleWithHymnNumber": "153 With Signs Following",
      "chorus": "",
      "verses": [
          "When first the risen Lord of pow'r\nHis chosen ones sent forth,\nA charge he gave, that solemn hour,\nTo preach His saving worth.\n\"Go ye,\" said He, \"to all mankind;\nDeclare My Word, and ye shall find:\nThese signs shall surely follow them\nWho on My Name believe.\"",
          "\"They shall with other tongues declare\nThe wonders of their God;\nThe sick beneath their hands, by prayer,\nShall rise, to prove My Word,\"\nSo let it be! Firm as His Throne\nStands this clear promise to His own:\nThese signs shall surely follow them\nWho on My Name believe.",
          "Crowned with the flame of Pentecost,\nA faithful, fearless band\nProclaimed His Name: a ransomed host\nArose from every land.\nThe Lord worked with them from on High,\nHis proven Word could none deny:\nThese signs shall surely follow them\nWho on My name believe.",
          "No word of Thine is void of power;\nNow promise, Lord, is vain.\nBe this a Pentecostal hour\nConfirm Thy Word again!\nNor can'st Thou fail! Thou art the same\nAs when of old Thou did'st' proclaim:\nThese signs shall surely follow them\nWho on My Name believe."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20153%20%20With%20Signs%20Following.mp3",
      "category": "holy spirit"
  },
  {
      "number": "154",
      "title": "Give Me A Double Portion",
      "titleWithHymnNumber": "154 Give Me A Double Portion",
      "chorus": "Give me, Lord, a double portion, pour Thy Spirit on me,\nThru eyes of faith Thy wondrous works I can see,\nBut I need Thy helping hand, in this troubled, sinful land,\nGive me, Lord, a double portion from Thee.",
      "verses": [
          "Long ago in days of old, stood a man of God we're told,\nAs he talked to Elijah that day;\nHis request he did repeat, standing at Elijah's feet,\n\"A double portion\" I can hear him say.",
          "As Elijah stood that day, to Elisha he did say,\n\"Ask me what I shall do unto thee,\"\nAnd Elisha then replied, walking at Elijah's side,\n\"A double portion, let it fall on me.\"",
          "Lord, I always to Thee, pray, just for strength from day to day,\nBut I see there's so much to be done,\nThat I have to kneel anew and this favor ask of you,\nA double portion -- this fight must be won.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20154%20%20Give%20Me%20A%20Double%20Portion.mp3",
      "category": "holy spirit"
  },
  {
      "number": "155",
      "title": "Let Jesus Come Into Your Heart",
      "titleWithHymnNumber": "155 Let Jesus Come Into Your Heart",
      "chorus": "Just now, your doubtings give o'er;\nJust now, reject Him no more;\nJust now, throw open the door;\nLet Jesus come into your heart.",
      "verses": [
          "\nIf you are tired of the load of your sin,\nLet Jesus come into your heart;\nIf you desire a new life to begin,\nLet Jesus come into your heart.",
          "If it's for purity now that you sigh,\nLet Jesus come into your heart;\nFountains for cleansing are flowing nearby,\nLet Jesus come into your heart.",
          "If there's a tempest your voice cannot still,\nLet Jesus come into your heart;\nIf there's a void this world never can fill,\nLet Jesus come into your heart.",
          "If you would join the glad songs of the blest,\nLet Jesus come into your heart;\nIf you would enter the mansions of rest,\nLet Jesus come into your heart."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20155%20%20Let%20Jesus%20Come%20Into%20Your%20Heart.mp3",
      "category": "invitation"
  },
  {
      "number": "156",
      "title": "Room At The Cross For You",
      "titleWithHymnNumber": "156 Room At The Cross For You",
      "chorus": "There's room at the cross for you\nThere's room at the cross for you\nThough millions have come, there's still room for one\nYes there's room at the cross for you.",
      "verses": [
          "The cross upon which Jesus died\nIs a shelter in which we can hide\nAnd its grace so free is sufficient for me\nAnd deep is its fountain as wide as the sea.",
          "Though millions have found him a friend\nAnd have turned from the sins they have sinned\nThe Savior still waits to open the gates\nAnd welcome a sinner before it's too late.",
          "The hand of my Savior is strong\nAnd the love of my Savior is long\nThrough sunshine or rain, through loss or in gain,\nThe blood flows from Calvary to cleanse every stain.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20156%20%20Room%20%20At%20The%20Cross%20For%20You.mp3",
      "category": "invitation"
  },
  {
      "number": "157",
      "title": "Wandering Child O Come Home",
      "titleWithHymnNumber": "157 Wandering Child O Come Home",
      "chorus": "Child, come home, child come home,\nWand'ring child, why longer roam?\n'Tis thy Father entreats\nWand'ring child, O come home.",
      "verses": [
          "Have you wandered away from your Father's care,\nHeavy hearted and sad do you roam?\nThere's a sweet gentle voice calling now to you\nWand-ring child, wand'ring child, O come home.",
          "Is your frail bark adrift on life's raging sea,\nAre you tossed on its billows and foam?\nThere's a safe harbor home, waiting now for you\nWand-ring child, wand'ring child, O come home. ",
          "He is pleading today, heed His gentle voice,\nAs He bids you no longer to roam,\nTo that dear Father's house haste without delay--\nWand-ring child, wand'ring child, O come home."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20157%20%20Wandering%20Child%20O%20Come%20Home.mp3",
      "category": "invitation"
  },
  {
      "number": "158",
      "title": "Come Believing",
      "titleWithHymnNumber": "158 Come Believing",
      "chorus": "Come believing, come believing!\nCome to Jesus, look and live!\nCome believing, come believing!\nCome to Jesus, look and live!",
      "verses": [
          "\nOnce again the Gospel message,\nFrom the Saviour you have heard;\nWill you heed the invitation?\nWill you turn and seek the Lord?",
          "Many summers you have wasted,\nRipen'd harvests you have seen;\nWinter snows by Spring have melted,\nYet you linger in your sin.",
          "Jesus for your choice is waiting;\nTarry not: at once decide!\nWhile the Spirit now is striving,\nYield, and seek the Saviour's side.",
          "Cease of fitness to be thinking;\nDo not longer try to feel!\nIt is trusting, and not feeling,\nThat will give the Spirit's seal.",
          "Let your will to God be given,\nTrust in Christ's atoning blood;\nLook to Jesus now in heaven,\nRest on His unchanging word."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20158%20%20Come%20Believing.mp3",
      "category": "invitation"
  },
  {
      "number": "159",
      "title": "Why Do You Wait",
      "titleWithHymnNumber": "159 Why Do You Wait",
      "chorus": "Why not? why not?\nWhy not come to Him now?\nWhy not? why not?\nWhy not come to Him now?",
      "verses": [
          "Why do you wait, dear brother,\nOh, why do you tarry so long?\nYour Saviour is waiting to give you\nA place in His sanctified throng.",
          "What do you hope, dear brother,\nTo gain by a further delay?\nThere’s no one to save you but Jesus,\nThere’s no other way but His way.",
          "Do you not feel, dear brother,\nHis Spirit now striving within?\nOh, why not accept His salvation,\nAnd throw off thy burden of sin.",
          "Why do you wait, dear brother,\nThe harvest is passing away,\nYour Saviour is longing to bless you,\nThere’s danger and death in delay."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20159%20%20Why%20Do%20You%20Wait.mp3",
      "category": "invitation"
  },
  {
      "number": "160",
      "title": "The Shepherd Of Love",
      "titleWithHymnNumber": "160 The Shepherd Of Love",
      "chorus": "Out of your darkness of sin and shame,\nInto His love, forever the same,\nCome to Him now, believe on His name,\nO answer the call today.",
      "verses": [
          "The Shepherd of Love is seeking the lost\nIn paths that are rough and steep;\nHe’s calling the lambs that have gone astray,\nHe’s calling, calling His sheep.",
          "The Shepherd of Love knows His sheep by name,\nAnd tenderly leads the way;\nO weary one, come to the Shepherd’s fold,\nHe’s calling, calling today.",
          "The Shepherd of Love our ransom hath paid,\nAnd offers salvation free;\nHe’s patiently waiting for thee to come,\nHe’s calling, calling for thee.",
          "The Shepherd of Love now seeketh His sheep,\nHe seeketh whate’er the cost;\nBehold, He is calling the wand’rer home,\nHe’s calling, calling the lost. [Refrain]"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20160%20%20The%20Shepherd%20of%20Love.mp3",
      "category": "invitation"
  },
  {
      "number": "161",
      "title": "Who'll Be The Next To Follow Jesus",
      "titleWithHymnNumber": "161 Who'll Be The Next To Follow Jesus",
      "chorus": "Who’ll be the next, who’ll be the next?\nWho’ll be the next to follow Jesus?\nWho’ll be the next to follow les us now?\nFollow Jesus now?",
      "verses": [
          "Who'll be the next to follow Jesus?\nWho’ll be the next his cross to bear?\nSomeone is ready, someone is waiting;\nWho’ll be the next a crown to wear?",
          "Who’ll be the next to follow Jesus?\nCome and bow at his precious feet;\nWho’ll be the next to lay every burden\nDown at the Father’s mercy seat?",
          "Who’ll be the next to follow Jesus?\nWho’ll be the next to praise his name?\nWho’ll swell the chorus of free redemption,\nSing hallelujah, praise the Lamb?",
          "Who’ll be the next to follow Jesus\nDown through the Jordan’s rolling tide?\nWho’ll be the next to join with the ransomed\nSinging upon the other side?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20161%20%20Who'll%20be%20The%20Next.mp3",
      "category": "invitation"
  },
  {
      "number": "162",
      "title": "Almost Persuaded",
      "titleWithHymnNumber": "162 Almost Persuaded",
      "chorus": "",
      "verses": [
          "“Almost persuaded” now to believe;\n“Almost persuaded” Christ to receive;\nSeems now some soul to say,\n“Go, Spirit, go Thy way,\nSome more convenient day\non Thee I’ll call.”",
          "Oh, be persuaded! Christ never fails—\nOh, be persuaded! His blood avails—\nCan save from every sin,\nCleanse you without, within—\nWill you not let Him in?\nOpen the door!",
          "“Almost persuaded,” harvest is past!\n“Almost persuaded,” doom comes at last;\n“Almost” cannot avail;\n“Almost” is but to fail!\nSad, sad that bitter wail—\n“Almost—but lost!”",
          "Be now persuaded, oh, sinner, hear!\nBe now persuaded, Jesus is near;\nHis voice is pleading still,\nTurn now with heart and will,\nPeace will your spirit fill—\nOh, turn today!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20162%20%20Almost%20Persuaded.mp3",
      "category": "invitation"
  },
  {
      "number": "163",
      "title": "My God Is An Hour So Sweet",
      "titleWithHymnNumber": "163 My God Is An Hour So Sweet",
      "chorus": "",
      "verses": [
          "My God, is any hour so sweet\nFrom blush of morn to evening star,\nAs that which calls me to Thy feet,\nThe hour of prayer?",
          "No words can tell what sweet relief\nThere for my ev'ry want I find.\nWhat strength for warfare, balm for grief,\nWhat peace of mind!",
          "Hushed is each doubt, gone ev'ry fear;\nMy spirit seems in heav’n to stay;\nAnd e’en the penitential tear\nIs wiped away.",
          "Lord, till I reach yon blissful shore,\nNo privilege so dear shall be\nAs thus my inmost soul to pour\nIn prayer to thee."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20163%20%20My%20God%20Is%20Any%20Hour%20So%20Sweet.mp3",
      "category": "prayer"
  },
  {
      "number": "164",
      "title": "Prayer Is The Soul S Sincere Desire",
      "titleWithHymnNumber": "164 Prayer Is The Soul S Sincere Desire",
      "chorus": "",
      "verses": [
          "Prayer is the soul’s sincere desire,\nUttered, or unexpressed;\nThe motion of a hidden fire\nThat trembles in the breast.",
          "Prayer is the simplest form of speech\nThat infant lips can try;\nPrayer the sublimest strains that reach\nThe Majesty on high.",
          "Prayer is the Christian’s vital breath,\nThe Christian’s native air;\nHis watchword at the gates of death;\nHe enters rest with prayer.",
          "The saints in prayer appear as one,\nIn word, and deed, and mind;\nWhile with the Father and the Son\nSweet fellowship they find.",
          "O Thou, by whom we come to God,\nhe Life, the Truth, the Way,\nThe path of prayer Thyself hast trod—\nLord, teach us how to pray."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20164%20%20Prayer%20is%20The%20Soul's%20Sincere%20Desire.mp3",
      "category": "prayer"
  },
  {
      "number": "165",
      "title": "Guide Me O Thou Great Jehovah",
      "titleWithHymnNumber": "165 Guide Me O Thou Great Jehovah",
      "chorus": "",
      "verses": [
          "\nGuide me, O Thou Great Jehovah!\nPilgrim thro' this barren land;\nI am weak, but Thou art mighty,\nHold me by Thy pow'rful hand:\nBread of heaven! Bread of heaven!\nFeed me now and ever more,\nFeed me now and ever more.",
          "If I tread the verge of Jordan,\nBid my anxious fears subside:\nBear me through the swelling torrent,\nLand me safe on Canaan's side:\nSongs of praises! Songs of praises!\nI will ever give to Thee,\nI will ever give to Thee.",
          "Saviour, come! we long to see Thee,\nLong to dwell with Thee above;\nAnd to know in full communion,\nAll the sweetness of Thy love.\nCome, Lord Jesus! Come, Lord Jesus!\nTake Thy waiting people home,\nTake Thy waiting people home."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20165%20%20Guide%20Me%20O%20thou%20Great%20Jehovah.mp3",
      "category": "prayer"
  },
  {
      "number": "166",
      "title": "Did You Think To Pray",
      "titleWithHymnNumber": "166 Did You Think To Pray",
      "chorus": "O how praying rests the weary!\nPrayer will change the night to day;\nSo when life seems dark and dreary,\nDon't forget to pray.",
      "verses": [
          "Ere you left your room this morning\nDid you think to pray?\nIn the name of Christ, our Saviour,\nDid you sue for loving favour,\nAs a shield today?",
          "When you met with great temptation\nDid you think to pray?\nBy His dying love and merit\nDid you claim the Holy Spirit\nAs your guide and stay?",
          "When your heart was filled with anger\nDid you think to pray?\nDid you plead for grace, my brother,\nThat you might forgive another\nWho had crossed your way?",
          "When sore trials came upon you\nDid you think to pray?\nWhen your soul was bowed in sorrow,\nBalm of Gilead did you borrow\nAt the gates today?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20166%20%20Did%20You%20Think%20To%20Pray.mp3",
      "category": "prayer"
  },
  {
      "number": "167",
      "title": "I Must Tell Jesus",
      "titleWithHymnNumber": "167 I Must Tell Jesus",
      "chorus": "I must tell Jesus! I must tell Jesus!\nI cannot bear my burdens alone;\nI must tell Jesus! I must tell Jesus!\nJesus will help me, Jesus alone.",
      "verses": [
          "\nI must tell Jesus all of my trials;\nI cannot bear these burdens alone;\nIn my distress He kindly will help me;\nHe ever loves and care for His own.",
          "I must tell Jesus all of my troubles;\nHe is a kind, compassionate Friend;\nIf I but ask Him, He will deliver,\nMake of my troubles quickly an end.",
          "Tempted and tried, I need a great Saviour,\nOne Who can help my burdens to bear;\nI must tell Jesus, I must tell Jesus;\nHe all my cares and sorrows will share.",
          "O how the world to evil allures me!\nO how my heart is tempted to sin!\nI must tell Jesus, and He will help me\nOver the world the victory to win."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20167%20%20I%20Must%20Tell%20%20Jesus.mp3",
      "category": "prayer"
  },
  {
      "number": "168",
      "title": "I Need Thee Every Hour",
      "titleWithHymnNumber": "168 I Need Thee Every Hour",
      "chorus": "I need Thee, oh, I need Thee,\nEvery hour I need Thee,\nOh, bless me now, my Saviour,\nI come to Thee.",
      "verses": [
          "\nI need Thee every hour,\nMost gracious Lord;\nNo tender voice like Thine\nCan peace afford.",
          "I need Thee every hour,\nStay Thou nearby;\nTemptations lose their power\nWhen Thou art nigh.",
          "I need Thee every hour,\nTeach me Thy will;\nAnd Thy rich promises\nIn me fulfil.",
          "I need Thee every hour,\nMost Holy One;\nOh, make me Thine indeed,\nThou blessed Son!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20168%20%20I%20Need%20Thee%20Every%20Hour.mp3",
      "category": "prayer"
  },
  {
      "number": "169",
      "title": "What A Friend We Have In Jesus",
      "titleWithHymnNumber": "169 What A Friend We Have In Jesus",
      "chorus": "",
      "verses": [
          "1. What a Friend we have in Jesus,\nAll our sins and griefs to bear;\nWhat a privilege to carry \nEv'rything to God in prayer.\nOh, what peace we often forfeit,\nOh, what needless pain we bear -\nAll because we do not carry\nEv'rything to God in prayer.",
          "3. Are we weak and heavy laden,\nCumbered with a load of care?\nPrecious Saviour, still our refuge, - \nTake it to the Lord in prayer.\nDo thy friends despise, forsake thee?\nTake it to the Lord in prayer."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20169%20%20What%20A%20Friend%20We%20Have%20In%20Jesus.mp3",
      "category": "prayer"
  },
  {
      "number": "170",
      "title": "Sweet Hour Of Prayer",
      "titleWithHymnNumber": "170 Sweet Hour Of Prayer",
      "chorus": "",
      "verses": [
          "Sweet hour of pray'r! Sweet hour of pray'r!\nThat calls me from a world of care\nAnd bids me at my Father's throne\nMake all my wants and wishes known;\nIn seasons of distress and grief,\nMy soul has often found relief,\nAnd oft escaped the tempter's snare\nBy thy return sweet hour of pray'r.",
          "Sweet hour of pray'r! Sweet hour of pray'r!\nMay I thy consolation share,\nTill from Mount Pisgah's lofty height,\nI view my home and take my flight:\nThis robe of flesh I'll drop and rise\nTo seize the everlasting prize;\nAnd shout while passing through the air,\nFarewell, farewell, sweet hour of pray'r."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20170%20%20Sweet%20Hour%20of%20Prayer.mp3",
      "category": "prayer"
  },
  {
      "number": "171",
      "title": "Pass Me Not",
      "titleWithHymnNumber": "171 Pass Me Not",
      "chorus": "Saviour, Saviour,\nHear my humble cry;\nWhile on others Thou art calling,\nDo not pass me by.",
      "verses": [
          "\nPass me not, O gentle Saviour,\nHear my humble cry;\nWhile on others Thou art calling,\nDo not pass me by.",
          "Let me at Thy throne of mercy,\nFind a sweet relief;\nKneeling there in deep contrition,\nHelp my unbelief.",
          "Trusting only in Thy merit,\nWould I seek Thy face;\nHeal my wounded, broken spirit,\nSave me by Thy grace.",
          "Thou the Spring of all my comfort,\nMore than life to me;\nWhom have I on earth beside Thee?\nWhom in heav'n but Thee?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20171%20%20Pass%20Me%20Not.mp3",
      "category": "prayer"
  },
  {
      "number": "172",
      "title": "When The Roll Is Called Up Yonder",
      "titleWithHymnNumber": "172 When The Roll Is Called Up Yonder",
      "chorus": "When the roll . . . is called up yonder,\nWhen the roll . . . is called up yonder,\nWhen the roll . . . is called up yonder,\nWhen the roll is called up yonder, I'll be there.",
      "verses": [
          "\nWhen the trumpet of the Lord shall sound and time shall be no more,\nAnd the morning breaks eternal, bright and fair;\nWhen the saved of earth shall gather over on the other shore,\nAnd the roll is called up yonder, I'll be there.",
          "On that bright and cloudless morning \nwhen the dead in Christ shall rise,\nAnd the glory of His resurrection share;\nWhen His chosen ones shall gather to their home beyond the skies,\nAnd the roll is called up yonder, I'll be there.",
          "Let us labour for the Master from the dawn till setting sun,\nLet us talk of all His wondrous love and care;\nThen when all of life is over and our work on earth is done,\nAnd the roll is called up yonder, I'll be there."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20172%20%20When%20The%20Roll%20is%20Called%20Up%20Yonder.mp3",
      "category": "rapture"
  },
  {
      "number": "173",
      "title": "Is It The Crowning Day",
      "titleWithHymnNumber": "173 Is It The Crowning Day",
      "chorus": "Glad day, glad day!\nIs it the crowning day?\nI’ll live for today, nor anxious be;\nJesus, my Lord I soon shall see;\nGlad day, glad day!\nIs it the crowning day?",
      "verses": [
          "Jesus may come today,\nGlad day, glad day!\nAnd I would see my Friend;\nDangers and troubles would end\nIf Jesus should come today.",
          "I may go home today,\nGlad day, glad day!\nSeemeth I hear their song,\nHail to the radiant throng,\nIf I should go home today.",
          "Why should I anxious be?\nGlad day, glad day!\nLights appear on the shore,\nStorms will affright nevermore,\nFor He is “at hand” today.",
          "Faithful I’ll be today,\nGlad day, glad day!\nAnd I will freely tell\nWhy I should love Him so well,\nFor He is my all today."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20173%20%20Is%20It%20The%20Crowning%20Day.mp3",
      "category": "rapture"
  },
  {
      "number": "174",
      "title": "Jesus Is Coming Again",
      "titleWithHymnNumber": "174 Jesus Is Coming Again",
      "chorus": "Coming again coming again\nMaybe morning maybe noon\nMaybe evening and maybe soon\nComing again coming again\nOh what a wonderful day it will be\nJesus is coming again",
      "verses": [
          "Marvelous message we bring\nGlorious carol we sing\nWonderful word of the King\nJesus is coming again",
          "Forest and flower exclaim\nMountain and meadow the same\nAll earth and heaven proclaim\nJesus is coming again",
          "Standing before Him at last\nTrial and trouble all past\nCrowns at His feet we will cast\nJesus is coming again"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20174%20%20Jesus%20Is%20Coming%20%20Again.mp3",
      "category": "rapture"
  },
  {
      "number": "175",
      "title": "He Is Comimg Again",
      "titleWithHymnNumber": "175 He Is Comimg Again",
      "chorus": "He is coming again, He is coming again,\nThe very same Jesus, rejected of men;\nHe is coming again, He is coming again,\nWith pow'r and great glory, He is coming again!",
      "verses": [
          "Lift up your heads, pilgrims a-weary,\nSee day’s approach now crimson the sky;\nNight shadows flee, and your Belovèd,\nAwaited with longing, at last draweth nigh.",
          "Dark was the night, sin warred against us;\nHeavy the load of sorrow we bore;\nBut now we see signs of His coming;\nOur hearts glow within us, joy’s cup runneth o’er!",
          "O blessèd hope! O blissful promise!\nFilling our hearts with rapture divine;\nO day of days! Hail Thy appearing!\nThy transcendent glory forever shall shine!",
          "Even so come, precious Lord Jesus;\nCreation waits redemption to see;\nCaught up in clouds, soon we shall meet Thee;\nO blessèd assurance, forever with Thee!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20175%20%20He%20Is%20Coming%20%20Again.mp3",
      "category": "rapture"
  },
  {
      "number": "176",
      "title": "Christ Returneth",
      "titleWithHymnNumber": "176 Christ Returneth",
      "chorus": "O Lord Jesus, how long, how long\nEre we shout the glad song,\nChrist returneth! \nHallelujah! hallelujah! \nAmen. Hallelujah! Amen.",
      "verses": [
          "It may be at morn, when the day is awaking,\nWhen sunlight through darkness and shadow is breaking,\nThat Jesus will come in the fullness of glory,\nTo receive from the world His own.",
          "It may be at midday, it may be at twilight,\nIt may be, perchance, that the blackness of midnight\nWill burst into light in the blaze of His glory,\nWhen Jesus receives His own.",
          "While its hosts cry Hosanna, from heaven descending,\nWith glorified saints and the angels attending,\nWith grace on His brow, like a halo of glory,\nWill Jesus receive His own.",
          "O joy! O delight! should we go without dying,\nNo sickness, no sadness, no dread and no crying.\nCaught up through the clouds with our Lord into glory,\nWhen Jesus receives His own."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20176%20%20Christ%20Returneth.mp3",
      "category": "NOT FOUND"
  },
  {
      "number": "177",
      "title": "Search Me O God",
      "titleWithHymnNumber": "177 Search Me O God",
      "chorus": "",
      "verses": [
          "Search me, O God, and know my heart today;\nTry me, O Lord, and know my thoughts I pray;\nSee if there be some wicked way in me,\nCleanse me from every sin and set me free.",
          "Lord, take my life, and make it wholly Thine;\nFill my poor heart with Thy great love divine;\nTake all my will, my passion, self and pride;\nI now surrender – Lord, in me abide.",
          "O Holy Ghost, revival comes from Thee;\nSend a revival – start the work in me:\nThy Word declares Thou wilt supply our need;\nFor blessing now, O Lord, I humbly plead."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20177%20%20Search%20Me%20O%20God.mp3",
      "category": "sanctification"
  },
  {
      "number": "178",
      "title": "Fill My Cup Lord",
      "titleWithHymnNumber": "178 Fill My Cup Lord",
      "chorus": "Fill my cup, Lord; I lift it up, Lord!\nCome and quench this thirsting of my soul;\nBread of heaven, feed me till I want no more-\nFill my cup, fill it up and make me whole!",
      "verses": [
          "\nLike the woman at the well I was seeking –\nFor things that could not satisfy;\nAnd then I heard my Saviour speaking –\n\"Draw from My well that never shall run dry.\"",
          "There are millions in this world who are craving – \nThe pleasures earthly things afford;\nBut none can match the wondrous treasure – \nThat I find in Jesus Christ, my Lord.",
          "So, my brother, if the things this world gave you –\nLeave hungers that won't pass away,\nMy blessed Lord will come and save you\nIf you kneel to Him and humbly pray:"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20178%20%20Fill%20%20My%20Cup%20Lord.mp3",
      "category": "sanctification"
  },
  {
      "number": "179",
      "title": "Higher Ground",
      "titleWithHymnNumber": "179 Higher Ground",
      "chorus": "Lord, lift me up, and let me stand\nBy faith on heaven's table land;\nA higher plane than I have found,\nLord, plant my feet on higher ground.",
      "verses": [
          "\nI'm pressing on the upward way,\nNew heights I'm gaining everyday;\nStill praying as I onward bound,\nLord, plant my feet on higher ground.",
          "My heart has no desire to stay\nWhere doubts arise, and fears dismay;\nTho' some may dwell where these abound,\nMy pray'r my aim is higher ground.",
          "I want to live above the world,\nThough Satan's darts at me are hurled\nBut still I'll pray till heav'n I've found:\n\"Lord, lead me on to higher ground.\"",
          "I want to scale the utmost height,\nAnd catch a gleam of glory bright;\nFor faith has caught the joyful sound,\nThe song of saints on higher ground."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20179%20%20Higher%20Ground.mp3",
      "category": "rapture"
  },
  {
      "number": "180",
      "title": "Since The Son Hath Made Me Free",
      "titleWithHymnNumber": "180 Since The Son Hath Made Me Free",
      "chorus": "",
      "verses": [
          "Since the Son hath made me free,\nLet me taste my liberty;\nThee behold with open face,\nTriumph in Thy saving grace,\nThy great will delight to prove,\nGlory in Thy perfect love.",
          "Lord, I will not let Thee go\nTill the blessing Thou bestow;\nHear my Advocate divine!\nLo! to His my suit I join;\nJoined to His, it cannot fail;\nBless me; for I will prevail!",
          "Heavenly Adam, Life divine,\nChange my nature into Thine!\nMove and spread throughout my soul,\nActuate and fill the whole!\nBe it I no longer now\nLiving in the flesh, but Thou.",
          "Holy Ghost, no more delay!\nCome, and in Thy temple stay!\nNow Thine inward witness bear,\nStrong, and permanent, and clear;\nSpring of life, Thyself impart,\nRise eternal in my heart!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20180%20%20Since%20The%20Son%20Hath%20Made%20Me%20Free.mp3",
      "category": "sanctification"
  },
  {
      "number": "181",
      "title": "All Things Are Possible",
      "titleWithHymnNumber": "181 All Things Are Possible",
      "chorus": "",
      "verses": [
          "All things are possible to him\nThat can in Jesus' name believe:\nLord, I no more thy truth blaspheme,\nThy truth I lovingly receive;\nI can, I do believe in thee,\nAll things are possible to me. ",
          "Though earth and hell the word gainsay,\nThe word of God can never fail;\nThe Lamb shall take my sins away,\n'Tis certain, though impossible;\nThe thing impossible shall be,\nAll things are possible to me. ",
          "When thou the work of faith hast wrought,\nI here shall in thine image shine,\nNor sin in deed, or word, or thought;\nLet men exclaim, and fiends repine,\nThey cannot break the firm decree;\nAll things are possible to me. ",
          "Thy mouth, O Lord, hath spoke, hath sworn\nThat I shall serve thee without fear,\nShall find the pearl which others spurn,\nHoly, and pure, and perfect here,\nThe servant as his Lord shall be;\nAll things are possible to me. ",
          "All things are possible to God,\nTo Christ, the power of God in man,\nTo me, when I am all renewed,\nWhen I in Christ am formed again,\nAnd witness, from all sin set free,\nAll things are possible to me."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20181%20%20All%20Things%20Are%20Possible.mp3",
      "category": "sanctification"
  },
  {
      "number": "182",
      "title": "Blessed Are The Pure In Heart",
      "titleWithHymnNumber": "182 Blessed Are The Pure In Heart",
      "chorus": "",
      "verses": [
          "BLESSED are the pure in heart,\nThey have learned the angel-art,\nWhile on earth in heaven to be,\nGod, by sense unseen, to see.\nCleansed from sin's offensive stain,\nFellowship with him they gain;\nNearness, likeness to their Lord,\nTheir exceeding great reward.",
          "In creation him they own,\nMeet him in its haunts, alone;\nMost amidst its Sabbath calm,\nMorning light and evening balm.\nHim they still through busier life,\nTrust in pain and care and strife;\nThese like clouds o'er noontide blaze,\nTemper, not conceal his rays.",
          "Hallowed thus their every breath,\nDying they shall not \"see death;\"\nWith the Lord in Paradise,\nTill, like his, their bodies rise.\nNearer than the seraphim\nIn their flesh shall saints see him,\nWith the Father, in the Son,\nThrough the Spirit, ever one!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20182%20%20Blessed%20Are%20The%20Pure%20In%20Heart.mp3",
      "category": "sanctification"
  },
  {
      "number": "183",
      "title": "Come O My God The Promise Seal",
      "titleWithHymnNumber": "183 Come O My God The Promise Seal",
      "chorus": "",
      "verses": [
          "Come, O my God, the promise seal,\nThis mountain, sin, remove;\nNow in my waiting soul reveal\nThe virtue of thy love.",
          "Anger and sloth, desire and pride,\nThis moment be subdued!\nBe cast in the crimson tide\nOf my Redeemer's blood!",
          "Saviour, to thee my soul looks up,\nMy present Saviour Thou!\nIn all the confidence of hope,\nI claim the blessing now.",
          "‘Tis done! Thou dost this moment save,\nWith full salvation bless;\nRedemption through thy blood I have,\nAnd spotless love and peace.",
          ""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20183%20%20Come%20O%20My%20God%20The%20Promise%20Seal.mp3",
      "category": "sanctification"
  },
  {
      "number": "184",
      "title": "Saviour From Sin I Wait To Prove",
      "titleWithHymnNumber": "184 Saviour From Sin I Wait To Prove",
      "chorus": "",
      "verses": [
          "Saviour from sin, I wait to prove\nThat Jesus is thy healing name;\nTo lose, when perfected in love,\nWhate'er I have, or can, or am:\nI stay me on thy faithful word,\n\"The servant shall be as his Lord.\" ",
          "Didst thou not in the flesh appear\nSin to condemn, and man to save?\nThat perfect love might cast out fear?\nThat I thy mind in me might have\nIn holiness show forth thy praise,\nAnd serve thee all my spotless days? ",
          "Didst thou not die that I might live\nNo longer to myself, but thee?\nMight body, soul, and spirit give\nTo him who gave himself for me?\nCome then, my Master, and my God,\nTake the dear purchase of thy blood. ",
          "Thy own peculiar servant claim,\nFor thy own truth and mercy's sake;\nHallow in me thy glorious name;\nMe for thine own this moment take,\nAnd change, and throughly purify;\nThine only may I live and die."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20184%20%20Saviour%20From%20Sin%20I%20Wait%20To%20Prove.mp3",
      "category": "sanctification"
  },
  {
      "number": "185",
      "title": "The Thing My God Doth Hate",
      "titleWithHymnNumber": "185 The Thing My God Doth Hate",
      "chorus": "",
      "verses": [
          "The things my God doth hate,\nThat I no more may do,\nThy creature, Lord, again create,\nAnd all my soul renew;",
          "That blessed law of thine,\nJesu, to me impart;\nThy spirit's law of life divine,\nOh write it in my heart!",
          "Implant it deep within,\nWhence it may ne'er remove,\nThe law of liberty from sin,\nThe perfect law of love.",
          "Thy nature be my law,\nThy spotless sanctity,\nAnd sweetly ev'ry moment draw\nMy happy soul to thee;",
          "Soul of my soul remain,\nWho didst for all fulfil,\nIn me, O Lord fulfil again\nThy heav'nly father's will."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20185%20%20The%20Thing%20My%20God%20Doth%20Hate.mp3",
      "category": "sanctification"
  },
  {
      "number": "186",
      "title": "God Of All Power And Truth And Grace",
      "titleWithHymnNumber": "186 God Of All Power And Truth And Grace",
      "chorus": "He is coming again, He is coming again,\nThe very same Jesus, rejected of men;\nHe is coming again, He is coming again,\nWith pow'r and great glory, He is coming again!",
      "verses": [
          "Lift up your heads, pilgrims a-weary,\nSee day’s approach now crimson the sky;\nNight shadows flee, and your Belovèd,\nAwaited with longing, at last draweth nigh.",
          "Dark was the night, sin warred against us;\nHeavy the load of sorrow we bore;\nBut now we see signs of His coming;\nOur hearts glow within us, joy’s cup runneth o’er!",
          "O blessèd hope! O blissful promise!\nFilling our hearts with rapture divine;\nO day of days! Hail Thy appearing!\nThy transcendent glory forever shall shine!",
          "Even so come, precious Lord Jesus;\nCreation waits redemption to see;\nCaught up in clouds, soon we shall meet Thee;\nO blessèd assurance, forever with Thee! "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20186%20%20God%20of%20All%20Power%20and%20Truth%20&%20Grace.mp3",
      "category": "sanctification"
  },
  {
      "number": "187",
      "title": "Jesus All Atoning Lamb",
      "titleWithHymnNumber": "187 Jesus All Atoning Lamb",
      "chorus": "",
      "verses": [
          "JESUS, all-atoning Lamb,\nThine, and only thine, I am;\nTake my body, spirit, soul;\nOnly thou possess the whole.",
          "Fairer than the sons of men,\nDo not let me turn again,\nLeave the fountain-head of bliss,\nStoop to worldly happiness.",
          "All my treasure is above,\nAll my riches is thy love;\nWho the worth of love can tell?\nInfinite, unsearchable."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20187%20%20Jesus%20All%20-%20Atoning%20Lamb.mp3",
      "category": "sanctification"
  },
  {
      "number": "188",
      "title": "O Lord How Happy Should We Be",
      "titleWithHymnNumber": "188 O Lord How Happy Should We Be",
      "chorus": "",
      "verses": [
          "O Lord, how happy should we be\nIf we could cast our care on Thee,\nIf we from self could rest,\nAnd feel at heart that One above,\nIn perfect wisdom, perfect love,\nIs working for the best!",
          "Could we but kneel and cast our load,\nE'en while we pray, upon our God,\nThen rise with lightened cheer,\nSure that the Father, who is nigh\nTo still the famished raven's cry,\nWill hear in that we fear!",
          "Lord, make these faithless hearts of ours\nSuch lesson learns from birds and flowers;\nMake them from self to cease,\nLeave all things to a Father's will,\nAnd taste, before Him lying still,\nE'en in affliction, peace."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20188%20%20O%20Lord%20How%20Happy%20Should%20We%20be.mp3",
      "category": "sanctification"
  },
  {
      "number": "189",
      "title": "Take Time To Be Holy",
      "titleWithHymnNumber": "189 Take Time To Be Holy",
      "chorus": "",
      "verses": [
          "Take time to be holy, speak of with thy Lord;\nAbide in Him always, and feed on His Word;\nMake friends of God's children, help those who are weak;\nForgetting in nothing, His blessing to seek.",
          "Take time to be holy, let Him be thy Guide;\nAnd run not before Him, whatever betide;\nIn joy or in sorrow, still follow thy Lord,\nAnd, looking to Jesus, still trust in His word.",
          "Take time to be holy, be calm in thy soul;\nEach thought and each temper beneath His control:\nThus led by His Spirit to fountains of love,\nThou soon shalt be fitted for service above."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20189%20%20Take%20Time%20To%20Be%20Holy.mp3",
      "category": "sanctification"
  },
  {
      "number": "190",
      "title": "Called Unto Holiness",
      "titleWithHymnNumber": "190 Called Unto Holiness",
      "chorus": "\"Holiness unto the Lord,\" is our watchword and song,\n\"Holiness unto the Lord,\" as we're marching along:\nSing . . . it, shout it, loud . . . and long,\n\"Holiness unto the Lord,\" now and for ever.",
      "verses": [
          "\nCalled unto holiness,\" Church of our God,\nPurchased of Jesus, redeemed by His blood;\nCalled from the world and its idols to flee,\nCalled from the bondage of sin to be free.",
          "\"Called unto holiness,\" children of light,\nWalking with Jesus in garments of white;\nRaiment unsullied nor tarnished with sin,\nGod's Holy Spirit abiding within.",
          "\"Called unto holiness,\" praise His dear name,\nThis blessed secret to faith now made plain,\nNot our own righteousness, but Christ within,\nLiving and reigning, and saving from sin.",
          "\"Called unto holiness,\" glorious thought!\nUp from the wilderness wanderings brought\nOut from the shadows and darkness of night\nInto the Canaan of perfect delight.",
          "\"Called unto holiness,\" Bride of the Lamb,\nWaiting the Bridegroom's returning again;\nLift up your heads, for the day draweth near,\nWhen in His beauty the King shall appear."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20190%20%20Called%20Unto%20Holiness.mp3",
      "category": "sanctification"
  },
  {
      "number": "191",
      "title": "Come Holy Ghost All Quickening Fire",
      "titleWithHymnNumber": "191 Come Holy Ghost All Quickening Fire",
      "chorus": "",
      "verses": [
          "Come, Holy Ghost, all-quickening fire,\nCome, and my hallowed heart inspire,\nSprinkled with the atoning blood:\nNow to my soul Thyself reveal;\nThy mighty working let me feel,\nAnd know that I am born of God.",
          "Let earth no more my heart divide,\nWith Christ may I be crucified,\nTo Thee with my whole soul aspire;\nDead to the world, and all its toys,\nIts idle pomp, and fading joys,\nBe Thou alone my one desire.",
          "My will be swallowed up in Thee;\nLight in Thy light still may I see,\nBeholding Thee with open face:\nCalled the full power of faith to prove,\nLet all my hallowed heart be love,\nAnd all my sinless life be praise.",
          ""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20191%20%20Come%20Holy%20Ghost%20All%20-Quickening%20Fire.mp3",
      "category": "sanctification"
  },
  {
      "number": "192",
      "title": "O For A Heart To Praise My God",
      "titleWithHymnNumber": "192 O For A Heart To Praise My God",
      "chorus": "",
      "verses": [
          "O for a heart to praise my God,\na heart from sin set free;\na heart that's sprinkled with the blood\nso freely shed for me:",
          "A humble, lowly, contrite heart,\nbelieving, true, and clean,\nwhich neither life nor death can part\nfrom him that dwells within:",
          "A heart in every thought renewed,\nand full of love divine;\nperfect and right and pure and good —\na copy, Lord, of thine.",
          "Thy nature, gracious Lord, impart,\ncome quickly from above;\nwrite thy new name upon my heart,\nthy new best name of Love."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20192%20%20O%20For%20A%20Heart%20To%20Praise%20My%20God.mp3",
      "category": "sanctification"
  },
  {
      "number": "193",
      "title": "Another Year",
      "titleWithHymnNumber": "193 Another Year",
      "chorus": "",
      "verses": [
          "Another year is dawning, \na path unknown, untried.\nT’would fill me with foreboding,\nHad I no hand to Guide; \nBut He who walked beside me \nall through the yesteryear, \nWhatever may betide me,\nhas promised to be near.",
          "Another year to trust Him.\nYes, I can trust Him still. \nWho never yet has failed me\nas I have sought His will. \nHis rod and staff He giveth, \nto be my strength and stay,\nand tenderly He leadeth, \nalong the homeward way.",
          "Another year to serve Him,\nto labor for Him here, \nE’en while the shadows lengthen \nand night is drawing near.\nI no not when He’ll call me to lay my sickle by,\nOh, may I then be faithful while now the moments fly!",
          "Another year to love Him,\nWhom I have loved so long;\nanother year to praise Him In glad triumphant song.\nWhat’er the future holdeth of sorrow, toil, or pain\nHis precious love endureth forevermore the same.",
          "Another year with Jesus!\nI thank thee, Lord, today\nFor thy unfailing presence Along life’s rugged way.\nGuide me, O blest Redeemer; \nTeach me to do Thy will. \nAnd Thine own perfect purpose \nIn me each day fulfill."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20193%20%20Another%20Year.mp3",
      "category": "special occasions"
  },
  {
      "number": "194",
      "title": "O Day Of Rest And Gladness",
      "titleWithHymnNumber": "194 O Day Of Rest And Gladness",
      "chorus": "",
      "verses": [
          "O day of rest and gladness,\nO day of joy and light,\nO balm of care and sadness,\nmost beautiful, most bright;\non thee the high and lowly\nthrough ages joined in tune,\nsing \"Holy, holy, holy\"\nto the great God Triune.",
          "Today on weary nations\nthe heav'nly manna falls;\nto holy convocations\nthe silver trumpet calls,\nwhere gospel light is glowing\nwith pure and radiant beams,\nand living water flowing\nwith soul refreshing streams.",
          "New graces ever gaining\nfrom this our day of rest,\nwe reach the rest remaining\nto spirits of the blest.\nTo Holy Ghost be praises,\nto Father, and to Son;\nthe church her voice upraises\nto thee, blest Three in One."
      ],
      "sound": "",
      "category": "special occasions"
  },
  {
      "number": "195",
      "title": "Another Year Is Dawning",
      "titleWithHymnNumber": "195 Another Year Is Dawning",
      "chorus": "",
      "verses": [
          "Another year is dawning, dear Father let it be,\nIn working or in waiting, another year with Thee;\nAnother year of progress, another year of praise,\nAnother year of proving Thy presence all the days.",
          "Another year of service, of witness for Thy love;\nAnother year of training for holier work above;\nAnother year is dawning! Dear Father, let it be,\nOn earth, or else in heaven, another year for Thee."
      ],
      "sound": "",
      "category": "special occasions"
  },
  {
      "number": "196",
      "title": "Does Jesus Care",
      "titleWithHymnNumber": "196 Does Jesus Care",
      "chorus": "O yes, He cares, I know He cares,\nHis heart is touched with my grief;\nWhen the days are weary,\nThe long night dreary,\nI know my Saviour cares.",
      "verses": [
          "Does Jesus care when my heart is pained\nToo deeply for mirth or song;\nAs the burdens press, and the cares distress,\nAnd the way grows weary and long?",
          "Does Jesus care when my way is dark\nWith a nameless dread and fear?\nAs the daylight fades into deep night shades,\nDoes He care enough to be near?",
          "Does Jesus care when I've tried and failed\nTo resist some temptation strong;\nWhen for my deep grief there is no relief,\nThough my tears flow all the night long?",
          "Does Jesus care when I've said goodbye\nTo the dearest on earth to me,\nAnd my sad heart aches till it nearly breaks,\nIs it aught to Him? Does He care?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20196%20%20Does%20Jesus%20Care.mp3",
      "category": "The lord's love and care"
  },
  {
      "number": "197",
      "title": "Love Found A Way",
      "titleWithHymnNumber": "197 Love Found A Way",
      "chorus": "Love found a way to redeem my soul,\nLove found a way that could make me whole;\nLove sent my Lord to the cross of shame,\nLove found a way, O praise His holy name!",
      "verses": [
          "Wonderful love that rescued me, \nSunk deep in sin,\nGuilty and vile as I could be\nNo hope within;\nWhen ev'ry ray of light had fled, \nO glorious day!\nRaising my soul from out the dead, \nLove found a way.",
          "Love bro't my Saviour here to die \nOn Calvary,\nFor such a sinful wretch as I,\nHow can it be?\nLove bridged the gulf 'twixt me and Heav'n, \nTaught me to pray;\nI am redeemed, set free, forgiv'n,\nLove found a way. ",
          "Love opened wide the gates of light \nTo Heav'n's domain,\nWhere in eternal pow'r and might \nJesus shall reign;\nLove lifted me from depths of woe \nTo endless day,\nThere was no help in earth below,\nLove found a way. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20197%20%20Love%20Found%20%20A%20%20Way.mp3",
      "category": "The lord's love and care"
  },
  {
      "number": "198",
      "title": "His Love Can Never Fail",
      "titleWithHymnNumber": "198 His Love Can Never Fail",
      "chorus": "His love can never fail,\nHis love can never fail;\nMy soul is satisfied to know\nHis love can never fail.",
      "verses": [
          "1 I do not ask to see the way\nMy feet will have to tread;\nBut only that my soul may feed\nUpon the living bread.\n'Tis better far that I should walk\nBy faith close to His side, \nI may not know the way I go,\nBut oh, I know my Guide. ",
          "2 And if my feet would go astray,\nThey cannot, for I know\nThat Jesus guides my falt'ring steps,\nAs joyfully I go.\nAnd tho' I may not see His face,\nMy faith is strong and clear\nThat in each hour of sore distress,\nMy Savior will be near.",
          "3 I will not fear, tho' darkness come\nAbroad o'er all the land,\nIf I may only feel the touch\nOf His own loving hand.\nAnd tho' I tremble when I think\nHow weak I am, how frail,\nMy soul is satisfied to know\nHis love can never fail. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20198%20%20His%20Love%20Can%20Never%20Fail.mp3",
      "category": "The lord's love and care"
  },
  {
      "number": "199",
      "title": "Resting In His Love",
      "titleWithHymnNumber": "199 Resting In His Love",
      "chorus": "I am resting, resting,\nResting in His love; I am resting in His love,\nResting in the shelter of His love.",
      "verses": [
          "God has shown His loving face\nFrom His throne in heav'n above;\nAnd I've found a resting-place,\nIn the shelter of his love",
          "What the care of his life oppress \nWhen the sky is dark above;\nI can always find rest \nIn the shelter of His Love",
          "O, If you were never blest,\nwith this peace from heaven above;\nThere's for you a wonderous rest, \nIn the shelter of his love"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20199%20%20Resting%20In%20His%20Love.mp3",
      "category": "The lord's love and care"
  },
  {
      "number": "200",
      "title": "The Ninety And Nine",
      "titleWithHymnNumber": "200 The Ninety And Nine",
      "chorus": "",
      "verses": [
          "\nThere were ninety and nine that safely lay\nIn the shelter of the fold.\nBut one was out on the hills away,\nFar off from the gates of gold.\nAway on the mountains wild and bare.\nAway from the tender Shepherd's care.\nAway from the tender Shepherd's care.",
          "But none of the ransomed ever knew\nHow deep were the waters crossed;\nNor how dark was the night the Lord passed through\nEre He found His sheep that was lost.\nOut in the desert He heard its cry,\nSick and helpless and ready to die;\nSick and helpless and ready to die.",
          "\"Lord, whence are those blood drops all the way\nThat mark out the mountain's track?\"\n\"They were shed for one who had gone astray\nEre the Shepherd could bring him back.\"\n\"Lord, whence are Thy hands so rent and torn?\"\n\"They are pierced tonight by many a thorn;\nThey are pierced tonight by many a thorn.\"",
          "And all through the mountains, thunder riven\nAnd up from the rocky steep,\nThere arose a glad cry to the gate of Heaven,\n\"Rejoice! I have found My sheep!\"\nAnd the angels echoed around the throne,\n\"Rejoice, for the Lord brings back His own!\nRejoice, for the Lord brings back His own!\""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20200%20%20The%20Ninety%20and%20Nine.mp3",
      "category": "The lord's love and care"
  },
  {
      "number": "201",
      "title": "Love Lifted Me",
      "titleWithHymnNumber": "201 Love Lifted Me",
      "chorus": "Love lifted me! Love lifted me! \nWhen nothing else could help,\nLove lifted me.\nLove lifted me! Love lifted me! \nWhen nothing else could help,\nLove lifted me.",
      "verses": [
          "I was sinking deep in sin,\nfar from the peaceful shore,\nvery deeply stained within,\nsinking to rise no more;\nbut the Master of the sea\nheard my despairing cry,\nfrom the waters lifted me;\nnow safe am I. ",
          "All my heart to Him i give\nEver to Him I'll cling in His presence live\nEver His praises sing,\nLove so mighty and so true \nmerits my soul's best songs \nFaithful, loving service too,\nto him belongs",
          "Souls in danger, look above,\nJesus completely saves;\nhe will lift you by his love\nout of the angry waves.\nHe’s the Master of the sea,\nbillows his will obey;\nhe your Savior wants to be -\nbe saved today. [Refrain]"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20201%20%20Love%20Lifted%20Me.mp3",
      "category": "The lord's love and care"
  },
  {
      "number": "202",
      "title": "Wonderful Story Of Love",
      "titleWithHymnNumber": "202 Wonderful Story Of Love",
      "chorus": "Won...der...ful \nWon...der...ful\nWon...der...ful\nWonderful, story of love.",
      "verses": [
          "Wonderful story of love;\nTell it to me again;\nWonderful story of love;\nWake the immortal strain!\nAngels with rapture announce it,\nShepherds with wonder receive it;\nSinner, O won’t you believe it?",
          "Wonderful story of love;\nThough you are far away;\nWonderful story of love;\nStill He doth call today;\nCalling from Calvary’s mountain,\nDown from the crystal bright fountain,\nE’en from the dawn of creation,",
          "Wonderful story of love;\nJesus provides a rest;\nWonderful story of love;\nFor all the pure and blest,\nRest in those mansions above us,\nWith those who’ve gone on before us,\nSinging the rapturous chorus,",
          ""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20202%20%20Wonderful%20Story%20of%20Love.mp3",
      "category": "The lord's love and care"
  },
  {
      "number": "203",
      "title": "There Is No Love Like The Love Of Jesus",
      "titleWithHymnNumber": "203 There Is No Love Like The Love Of Jesus",
      "chorus": "Jesus' love, precious love,\nBoundless and pure and free!\nOh, turn to that love, weary, wand'ring soul,\nJesus pleadeth for thee!",
      "verses": [
          "There is no love like the love of Jesus,\nNever to fail or fall,\nTill into the fold of the peace of God,\nHe has gathered us all.",
          "There is no eye like the eye of Jesus,\npiercing so fa away; Ne'er out of the sight of  it's tender\nlight Can wanderer stray",
          "There is no voice like the voice of Jesus,\nTender and sweet its chime \nLike musical ring of a flowing spring \nin the bright summertime",
          "4 There is no heart like the heart of Jesus,\nFill'd with a tender love;\nNo throb of woe that our hearts can know,\nBut He feeds it above.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20203%20%20There%20Is%20No%20Love%20Like%20the%20Loveof%20Jesus.mp3",
      "category": "The lord's love and care"
  },
  {
      "number": "204",
      "title": "Ye Must Be Born Again",
      "titleWithHymnNumber": "204 Ye Must Be Born Again",
      "chorus": "Ye must be born again,\nYe must be born again;\nI verily, verily say unto thee,\nYe must be born again.\"",
      "verses": [
          "A ruler once came to Jesus by night\nTo ask Him the way of salvation and light;\nThe Master made answer in words true and plain,\n\"Ye must be born again.\nYe must be born again,\nYe must be born again;\nI verily, verily say unto thee,\nYe must be born again.\"",
          "Ye children of men, attend to the word\nSo solemnly uttered by Jesus the Lord;\nAnd let not this message to you be in vain,\n\"Ye must be born again.\nYe must be born again,\nYe must be born again;\nI verily, verily say unto thee,\nYe must be born again.\"",
          "O ye who would enter that glorious rest,\nAnd sing with the ransomed the song of the blest,\nThe life everlasting if ye would obtain,\n\"Ye must be born again.\nYe must be born again,\nYe must be born again;\nI verily, verily say unto thee,\nYe must be born again.\"",
          "A dear one in heaven thy heart yearns to see,\nAt the beautiful gate may be watching for thee,\nThen list to the note of this solemn refrain,\n\"Ye must be born again.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20204%20%20Ye%20Must%20Be%20Born%20Again.mp3",
      "category": "warning & judgment"
  },
  {
      "number": "205",
      "title": "Have You Counted The Cost",
      "titleWithHymnNumber": "205 Have You Counted The Cost",
      "chorus": "Have you counted the cost, if your soul should be lost,\nThough you gain the whole world for your own?\nEven now it may be that the line you have crossed,\nHave you counted, have you counted the cost?",
      "verses": [
          "There's a line that is drawn by rejecting our Lord,\nWhere the call of His Spirit is lost …\nAnd you hurry along with the pleasure-mad throng –\nHave you counted, have you counted the cost?",
          "You may barter your hope of eternity's morn,\nFor a moment of joy at the most …\nFor the glitter of sin and the things it will win –\nHave you counted, have you counted the cost?",
          "While the door of His mercy is open to you,\nEre the depth of His love you exhaust …\nWon't you come and be healed, won't you whisper \"I yield –\nI have counted, I have counted the cost.\""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20205%20%20Have%20You%20Counted%20The%20Cost.mp3",
      "category": "warning & judgment"
  },
  {
      "number": "206",
      "title": "Where Will You Spend Eternity",
      "titleWithHymnNumber": "206 Where Will You Spend Eternity",
      "chorus": "",
      "verses": [
          "Where will you spend eternity?\nThis question comes to you and me!\nTell me, what shall your answer be?\nWhere will you spend eternity?\nEternity! eternity!\nWhere will you spend eternity?",
          "Leaving the strait and narrow way,\nGoing the downward road today,\nSad will their final ending be,\nLost thro’ a long eternity!\nEternity! eternity!\nLost thro’ a long eternity!",
          "Repent, believe, this very hour,\nTrust in the Savior’s grace and pow'r.\nThen will your joyous answer be,\nSaved thro’ a long eternity!\nEternity! eternity!\nSaved thro’ a long eternity!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20206%20%20Where%20Will%20You%20Spend%20Eternity.mp3",
      "category": "warning & judgment"
  },
  {
      "number": "207",
      "title": "There's A Great Day Coming",
      "titleWithHymnNumber": "207 There's A Great Day Coming",
      "chorus": "Are you ready? Are you ready?\nAre you ready for the judgment day?\nAre you ready? Are you ready\nFor the judgment day?",
      "verses": [
          "\nThere's a great day coming, a great day coming,\nThere's a great day coming by and by;\nWhen the saints and the sinners shall be parted left and right,\nAre you ready for that day to come?",
          "There's a bright day coming, a bright day coming,\nThere's a bright day coming by and by;\nBut its brightness shall only come to them that love the Lord,\nAre you ready for that day to come?",
          "There's a sad day coming, a sad day coming,\nThere's a sad day coming by and by;\nWhen the sinner shall hear his doom, \"Depart, I know ye not,\"\nAre you ready for that day to come?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20207%20%20There's%20%20A%20%20Great%20Day%20Coming.mp3",
      "category": "warning & judgment"
  },
  {
      "number": "208",
      "title": "The Great Judgement Morning",
      "titleWithHymnNumber": "208 The Great Judgement Morning",
      "chorus": "And O, what a weeping and wailing,\nAs the lost were told of their fate;\nThey cried for the rocks and the mountains,\nThey prayed, but their prayer was too late.",
      "verses": [
          "\nI dreamed that the great judgment morning\nHad dawned, and the trumpet had blown;\nI dreamed that the nations had gathered\nTo judgment before the white throne;\nFrom the throne came a bright shining angel,\nAnd stood on the land and the sea,\nAnd swore with his hand raised to heaven,\nThat time was no longer to be.",
          "The rich man was there, but his money\nHad melted and vanished away;\nA pauper he stood in the judgment,\nHis debts were too heavy to pay;\nThe great man was there, but his greatness,\nWhen death came, was left far behind!\nThe angel that opened the records,\nNot a trace of his greatness could find.",
          "The widow was there with the orphans,\nGod heard and remembered their cries;\nNo sorrow in heaven for ever,\nGod wiped all the tears from their eyes;\nThe gambler was there and the drunkard,\nAnd the man that had sold them the drink,\nWith the people who gave him the license,\nTogether in hell they did sink.",
          "The moral man came to the judgment,\nBut his self-righteous rags would not do;\nThe men who had crucified Jesus\nHad passed off as moral men too;\nThe soul that had put off salvation,\n\"Not tonight; I'll get saved by and by,\nNo time now to think of religion!\"\nAt last they had found time to die."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20208%20%20The%20Great%20Judgement%20Morning.mp3",
      "category": "warning & judgment"
  },
  {
      "number": "209",
      "title": "I Will Not Forget Thee",
      "titleWithHymnNumber": "209 I Will Not Forget Thee",
      "chorus": "I will not forget thee or leave thee;\nIn my hands I'll hold thee, in my arms I'll fold thee;\nI will not forget thee or leave thee;\nI am thy Redeemer, I will care for thee.",
      "verses": [
          "\nSweet is the promise - \"I will not forget thee,\"\nNothing can molest or turn my soul away;\nE'en tho' the night be dark within the valley,\nJust beyond is shining an eternal day.",
          "Trusting the promise - \"I will not forget thee,\"\nOnward will I go with songs of joy and love;\nTho' earth despise me, tho' my friends forsake me,\nI shall be remembered in my home above.",
          "When at the golden portals I am standing,\nAll my tribulations, all my sorrows past,\nHow sweet to hear the blessed proclamation,\n\"Enter, faithful servant, welcome home at last!\""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20209%20%20I%20Will%20Not%20Forget%20Thee.mp3",
      "category": "The lord's love and care"
  },
  {
      "number": "210",
      "title": "Open My Eyes That I May See",
      "titleWithHymnNumber": "210 Open My Eyes That I May See",
      "chorus": "",
      "verses": [
          "Open my eyes, that I may see\nGlimpses of truth Thou hast for me;\nPlace in my hands the wonderful key\nThat shall unclasp and set me free.\n \nOpen my ears, that I may hear\nVoices of truth Thou sendest clear;\nAnd while the wave notes fall on my ear,\nEverything false will disappear.\n \nOpen my mouth, and let me bear,\nGladly the warm truth everywhere;\nOpen my heart and let me prepare\nLove with Thy children thus to share.",
          "Open my way, that i may bring\nTrophies of grace to Thee, my King\nEchoed in love Thy word shall out ring\nSweet as the note that angels sing \nSilently now i wait for thee\nReady, my God, Thy will to see\nOpen my way, illuminate me, Spirit Divine!\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20210%20%20Open%20My%20Eyes%20That%20I%20May%20See.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "211",
      "title": "Crown Him With Many Crowns",
      "titleWithHymnNumber": "211 Crown Him With Many Crowns",
      "chorus": "",
      "verses": [
          "Crown him with many crowns,\nthe Lamb upon his throne.\nHark! how the heavenly anthem drowns\nall music but its own.\nAwake, my soul, and sing\nof him who died for thee,\nand hail him as thy matchless king\nthrough all eternity.",
          "Crown him the Lord of love;\nbehold his hands and side,\nrich wounds, yet visible above,\nin beauty glorified;\nno angels in the sky\ncan fully bear that sight,\nbut downward bends their burning eye\nat mysteries so bright.",
          "Crown him the Lord of years,\nthe potentate of time,\ncreator of the rolling spheres,\nineffably sublime.\nAll hail, Redeemer, hail!\nfor thou hast died for me;\nthy praise shall never, never fail\nthroughout eternity.\n"
      ],
      "sound": "",
      "category": "adoration"
  },
  {
      "number": "212",
      "title": "Jesus Shall Reign",
      "titleWithHymnNumber": "212 Jesus Shall Reign",
      "chorus": "",
      "verses": [
          "Jesus shall reign where'er the sun\ndoes its successive journeys run,\nhis kingdom stretch from shore to shore,\ntill moons shall wax and wane no more.",
          "People and realms of every tongue\ndwell on his love with sweetest song,\nand infant voices shall proclaim\ntheir early blessings on his name.",
          "Blessings abound where'er he reigns:\nthe prisoners leap to lose their chains,\nthe weary find eternal rest,\nand all who suffer want are blest.",
          "Let every creature rise and bring\nthe highest honors to our King,\nangels descend with songs again,\nand earth repeat the loud amen. "
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20%20212%20%20Jesus%20Shall%20Reign%20Where'er%20The%20Sun.mp3",
      "category": "adoration"
  },
  {
      "number": "213",
      "title": "Rejoice The Lord Is King",
      "titleWithHymnNumber": "213 Rejoice The Lord Is King",
      "chorus": "",
      "verses": [
          "Rejoice, the Lord is King:\nYour Lord and King adore!\nRejoice, give thanks and sing,\nAnd triumph evermore.\nLift up your heart,\nLift up your voice!\nRejoice, again I say, rejoice!",
          "His kingdom cannot fail,\nHe rules o'er earth and heav'n;\nThe keys of death and hell\nAre to our Jesus giv'n:\nLift up your heart,\nLift up your voice!\nRejoice, again I say, rejoice!",
          "Rejoice in glorious hope!\nOur Lord and judge shall come\nAnd take His servants up\nTo their eternal home:\nLift up your heart,\nLift up your voice!\nRejoice, again I say, rejoice!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20213%20%20Rejoice%20The%20Lord%20Is%20King.mp3",
      "category": "adoration"
  },
  {
      "number": "214",
      "title": "All Hail The Power Of Jesus",
      "titleWithHymnNumber": "214 All Hail The Power Of Jesus",
      "chorus": "",
      "verses": [
          "All hail the power of Jesus' name!\nLet angels prostrate fall.\nBring forth the royal diadem,\nand crown him Lord of all.\nBring forth the royal diadem,\nand crown him Lord of all!",
          "Let every tongue and every tribe\nresponsive to his call,\nto him all majesty ascribe,\nand crown him Lord of all.\nTo him all majesty ascribe,\nand crown him Lord of all!",
          "Oh, that with all the sacred throng\nwe at his feet may fall!\nWe'll join the everlasting song\nand crown him Lord of all.\nWe'll join the everlasting song\nand crown him Lord of all. "
      ],
      "sound": "",
      "category": "adoration"
  },
  {
      "number": "215",
      "title": "Ohappy Day That Fixed My Choice",
      "titleWithHymnNumber": "215 Ohappy Day That Fixed My Choice",
      "chorus": "",
      "verses": [
          "O happy day, that fixed my choice\nOn Thee, my Saviour and my God!\nWell may this glowing heart rejoice,\nAnd tell its raptures all abroad.",
          "O happy bond, that seals my vows\nTo Him Who merits all my love!\nLet cheerful anthems fill His house,\nWhile to that sacred shrine I move.",
          "'Tis done: the great transaction's done!\nI am the Lord's and He is mine;\nHe drew me, and I followed on;\nCharmed to confess the voice divine.",
          "Now rest, my long divided heart,\nFixed on this blissful centre, rest.\nHere have I found a nobler part;\nHere heavenly pleasures fill my breast.",
          "High heaven, that heard the solemn vow,\nThat vow renewed shall daily hear,\nTill in life's latest hour I bow\nAnd bless in death a bond so dear.",
          ""
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20215%20O%20Happy%20Day%20That%20Fixed%20My%20Choice.mp3",
      "category": "special occasions"
  },
  {
      "number": "216",
      "title": "More About Jesus Would I Know",
      "titleWithHymnNumber": "216 More About Jesus Would I Know",
      "chorus": "More, more about Jesus,\nMore, more about Jesus;\nMore of His saving fullness see,\nMore of His love who died for me.",
      "verses": [
          "More about Jesus would I know,\nMore of His grace to others show;\nMore of His saving fullness see,\nMore of His love who died for me. ",
          "More about Jesus let me learn,\nMore of His holy will discern;\nSpirit of God, my teacher be,\nShowing the things of Christ to me.",
          "More about Jesus, in His Word,\nHolding communion with my Lord;\nHearing His voice in every line,\nMaking each faithful saying mine.",
          "More about Jesus on His throne,\nRiches in glory all His own;\nMore of His kingdom's sure increase;\nMore of His coming, Prince of Peace.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20216%20More%20About%20Jesus%20Would%20I%20Know.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "217",
      "title": "O Perfect Love All Human Thought Transcending",
      "titleWithHymnNumber": "217 O Perfect Love All Human Thought Transcending",
      "chorus": "",
      "verses": [
          "O perfect Love, all human thought transcending, \nlowly we kneel in prayer before thy throne, \nthat theirs may be the love which knows no ending, \nwhom thou in sacred vow dost join in one. ",
          "Grant them the joy which brightens earthly sorrow; \ngrant them the peace which calms all earthly strife; \ngrant them the vision of the glorious morrow \nthat will reveal eternal love and life. "
      ],
      "sound": "",
      "category": "christian life"
  },
  {
      "number": "218",
      "title": "Love Divine All Loves",
      "titleWithHymnNumber": "218 Love Divine All Loves",
      "chorus": "",
      "verses": [
          "\nLove divine, all loves excelling,\nJoy of heaven, to earth come down;\nFix in us Thy humble dwelling;\nAll Thy faithful mercies crown.\nJesus, Thou art all compassion,\nPure, unbounded love Thou art;\nVisit us with Thy salvation;\nEnter every trembling heart.",
          "Come, Almighty to deliver,\nLet us all Thy life receive;\nSuddenly return, and never,\nNever more Thy temples leave:\nThee we would be always blessing,\nServing as Thy hosts above,\nPray, and praise Thee without ceasing,\nGlory in Thy perfect love.",
          "Finish then Thy new creation;\nPure and spotless let us be;\nLet us see Thy great salvation,\nPerfectly restored in Thee:\nChanged from glory into glory,\nTill in heaven we take our place,\nTill we cast our crowns before Thee,\nLost in wonder, love, and praise."
      ],
      "sound": "",
      "category": "The lord's love and care"
  },
  {
      "number": "219",
      "title": "More More Holiness Give Me",
      "titleWithHymnNumber": "219 More More Holiness Give Me",
      "chorus": "",
      "verses": [
          "More holiness give me, \nMore striving within;\nMore patience in suff'ring,\nMore sorrow for sin;\nMore faith in my Savior,\nMore sense of His care.\nMore joy in His service, \nMore purpose in prayer.",
          "More purity give me, \nMore strength to o’ercome;\nMore freedom from earth-stains,\nMore longings for home;\nMore fit for the kingdom, \nMore used would I be;\nMore blessèd and holy, \nMore, Savior, like Thee."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20219%20More%20Holiness%20Give%20Me%20More%20Striving%20Within.mp3",
      "category": "sanctification"
  },
  {
      "number": "220",
      "title": "When I Saw The Cleansing Fountain",
      "titleWithHymnNumber": "220 When I Saw The Cleansing Fountain",
      "chorus": "I will praise Him! I will praise Him!\nPraise the Lamb for sinners slain;\nGive Him glory, all ye people,\nFor His blood can wash away each stain.",
      "verses": [
          "1 When I saw the cleansing fountain,\nOpen wide for all my sin,\nI obeyed the Spirit’s wooing\nWhen He said, “Wilt thou be clean?”",
          "Tho' the way seems straight and narrow,\nAll I claimed was swept away;\nMy ambitions, plans and wishes,\nAt my feet in ashes lay.",
          "Blessed be the name of Jesus!\nI’m so glad He took me in;\nHe’s forgiven my transgressions,\nHe has cleansed my heart from sin.",
          "Glory, glory to the Father!\nGlory, glory to the Son!\nGlory, glory to the Spirit!\nGlory to the Three in One!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20220%20When%20I%20Saw%20The%20Cleansing%20Fountain.mp3",
      "category": "blood of jesus"
  },
  {
      "number": "221",
      "title": "Lets Not Thy Hands Be Slack",
      "titleWithHymnNumber": "221 Lets Not Thy Hands Be Slack",
      "chorus": "",
      "verses": [
          "Let not thy hands be slack,\nLive not in vain;\nOut on life's lonely track\nMen toil in pain.\nPlay thou a brother's part,\nStrength, love and hope impart;\nBid thou the fainting heart\nLook up again.",
          "Let not thy hands be slack,\nHaste to the fray!\nDream not of turning back;\nLife is not play!\nGird thou thy armor on,\nFight till the battle's won,\nThen shall thy Lord's \"Well done,\"\nMore than repay!",
          "Let not thy hands be slack,\n\"Fear not! be strong!\"\nCease not to make attack\nOn ev'ry wrong!\nPress on for Truth and Right,\nHold high the Gospel Light,\nExpel the dirge of night\nWith heaven's Song!",
          "Let not thy hands be slack,\nThe days fly fast.\nLost moments come not back\nFrom the dark past.\nThen be not slack of hand!\nHelp thou the weak to stand!\nTo God and Fatherland\nGive all thou hast!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20221%20Let%20Not%20Thy%20Hands%20Be%20Slack.mp3",
      "category": "evangelism"
  },
  {
      "number": "222",
      "title": "Speed Thy Servants Saviour Speed Them",
      "titleWithHymnNumber": "222 Speed Thy Servants Saviour Speed Them",
      "chorus": "",
      "verses": [
          "Speed thy servants, Saviour, speed them; \nThou art Lord of winds and waves; \nThey were bound, but thou hast freed them; \nNow they go to free the slaves: \nBe thou with them, 'Tis thine arm alone that save. \n'Tis thine arm alone that saves. ",
          "Where no fruit appears to cheer them, \nAnd they seem to toil in vain, \nThen in mercy, Lord, draw near them, \nThen their sinking hopes sustain: \nThus supported, \nLet their zeal revive again. \nThus supported, \nLet their zeal revive again. ",
          "In the midst of opposition \nLet them trust, O Lord, in thee; \nWhen success attends their mission, \nLet thy servants humbler be: \nNever leave them \nTill thy face in heav'n they see. \nNever leave them \nTill thy face in heav'n they see. ",
          "There to reap in joy forever, \nFruit that grows from seed here sown \nThere to be with him who never Ceases to preserve His\nown; And with gladness, Give the praise to Him alone\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20222%20%20Speed%20Thy%20Servents%20Saviour%20Speed%20Them.mp3",
      "category": "evangelism"
  },
  {
      "number": "223",
      "title": "I Gave My Life For Thee",
      "titleWithHymnNumber": "223 I Gave My Life For Thee",
      "chorus": "",
      "verses": [
          "I gave my life for thee,\nMy precious blood I shed,\nThat thou might'st ransomed be,\nAnd quickened from the dead;\nI gave, I gave My life for thee – \nWhat hast thou giv'n for me?",
          "I suffered much for thee,\nMore than thy tongue can tell,\nOf bitt'rest agony\nTo rescue thee from hell;\nI've borne, I've borne it all for thee –\nWhat hast thou borne for me?",
          "And I have brought to thee,\nDown from My home above,\nSalvation full and free,\nMy pardon and My love;\nI bring, I bring rich gifts to thee –\nWhat hast thou brought to Me?"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20223%20I%20Gave%20My%20Life%20For%20Thee.mp3",
      "category": "christian life"
  },
  {
      "number": "224",
      "title": "Oh The Bitter Shame And Sorrow",
      "titleWithHymnNumber": "224 Oh The Bitter Shame And Sorrow",
      "chorus": "",
      "verses": [
          "O the bitter shame and sorrow,\nThat a time could ever be,\nWhen I let the Savior’s pity\nPlead in vain, and proudly answered,\nAll of self, and none of Thee!",
          "Day by day His tender mercy,\nHealing, helping, full and free,\nSweet and strong, and ah! so patient,\nBrought me lower, while I whispered,\nLess of self, and more of Thee!",
          "Higher than the highest heavens,\nDeeper than the deepest sea,\nLord, Thy love at last hath conquered:\nGrant me now my supplication,\nNone of self, and all of Thee!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20224%20Oh%20The%20Bitter%20Shame%20and%20Sorrow.mp3",
      "category": "grace & forgiveness"
  },
  {
      "number": "225",
      "title": "Burn Fire Of God",
      "titleWithHymnNumber": "225 Burn Fire Of God",
      "chorus": "",
      "verses": [
          "Burn fire of God! my ransomed soul possessing;\nPure fire Thou art, and I would dwell in Thee.\nLight of my life, true source of every blessing,\nGrant all my days one holy flame to be.",
          "Burn fire of God! Thy cloven tongue bestowing,\nBaptising me with heavenly energy.\nTouched with live coals from off Thine altar glowing,\nMy purgèd  lips shall speak alone of Thee.",
          "Burn fire of God! with seven-fold refining,\nTill, mirrored from my deeps Thine eyes shall see\nIn purest gold Thy perfect image shining:\nThy Christ revealed in clear irradiancy.",
          "Burn fire of God! by Thine own love transcending,\nLet all I hold be Thine, and Thine alone!\nHeart, mind and will a sacrifice ascending,\nConsumed by fire from out Thy fiery Throne."
      ],
      "sound": "",
      "category": "holy spirit"
  },
  {
      "number": "226",
      "title": "Thy Blessed Will Divine",
      "titleWithHymnNumber": "226 Thy Blessed Will Divine",
      "chorus": "Thy blessed will divine, with joy I make it mine,\nMy heart shall be Thy throne, and Thine alone.\nChoose Thou the path I tread and whither, I am led,\nHelp me to follow on, O mighty Saviour.",
      "verses": [
          "I want my life to be all filled with praise to Thee,\nMy precious Lord divine Who died for me,\nLet all my will be Thine, Controlled by love divine\nLive out in me Thy life, O Mighty Saviour.",
          "A pilgrim born anew, a stranger going through,\nNot of this world am I, since I am Thine.\nWeaned from its passing show, transformed Thy love to know,\nHold Thou my hand in Thine, O mighty Saviour.",
          "When evil foes assail and almost would prevail,\nIn that dark hour be Thou my strength and shield.\nLend then Thy strong embrace, uphold me by Thy grace,\nIn weakness be my strength, O mighty Saviour.",
          "Yea, choose the path for me, although I may not see,\nThe reason Thou dost will to lead me so.\nI know the toilsome way will lead to realms of day,\nWhere I shall dwell with Thee, O mighty Saviour."
      ],
      "sound": "",
      "category": "commitment & consecration"
  },
  {
      "number": "227",
      "title": "Nearer My God To Thee",
      "titleWithHymnNumber": "227 Nearer My God To Thee",
      "chorus": "",
      "verses": [
          "Nearer, my God, to Thee, nearer to Thee!\nE’en though it be a cross that raiseth me,\nStill all my song shall be, nearer, my God, to Thee.",
          "There let the way appear, steps unto Heav’n;\nAll that Thou sendest me, in mercy given;\nAngels to beckon me nearer, my God, to Thee.",
          "Then, with my waking thoughts bright with Thy praise,\nOut of my stony griefs Bethel I’ll raise;\nSo by my woes to be nearer, my God, to Thee.",
          "Or, if on joyful wing cleaving the sky,\nSun, moon, and stars forgot, upward I’ll fly,\nStill all my song shall be, nearer, my God, to Thee.",
          "There in my Father’s home, safe and at rest,\nThere in my Savior’s love, perfectly blest;\nAge after age to be, nearer my God to Thee.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20227%20Nearer%20My%20God%20To%20Thee.mp3",
      "category": "commitment & consecration"
  },
  {
      "number": "228",
      "title": "O Why Not Tonight",
      "titleWithHymnNumber": "228 O Why Not Tonight",
      "chorus": "O why not tonight? O why not to-night?\nWilt thou ne saved?\nThen why not tonight?",
      "verses": [
          "Oh, do not let thy Lord depart,\nAnd close thine eyes against the light;\nPoor sinner, harden not thy heart;\nBe saved, O tonight.",
          "Tomorrow’s sun may never rise\nTo bless thy long-deluded sight;\nThis is the time!—oh, then, be wise!\nBe saved, O tonight.",
          "Our God in pity lingers still;\nOh, wilt thou thus His love requite?\nRenounce at length thy stubborn will,\nBe saved, O tonight.",
          "Our blessèd Lord refuses none\nWho would to Him their souls unite;\nBelieve, obey the work is done\nBe saved, O tonight.\n"
      ],
      "sound": "",
      "category": "invitation"
  },
  {
      "number": "229",
      "title": "Hold The Fort",
      "titleWithHymnNumber": "229 Hold The Fort",
      "chorus": "\"Hold the fort, for I am coming,\"\nJesus signals still;\nWave the answer back to heaven,\n\"By Thy grace we will.\"",
      "verses": [
          "\nHo, my comrades! see the signal\nWaving in the sky!\nReinforcements now appearing,\nVictory is nigh!",
          "See the mighty host advancing,\nSatan leading on:\nMighty men around us falling,\nCourage almost gone!",
          "See the glorious banner waving!\nHear the trumpet blow!\nIn our Leader's name we'll triumph\nOver every foe!",
          "Fierce and long the battle rages,\nBut our help is near:\nOnward comes our great Commander,\nCheer, my comrades, cheer!"
      ],
      "sound": "",
      "category": "conflict & victory"
  },
  {
      "number": "230",
      "title": "Bring Your Vessel Not A Few",
      "titleWithHymnNumber": "230 Bring Your Vessel Not A Few",
      "chorus": "He will fill your heart today to overflowing.\nAs the Lord commandeth you,\n“Bring your vessels, not a few.\"\nHe will fill your heart today to overflowing\nWith the Holy Ghost and power.",
      "verses": [
          "Are you longing for the fullness\nOf the blessing of the Lord\nIn your heart and life today?\nClaim the promise of your Father;\nCome according to His Word,\nIn the blessèd, old time way.",
          "Bring your empty earthen vessels,\nClean through Jesus’ precious blood.\nCome, ye needy, one and all;\nAnd in human consecration\nWait before the throne of God\nTill the Holy Ghost shall fall.",
          "Like the cruse of oil unfailing\nIs His grace forevermore,\nAnd His love unchanging still;\nAnd according to His promise,\nWith the Holy Ghost and power\nHe will every vessel fill.",
          ""
      ],
      "sound": "",
      "category": "holy spirit"
  },
  {
      "number": "231",
      "title": "Send The Light",
      "titleWithHymnNumber": "231 Send The Light",
      "chorus": "Send the light, the blessed Gospel light;\nLet it shine from shore to shore!\nSend the light, and let its radiant beams,\nLight the world forevermore!",
      "verses": [
          "There's a call comes ringing o'er the restless wave,\n\"Send the light! Send the light!\"\nThere are souls to rescue, there are souls to save,\nSend the light! Send the light! ",
          "We have heard the Macedonian call today,\n\"Send the light! Send the light!\"\nAnd a golden off'ring at the cross we lay,\nSend the light! Send the light!",
          "Let us pray that grace may everywhere abound,\n\"Send the light! Send the light!\"\nAnd a Christ-like spirit everywhere be found,\nSend the light! Send the light!",
          "Let us not grow weary in the work of love,\n\"Send the light! Send the light!\"\nLet us gather jewels for a crown above,\nSend the light! Send the light!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20231%20Send%20The%20Light.mp3",
      "category": "evangelism"
  },
  {
      "number": "232",
      "title": "Blest Be The Tie That Binds",
      "titleWithHymnNumber": "232 Blest Be The Tie That Binds",
      "chorus": "",
      "verses": [
          "\nBlest be the tie that binds\nOur hearts in Christian love;\nThe fellowship of kindred minds\nIs like to that above.",
          "We share our mutual woes,\nOur mutual burdens bear;\nAnd often for each other flows\nThe sympathising tear.",
          "When we asunder part\nIt gives us inward pain;\nBut we shall still be joined in heart,\nAnd hope to meet again.",
          "This glorious hope revives\nOur courage by the way;\nWhile each in expectation lives,\nAnd longs to see the day.",
          "From sorrow, toil and pain,\nAnd sin, we shall be free,\nAnd perfect love and friendship reign\nThrough all eternity."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20232%20Blest%20Be%20The%20%20Tie%20That%20Binds.mp3",
      "category": "christian life"
  },
  {
      "number": "233",
      "title": "Stand Up Stand Up For Jesus",
      "titleWithHymnNumber": "233 Stand Up Stand Up For Jesus",
      "chorus": "",
      "verses": [
          "\nStand up, stand up for Jesus!\nYe soldiers of the Cross;\nLift high His royal banner,\nIt must not suffer loss:\nFrom victr'y unto victr'y\nHis army shall He lead,\nTill ev'ry foe is vanquished\nAnd Christ is Lord indeed.",
          "Stand up, stand up for Jesus!\nStand in His strength alone;\nThe arm of flesh will fail you;\nYe dare not trust your own:\nPut on the gospel armour,\nEach piece put on with prayer;\nWhere duty calls or danger,\nBe never wanting there.",
          "Stand up, stand up for Jesus!\nThe strife will not be long;\nThis day the noise of battle,\nThe next the victor's song:\nTo him that overcometh,\nA crown of life shall be;\nHe with the King of glory\nShall reign eternally."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20233%20Stand%20Up%20Stand%20Up%20For%20Jesus.mp3",
      "category": "conflict & victory"
  },
  {
      "number": "234",
      "title": "O Lord With One Accord",
      "titleWithHymnNumber": "234 O Lord With One Accord",
      "chorus": "",
      "verses": [
          "O Lord \"with one accord\" \nwe gather round Thy holy throne\nto worship the alone.\nNow send from heaven the Holy ghost\nBe this another Pentecost",
          "Where is the mighty wind That\nshook the holy place that gladdened\nevery mind and brightened every face? \nAnd where the cloven tongues of flames\nThat marked each follower of the Lamb?",
          "There is no chance in Thee, Lord God the Holy Ghost,\nThy glorious majesty Is as a Pentecost!\nO may our loosened tongues proclaim \nThat Thou our God art still the same",
          "And may the living wave That issues from on high,\nwhose golden waters lave thy eternally \nFlow doen in power on us to-day, \nAnd none shall go unblessed away",
          "Anoint us with Thy grace, to yield ourselves to Thee\nTo run our daily grace with joy and energy \nuntil we hear the Bridegroom say, \n\"Rise up my love and come and stay\"\n"
      ],
      "sound": "",
      "category": "holy spirit"
  },
  {
      "number": "235",
      "title": "The Holy Spirit's Power",
      "titleWithHymnNumber": "235 The Holy Spirit's Power",
      "chorus": "",
      "verses": [
          "The holy Spirit's power\nYe need th master said \"So wait till comes \nthe hours when on you He is shed so praise\ndid all their soul employ as tarried they \nwith fervent joy",
          "Their loosened tongues were filled\nwith strange and wondrous words;\nHeaven's life their hearts has thrilled,\nGod's goodness they declared;\n\"And unto all, \"th' Apostle said, \n\"Is the gift, since Christ has bled.\"",
          "Come now, ye sons of men This message now received ,\nThe holy spirit given To all believe;\nYe, too, may know His mighty power,\nAnd speak with tongues this very hour.",
          "Then charity divine\nYour yaerning hearts shall fill\nT'wards those who now repine, \nHeld in sin's bondage still; \nFor these your zeal shall never tire\nTo snatch them from the everlsating fire.\n"
      ],
      "sound": "",
      "category": "holy spirit"
  },
  {
      "number": "236",
      "title": "Lord God The Holyghost",
      "titleWithHymnNumber": "236 Lord God The Holyghost",
      "chorus": "",
      "verses": [
          "Lord God, the Holy Ghost,\nIn this accepted hour,\nAs on the day of Pentecost,\nDescend in all Thy power.",
          "Like mighty rushing wind\nUpon the waves beneath,\nMove with one impulse every mind;\nOne soul, one feeling breathe.",
          "The young, the old inspire\nWith wisdom from above;\nAnd give us hearts and tongues of fire,\nTo pray, and praise, and love.",
          "Spirit of light, explore\nAnd chase our gloom away,\nWith luster shining more and more\nUnto the perfect day.",
          "Spirit of truth, be Thou\nIn life and death, our guide;\nO Spirit of adoption, now\nMay we be sanctified!"
      ],
      "sound": "",
      "category": "holy spirit"
  },
  {
      "number": "237",
      "title": "Peace Perfect Peace",
      "titleWithHymnNumber": "237 Peace Perfect Peace",
      "chorus": "",
      "verses": [
          "Peace, perfect peace, in this dark world of sin?\nThe blood of Jesus whispers peace within.",
          "Peace, perfect peace, with sorrows surging round?\nOn Jesus' bosom naught but calm is found.",
          "Peace, perfect peace, with loved ones far away?\nIn Jesus' keeping we are safe, and they.",
          "Peace, perfect peace, our future all unknown?\nJesus we know, and He is on the throne.",
          "Peace, perfect peace, death shadowing us and ours?\nJesus has vanquished death and all its powers.",
          "It is enough: earth's struggles soon shall cease,\nAnd Jesus call us to heaven's perfect peace\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20237%20Peace%20Perfect%20Peace.mp3",
      "category": "conflict & victory"
  },
  {
      "number": "238",
      "title": "Thou Hidden Source Of Calm Repose",
      "titleWithHymnNumber": "238 Thou Hidden Source Of Calm Repose",
      "chorus": "",
      "verses": [
          "Thou hidden source of calm repose,\nthou all-sufficient love divine,\nmy help and refuge from my foes,\nsecure i am, if thou art mine:\nand lo, from sin, and grief, and shame,\nI hide me, Jesus, in thy name.",
          "Jesus, my all in all thou art:\nmy rest in toil, my ease in pain,\nthe medicine of my broken heart,\nin war my peace, in loss my gain,\nmy smile beneath the tyrant's frown,\nin shame my glory and my crown;",
          "In want my plentiful supply,\nin weakness my almighty power,\nin bonds my perfect liberty,\nmy light in Satan's darkest hour,\nin grief my joy unspeakable,\nmy life in death, my heaven,my all."
      ],
      "sound": "",
      "category": "christ our saviour"
  },
  {
      "number": "239",
      "title": "One There Is Above All Others",
      "titleWithHymnNumber": "239 One There Is Above All Others",
      "chorus": "",
      "verses": [
          "One there is, above all others,\nwell deserves the name of Friend;\nhis is love beyond a brother's,\ncostly, free, and knows no end.\nThey who once his kindness prove\nfind it everlasting love.",
          "When he lived on earth abased,\n\"Friend of sinners\" was his name.\nNow above all glory raised,\nhe rejoices in the same;\nstill he calls them brethren, friends,\nand to all their wants attends.",
          "O for grace our hearts to soften!\nTeach us, Lord, at length to love;\nwe, alas! forget too often\nwhat a Friend we have above:\nbut when home our souls are brought,\nwe will love you as we ought."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20239%20One%20There%20is%20Above%20All%20Others.mp3",
      "category": "christ our saviour"
  },
  {
      "number": "240",
      "title": "Jesus Is The Same Forever",
      "titleWithHymnNumber": "240 Jesus Is The Same Forever",
      "chorus": "",
      "verses": [
          "Jesus Is The Same Forever\nAs Of Old, So Now Today;\nAll The Host Of Hell Endeavour\nVainly To Obstruct His Sway,\nIn His People’s Hearts He\nReigneth,\nFinishes What He Begins;\nJesus Still “All Power”\nRetaineth,\nSaves His People From Their\nSins.",
          "Jesus Is The Same Forever;\nStill He Says “In Me Abide,”\nFrom His Ha No Power Can Sever\nThose Who In Their Lord Confide,\nSweetly From All Care He Frees Us,\nOurs The Comfort His The Shame\nBlessed Saviour; Precious Jesus\nThere’s No Music Like Thy Name."
      ],
      "sound": "",
      "category": "assurance & confidence"
  },
  {
      "number": "241",
      "title": "I've Found The Pearl Of Greatest Peice",
      "titleWithHymnNumber": "241 I've Found The Pearl Of Greatest Peice",
      "chorus": "",
      "verses": [
          "I've found the pearl of greatest price,\nMy heart doth sing for joy:\nAnd sing I must, a Christ I have;\nO what a Christ have I?",
          "Christ is a prophet, priest and king,\nA Prophet full of light,\nA Priest that stands 'twixt God and man,\nA King that rules with might.",
          "Christ's manhood is a temple, where\nThe altar God doth rest;\nMy Christ, he is the sacrifice,\nMy Christ he is the priest.",
          "My Christ he is the Lord of lords,\nHe is the King of kings;\nHe is the Sun of righteousness,\nWith healing in his wings.",
          "My Christ, he is the Tree of Life,\nWhich in God's garden grows;\nWhose fruit does feed, whose leaves do heal;\nMy Christ is Sharon's rose.",
          "Christ is my meat, Christ is my drink,\nMy physic and my health,\nMy peace, my strength, my joy, my crown,\nMy glory and my wealth.",
          "Christ is my father, and my friend,\nMy brother and my love;\nMy head, my hope, my counselor,\nMy advocate above.",
          "My Christ, he is the Heaven of heavens,\nMy Christ what shall I call?\nMy Christ is first, my Christ is last,\nMy Christ is all in all."
      ],
      "sound": "",
      "category": "adoration"
  },
  {
      "number": "242",
      "title": "A Good High Priest Is Come",
      "titleWithHymnNumber": "242 A Good High Priest Is Come",
      "chorus": "",
      "verses": [
          "A good High Priest is come,\nsupplying Aaron's place,\nand taking up his room,\ndispensing life and grace;\nthe law by Aaron's priesthood came,\nbut grace and truth by Jesus' name.",
          "He died, but lives again,\nand by the throne He stands,\nthere shows how He was slain,\nopening His piercèd hands;\nour Priest abides and pleads the cause\nof us who have transgressed His laws.",
          "I other priests disclaim,\nand laws and off'rings too;\nnone but the bleeding Lamb\nthe mighty work can do;\nHe shall have all the praise: for He \nhas loved, and died, and lives for me."
      ],
      "sound": "",
      "category": "grace & forgiveness"
  },
  {
      "number": "243",
      "title": "Standing On The Promises",
      "titleWithHymnNumber": "243 Standing On The Promises",
      "chorus": "Standing, standing,\nStanding on the promises of God my Saviour;\nStanding, standing,\nI'm standing on the promises of God.",
      "verses": [
          "Standing on the promises of Christ my King,\nThrough eternal ages let His praises ring;\nGlory in the highest I will shout and sing,\nStanding on the promises of God.",
          "Standing on the promises that cannot fail,\nWhen the howling storms of doubt and fear assail,\nBy the living Word of God I shall prevail,\nStanding on the promises of God.",
          "Standing on the promises I now can see\nPerfect, present cleansing in the blood for me;\nStanding in the liberty where Christ makes free,\nStanding on the promises of God.",
          "Standing on the promises of Christ the Lord,\nBound to Him eternally by love's strong cord,\nOvercoming daily by the Spirit's sword,\nStanding on the promises of God.",
          "Standing on the promises I cannot fall,\nList'ning ev'ry moment to the Spirit's call,\nResting in my Saviour, as my all in all,\nStanding on the promises of God."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20243%20Standing%20On%20The%20Promises.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "244",
      "title": "All Things In Jesus",
      "titleWithHymnNumber": "244 All Things In Jesus",
      "chorus": "All that I want is in Jesus.\nHe satisfies, joy He supplies;\nLife would be worthless without Him;\nAll things in Jesus I find.",
      "verses": [
          "Friends all around me are trying to find\nWhat the heart yearns for by sin undermined;\nI have the secret, I know where 'tis found:\nOnly true pleasures in Jesus abound.",
          "Some carry burdens whose weight has for years\nCrushed them with sorrow and blinded with tears.\nYet One stands ready to help them just now,\nIf they will humbly in penitence bow.",
          "No other name thrills the joy chords within,\nAnd through none else is remission of sin.\nHe knows the pain of the heart sorely tried.\nBoth need and want will by Him be supplied.",
          "Jesus is all this poor world needs today.\nBlindly they strive, for sin darkens their way.\nO to draw back the grim curtains of night,\nOne glimpse of Jesus and all will be bright!"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20244%20All%20Things%20in%20Jesus.mp3",
      "category": "assurance & confidence"
  },
  {
      "number": "245",
      "title": "Is Your Life A Channel Of Blessing",
      "titleWithHymnNumber": "245 Is Your Life A Channel Of Blessing",
      "chorus": "Make me a channel of blessing today,\nMake me a channel of blessing, I pray;\nMy life possessing, my service blessing,\nMake me a channel of blessing today.",
      "verses": [
          "Is your life a channel of blessing?\nIs the love of God flowing through you?\nAre you telling the lost of the Savior?\nAre you ready His service to do? ",
          "Is your life a channel of blessing?\nAre you burdened for those that are lost?\nHave you urged upon those who are straying\nThe Savior Who died on the cross?",
          "Is your life a channel of blessing?\nIs it a daily telling for Him?\nHave you spoken the Word of salvation\nTo those who are dying in sin? ",
          "We cannot be channels of blessing\nIf our lives are not free from known sin;\nWe will barriers be and a hindrance\nTo those we are trying to win."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20245%20Is%20Your%20Life%20A%20Channel%20of%20Blessing.mp3",
      "category": "christian life"
  },
  {
      "number": "246",
      "title": "O Brother Life S Journey Beginning",
      "titleWithHymnNumber": "246 O Brother Life S Journey Beginning",
      "chorus": "God help you to follow His banner,\nAnd serve Him wherever you go;\nAnd when you are tempted, my brother,\nGod give you the grace to say No!",
      "verses": [
          "O brother, life’s journey beginning,\nWith courage and firmness arise!\nLook well to the course thou art choosing;\nBe earnest, be watchful, and wise!\nRemember—two paths are before thee,\nAnd both thy attention invite;\nBut one leadeth on to destruction,\nThe other to joy and delight.",
          "O brother, yield not to the tempter,\nNo matter what others may do;\nStand firm in the strength of the Master,\nBe loyal, be faithful, and true!\nEach trial will make you the stronger,\nIf you, in the name of the Lord,\nFight manfully under your Leader,\nObeying the voice of His Word.",
          "O brother, the Savior is calling!\nBeware of the danger of sin;\nResist not the voice of the Spirit,\nThat whispers so gently within.\nGod calls you to enter His service—\nTo live for Him here, day by day;\nAnd share by and by in the glory\nThat never shall vanish away.\n"
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20246%20O%20Brother%20Life's%20journey%20Beginning.mp3",
      "category": "conflict & victory"
  },
  {
      "number": "247",
      "title": "The Finished The Messiah Dies",
      "titleWithHymnNumber": "247 The Finished The Messiah Dies",
      "chorus": "",
      "verses": [
          "'Tis finished! the Messiah dies, \ncut off for sins, but not his own. \nAccomplished is the sacrifice, \nthe great redeeming work is done. ",
          "'Tis finished! All my guilt and pain, \nI want no sacrifice beside; \nfor me, for me the Lamb is slain; \n'tis finished! I am justified. ",
          "The reign of sin and death is o'er, \nand all may live from sin set free; \nSatan hath lost his mortal power; \n'tis swallowed up in victory. "
      ],
      "sound": "",
      "category": "christ our saviour"
  },
  {
      "number": "248",
      "title": "The Mercy Seat",
      "titleWithHymnNumber": "248 The Mercy Seat",
      "chorus": "",
      "verses": [
          "From ev'ry stormy wind that blows,\nfrom ev'ry swelling tide of woes,\nthere is a calm, a sure retreat;\n'tis found beneath the mercy seat.",
          "There is a spot where spirits blend,\nwhere friend holds fellowship with friend,\ntho' sundered far; by faith they meet\naround the common mercy seat.",
          "Ah, whither could we flee for aid,\nwhen tempted, desolate, dismayed,\nor how the hosts of hell defeat,\nhad suff'ring saints no mercy seat?",
          "There, there on eagle wings we soar,\nand time and sense seem all no more,\nand heav'n comes down our souls to greet,\nand glory crowns the mercy seat.",
          "O may my hand forget her skill,\nmy tongue be silent, cold, and still,\nthis bounding heart forget to beat,\nif I forget the mercy seat."
      ],
      "sound": "",
      "category": "conflict & victory"
  },
  {
      "number": "249",
      "title": "Come Sing The Praise Of Jesus",
      "titleWithHymnNumber": "249 Come Sing The Praise Of Jesus",
      "chorus": "Praise and glory be to Jesus,\npraise and glory be to Jesus,\npraise and glory be to Jesus,\nfor Jesus Christ is king.",
      "verses": [
          "Come sing the praise of Jesus\nSing His love with hearts aflame,\nSing his wondrous birth of Mary\nwhen to save the world He came;\nTell the life he lived for others\nand His mighty deeds proclaim\nfor Jesus Christ is King.",
          "When foes arose and slew Him,\nHe was victor in the fight;\nOver death and hell He triumphed\nIn His resurrection-might;\nHe has raised our fallen manhood\nAnd enthroned it in the height,\nFor Jesus Christ is King.",
          "There’s joy for all who serve Him,\nMore than human tongue can say;\nThere is pardon for the sinner,\nAnd the night is turned to day;\nThere is healing for our sorrows,\nThere is music all the way,\nFor Jesus Christ is king.",
          "We witness to His beauty,\nAnd we spread His love abroad;\nAnd we cleave the hosts of darkness,\nWith the Spirit’s piercing sword;\nWe will lead the souls in prison\nTo the freedom of the Lord,\nFor Jesus Christ is king.",
          "To Jesus be the glory,\nThe dominion, and the praise;\nHe is Lord of all creation,\nHe is guide of all our ways;\nAnd the world shall be His empire\nIn the fulness of the days\nFor Jesus Christ is king.",
          ""
      ],
      "sound": "",
      "category": "adoration"
  },
  {
      "number": "250",
      "title": "For My Sake And The Gospel S Go",
      "titleWithHymnNumber": "250 For My Sake And The Gospel S Go",
      "chorus": "",
      "verses": [
          "'For my sake and the gospel's, go\nand tell redemption's story';\nhis heralds answer, 'Be it so,\nand thine, Lord, all the glory!'\nThey preach his birth, his life, his cross,\nthe love of his atonement,\nfor whom they count the world but loss,\nhis Easter, his enthronement. ",
          "Still on and on the anthems spread\nOf alleluia voices,\nIn concert with the holy dead\nThe warrior church rejoices;\nTheir snow white robes are washed in blood,\nTheir golden harps are ringing;\nEarth and the paradise of God\nOne triumph song are singing.",
          "He comes, whose advent trumpet drowns\nthe last of time's evangels,\nImmanuel, crowned with many crowns,\nthe Lord of saints and angels.\nO Life, Light, Love, the great I AM,\nTriune, who changest never,\nthe throne of God and of the Lamb\nis thine, and thine for ever."
      ],
      "sound": "http://www.dclmfl.org/Hymns/Hymns%20151%20-250/GHS%20250%20For%20my%20Sake%20and%20The%20Gospel's%20%20Go.mp3",
      "category": "evangelism"
  },
  {
      "number": "251",
      "title": "Only Remembered",
      "titleWithHymnNumber": "251 Only Remembered",
      "chorus": "Only remembered, only remembered,\nOnly remembered by what we have done,\nThus would we pass from the earth and its toiling,\nOnly remembered by what we have done.",
      "verses": [
          "Fading away like the stars of the morning\nLosing their light in the glorious sun,\nThus would we pass from the earth and its toiling,\nOnly remembered by what we have done.",
          "Shall we be missed, tho' by others succeeded,\nReaping the fields we in springtime have sown?\nYes, but the sowers must pass from their labours,\nEver remembered by what they have done.",
          "Only the truth that in life we have spoken,\nOnly the seed that on earth we have sown,\nThese shall pass onward when we are forgotten,\nFruits of the harvest and what we have done.",
          "Oh, when the Saviour shall make up His jewels,\nWhen the bright crowns of rejoicing are won,\nThen shall His weary and faithful disciples\nAll be remembered by what they have done."
      ],
      "sound": "",
      "category": "christian service & reward"
  },
  {
      "number": "252",
      "title": "It Is Morning In My Heart",
      "titleWithHymnNumber": "252 It Is Morning In My Heart",
      "chorus": "It is morning, it is morning in my heart;\nJesus made the gloomy shadows all depart.\nSongs of gladness now I sing,\nFor since Jesus is my King\nIt is morning, it is morning in my heart.",
      "verses": [
          "All the darkness of the night has passed away,\nIt is morning in my heart;\nI am living in the sunlight of the day,\nIt is morning in my heart.",
          "I can the songbirds their refain, \nIt is morning in my heart;\nAnd i know that life for me begins\nagain, It is morning in my heart",
          "Christ has made the world a paradise to me,\nIt is morning in my heart;\nEvery duty in the light of love I see,\nIt is morning in my heart.",
          "Joy has come to dwell with me forever \nit is morning in my heart; \ni shall sing when it reach the other shore,\nIt is morning in my heart."
      ],
      "sound": "",
      "category": "adoration"
  },
  {
      "number": "253",
      "title": "My Portion Forever",
      "titleWithHymnNumber": "253 My Portion Forever",
      "chorus": "Take, take the world, with all its gilded toys,\nTake, take the world, I covet not its joys,\nMine is a wealth no moth nor rust destroys;\nHe is my portion forever.",
      "verses": [
          "All, all to Jesus, I consecrate anew;\nHe is my portion forever,\nOnly His glory henceforth will I pursue:\nHe is my portion forever.",
          "All, all to Jesus, my trusting heart can say:\nHe is my portion forever.\nLed by His mercy, I'm walking ev'ry day:\nHe is my portion forever.",
          "Though He may try me, this blessed truth I know:\nHe is my portion forever,\nHe will not leave me, His promise tells me so;\nHe is my portion forever.",
          "All, all to Jesus, I cheerfully resign:\nHe is my portion forever;\nI have the witness that He, my Lord, is mine;\nHe is my portion forever."
      ],
      "sound": "",
      "category": "commitment & consecration"
  },
  {
      "number": "254",
      "title": "Lower And Lower",
      "titleWithHymnNumber": "254 Lower And Lower",
      "chorus": "Lower and lower, down at Thy cross,\nAll the world’s treasure counting but dross;\nDown at Thy feet, blessed Savior, we fall,\nLower, still lower, Christ all in all!",
      "verses": [
          "Lower and lower, dear Lord, at Thy feet,\nSeeking Thy Spirit, Thy mercy so sweet;\nDown in our need, blessed Master, we fall,\nLower and lower; be Thou all in all.",
          "Lower and lower, dear Savior, we pray,\nLosing the self-life still more every day;\nWeak and unworthy, we’re looking above:\nEmpty us wholly; then fill us with love.",
          "Lower and lower; yet higher we rise\nLifted in Christ, freed from all the earth ties:\nHumbly we follow the way of the cross.\nThen, crowns of glory, and gain for all loss.\n"
      ],
      "sound": "",
      "category": "assurance & confidence"
  },
  {
      "number": "255",
      "title": "Let The Fire Fall",
      "titleWithHymnNumber": "255 Let The Fire Fall",
      "chorus": "Let the fire fall, let the fire fall,\nLet the fire from heaven fall;\nWe are waiting and expecting,\nNow in faith, dear Lord, we call;\nLet the fire fall, let the fire fall,\nOn Thy promise we depend;\nFrom the glory of Thy presence\nLet the Pentecostal fire descend.",
      "verses": [
          "\nThey were gathered in an upper chamber,\nAs commanded by the risen Lord,\nAnd the promise of the Father\nThere they sought with one accord,\nWhen the Holy Ghost from heaven descended\nLike a rushing wind and tongues of fire:\nSo dear Lord, we seek Thy blessing,\nCome with glory now our hearts inspire.",
          "As Elijah we would raise the altar\nFor our testimony clear and true,\nChrist the Saviour, loving Healer,\nComing Lord, Baptizer too,\nEver flowing grace and full salvation,\nFor a ruined race Thy love has planned;\nFor this blessed revelation,\nFor Thy written Word we dare to stand.",
          "'Tis the covenanted promise given,\nTo as many as the Lord shall call,\nTo the Fathers and their children,\nTo Thy people, one and all;\nSo rejoicing in Thy Word unfailing,\nWe draw nigh in faith Thy power to know;\nCome, O come Thou burning Spirit,\nSet our hearts with heav'nly fire aglow.",
          "With a living coal from off Thy altar\nTouch our lips to swell Thy wondrous praise,\nTo extol Thee, bless, adore Thee,\nAnd our songs of worship raise;\nLet the cloud of glory now descending,\nFill our hearts with holy ecstasy;\nCome in all Thy glorious fulness,\nBlessed Holy Spirit, have Thy way."
      ],
      "sound": "",
      "category": "holy spirit"
  },
  {
      "number": "256",
      "title": "Redeemed",
      "titleWithHymnNumber": "256 Redeemed",
      "chorus": "Redeemed, redeemed,\nRedeemed by the blood of the Lamb;\nRedeemed, redeemed,\nHis child, and forever, I am.",
      "verses": [
          "Redeemed—how I love to proclaim it!\nRedeemed by the blood of the Lamb;\nRedeemed through His infinite mercy,\nHis child, and forever, I am.",
          "Redeemed and so happy in Jesus,\nNo language my rapture can tell;\nI know that the light of His presence\nWith me doth continually dwell.",
          "I think of my blessed Redeemer,\nI think of Him all the day long;\nI sing, for I cannot be silent;\nHis love is the theme of my song.",
          "I know I shall see in His beauty\nThe King in whose way I delight;\nWho lovingly guardeth my footsteps,\nAnd giveth me songs in the night."
      ],
      "sound": "",
      "category": "grace & forgiveness"
  },
  {
      "number": "257",
      "title": "Jesus Send More Labourers",
      "titleWithHymnNumber": "257 Jesus Send More Labourers",
      "chorus": "Oh Lord, but start with me\nJesus, begin with me\nWho will go for You, Lord?\nWho will go for You, Lord?\nHere I am, Lord Send me\nSend me, Lord Send me",
      "verses": [
          "Jesus, send more labourers\nFor, Lord, we see the need\nThe land is ready for harvest\nThe fields are ripe indeed",
          "Lord, we love our country\nCountless lives to be won\nJesus, bring revival\nThat through us Your will be done",
          "Lord, we sense Your moving\nTouching our lives with power\nWe are ready to serve You\nTo go this day, this hour"
      ],
      "sound": "",
      "category": "evangelism"
  },
  {
      "number": "258",
      "title": "Oh To Be Like Thee",
      "titleWithHymnNumber": "258 Oh To Be Like Thee",
      "chorus": "Oh, to be like Thee, Oh! to be like Thee,\nBlessed Redeemer, pure as Thou art;\nCome in Thy sweetness, come in Thy fulness;\nStamp Thine own image deep on my heart.",
      "verses": [
          "Oh, to be like Thee, blessed Redeemer,\nThis is my constant longing and prayer;\nGladly I'll forfeit all of earth's treasures,\nJesus, Thy perfect likeness to wear.",
          "O, to be like Thee, full of compassion,\nLoving, forgiving, tender and kind,\nHelping the helpless, cheering the fainting,\nSeeking the wand'ring sinner to find.",
          "Oh, to be like Thee, lowly in spirit,\nHoly and harmless, patient and brave;\nMeekly enduring cruel reproaches,\nWilling to suffer, others to save.",
          "Oh, to be like Thee, Lord, I am coming,\nNow to receive th' anointing divine,\nAll that I am and have I am bringing,\nLord, from this moment all shall be Thine.",
          "Oh, to be like Thee, while I am pleading,\nPour out Thy Spirit, fill with Thy love,\nMake me a temple meet for Thy dwelling,\nFit me for life and heaven above."
      ],
      "sound": "",
      "category": "prayer"
  },
  {
      "number": "259",
      "title": "More Like The Master",
      "titleWithHymnNumber": "259 More Like The Master",
      "chorus": "Take Thou my heart, I would be Thine alone;\nTake Thou my heart and make it all Thine own.\nPurge me from sin, O Lord, I now implore,\nWash me and keep me Thine forevermore.",
      "verses": [
          "More like the Master I would ever be,\nMore of His meekness, more humility;\nMore zeal to labor, more courage to be true,\nMore consecration for work He bids me do. ",
          "More like the Master is my daily prayer;\nMore strength to carry crosses I must bear;\nMore earnest effort to bring His kingdom in,\nMore of His Spirit, the wanderer to win.",
          "More like the Master I would live and grow;\nMore of His love to others I would show;\nMore self-denial, like His in Galilee,\nMore like the Master I long to ever be."
      ],
      "sound": "",
      "category": "christian life"
  },
  {
      "number": "260",
      "title": "Gracious Spirit Dwell With Me",
      "titleWithHymnNumber": "260 Gracious Spirit Dwell With Me",
      "chorus": "",
      "verses": [
          "Gracious Spirit, dwell with me:\nI myself would gracious be;\nand with words that help and heal\nwould thy life in mine reveal;\nand with actions bold and meek\nwould for Christ my Savior speak.",
          "Mighty Spirit, dwell with me:\nI myself would mighty be;\nmighty so as to prevail\nwhere unaided man must fail;\never by a mighty hope\npressing on and bearing up.",
          "Holy Spirit, dwell with me:\nI myself would holy be;\nseparate from sin, I would\nchoose and cherish all things good,\nand whatever I can be,\ngive to him who gave me thee!"
      ],
      "sound": "",
      "category": "invitation"
  }
]


const main = async () => {
  try{
    // await prisma.
    await prisma.hymn.deleteMany();

    // hymnList.map(async (hymn)=> {
    //     await prisma.hymn.create({
    //         data: {
    //             number: hymn.number,
    //             title: hymn.title,
    //             titleWithHymnNumber:hymn.titleWithHymnNumber,
    //             chorus: hymn.chorus,
    //             verses: hymn.verses,
    //             sound: hymn.sound,
    //             category: hymn.category
    //         },
    //     });
    // })


    for (let index = 0; index < hymnList.length; index++) {
      const hymn = hymnList[index];
      await prisma.hymn.upsert({
        where: {
            id: hymn.number,
          },
          create: {
            id: hymn.number,
            number: hymn.number,
            title: hymn.title,
            titleWithHymnNumber:hymn.titleWithHymnNumber,
            chorus: hymn.chorus,
            verses: hymn.verses,
            sound: hymn.sound,
            favourite: false,
            category: hymn.category
        },
        update: {},
      });
    }
    console.log(`Database has been seeded. 🌱`);
  }
  catch(error){
    throw error;
  }
}

main().catch((err) => {
  console.warn("Error While generating Seed: \n", err);
})