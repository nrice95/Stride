# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Athlete.create(username: "DemoUser", password: "starwars") # id = 1

Activity.create(
  athlete_id: 1,
  title: "First activity",
  description: "It's my first activity",
  activity_type: "Run",
  distance: "7.5",
  duration_hours: 0,
  duration_minutes: 46,
  duration_seconds: 57,
  run_type: "Workout",
  distance_units: "miles",
  date: "2018-11-27",
  time: "19:00"
)

Activity.create(
  athlete_id: 1,
  title: "Second activity",
  description: "I did another one!",
  activity_type: "Run",
  distance: "6.35",
  duration_hours: 0,
  duration_minutes: 42,
  duration_seconds: 35,
  run_type: "Workout",
  distance_units: "miles",
  date: "2018-11-7",
  time: "20:30"
)

Activity.create(
  athlete_id: 1,
  title: "10k+",
  description: "Extra leg at the end, gotta get Chipotle",
  activity_type: "Run",
  distance: "6.83",
  duration_hours: 0,
  duration_minutes: 44,
  duration_seconds: 30,
  run_type: "Workout",
  distance_units: "miles",
  date: "2018-11-10",
  time: "21:00"
)

Activity.create(
  athlete_id: 1,
  title: "Usual 10k",
  description: "Quick today, getting chilly out",
  activity_type: "Run",
  distance: "6.35",
  duration_hours: 0,
  duration_minutes: 41,
  duration_seconds: 55,
  run_type: "Workout",
  distance_units: "miles",
  date: "2018-11-13",
  time: "20:30"
)

Activity.create(
  athlete_id: 1,
  title: "Lunch Run",
  description: "Felt slow, but I guess not too bad?",
  activity_type: "Run",
  distance: "7.51",
  duration_hours: 0,
  duration_minutes: 49,
  duration_seconds: 30,
  run_type: "Workout",
  distance_units: "miles",
  date: "2018-11-16",
  time: "12:40"
)

Activity.create(
  athlete_id: 1,
  title: "aA Loop",
  description: "Needed that one",
  activity_type: "Run",
  distance: "7.59",
  duration_hours: 0,
  duration_minutes: 48,
  duration_seconds: 30,
  run_type: "Workout",
  distance_units: "miles",
  date: "2018-11-19",
  time: "21:15"
)

Activity.create(
  athlete_id: 1,
  title: "Evening aA Loop",
  description: "Almost lost my fingers",
  activity_type: "Run",
  distance: "7.50",
  duration_hours: 0,
  duration_minutes: 46,
  duration_seconds: 57,
  run_type: "Workout",
  distance_units: "miles",
  date: "2018-11-21",
  time: "21:20"
)

Activity.create(
  athlete_id: 1,
  title: "Late Run",
  description: "Needed that one too, first time after a 5 day break (yikes!)",
  activity_type: "Run",
  distance: "6.36",
  duration_hours: 0,
  duration_minutes: 41,
  duration_seconds: 45,
  run_type: "Workout",
  distance_units: "miles",
  date: "2018-11-27",
  time: "21:40"
)

Route.create(
  athlete_id: 1,
  polyline:
   "yrswFpeueMd@zC~AtL??dDsA??^^dAdCPXt@`AvA`BbApAz@dAr@t@FHBFFNDLDP@NDrB?JFnCFzBD~@@n@BvAChAKtAO`AG\\Mv@]~AEh@Cf@@b@Dv@Bf@@`@?pA@z@??Bv@BX??^ERG??NEv@[RI??RKhCmAjB_AbAk@|@m@v@m@JI??r@m@dDcDbAy@z@q@dAm@fAk@jAi@`Aa@~@[r@QtE{@nA[zAi@pAi@qAh@{Ah@oAZuEz@s@P_AZaA`@k@V_@PgAj@eAl@_CjBeDbDs@l@??KHMJi@`@}@l@cAj@kB~@}CxA??SHw@ZOD??SF_@D????@h@?XCRCN??[MOIi@[??[UUQUSSWWa@sAuB_@k@q@eAy@oAs@gAeAgBWc@??Ua@m@gAg@{@aB_Ci@u@g@w@oAmBu@gAw@iAuEsGKOIK??kAmB??VAFAHCbEiB??tEoB??zBy@xDwA??_BuLe@{CSI",
  activity_type: "Run",
  title: "First Route",
  center_lat: 40.7379863410218,
  center_lng: -74.4969950653499,
  distance: 5404.55,
  description: "It's my first route"
)

Route.create(
  athlete_id: 1,
  polyline:
   "sqswFljueM~AtL??wBv@}DxA??sD|Aa@P??cEhBIBG@W@??jAlB??TZdAzAnCvDv@hAt@fAnAlBHL\\h@jCtDf@z@l@fALTFJ??Vb@dAfBr@fAx@nAp@dA~AfCRXV`@RVTRTPZT??u@bB[l@QXs@hA??aAfBa@p@??e@t@oAjBOTmAfB??CB]f@O\\KVENK`@ENObAId@SxAKrAIh@Kl@CH??GREN??K\\Kf@Q|@G\\QrA]bEIt@??G`@[vB??Ej@??CR??Cl@ClB??MxF???L@H@L@JDL?BDHDJRZzA~BrB|C??zCzE??PXL\\Pl@??|@Zh@NXFN@R@ZETG`@SZWb@c@j@u@~@yAZe@??NQl@u@RYXa@LMFGHGHCFCRCF?FDHFd@h@^f@FDDBD@D@D@LAPCPINEJCFAD?@?D?F@DBHFDDPX^b@Z\\NLLHJF??JDFBNBr@Fh@D^FZHjA^f@P??t@VPF??PD\\LLDTLPLZR`@X??LJXPb@VVJhAZ\\Ht@VrEfBjBt@r@\\j@X\\Rj@Zn@\\??J?DADAFEBCJM??C[G{@YsFK{AE]COCO??G]Km@ACMm@S_A_@aBo@sCs@wCa@kB]yAKg@QaA??[wAUgAOk@GSKWUg@Yi@KQMQq@cAaAwACEIMYi@KO??Wm@KYM]K[Ma@[eAI_@ES??E[EUAa@Ae@EqBAWCUAQAI??EMI[KSGMKKACqB}B??m@k@gA_A??uBcBi@c@g@_@AAw@i@??_EwCm@a@e@[]Uc@Wc@W{@c@??IE}BkA??BOBS?YAi@??CYCw@??A{@?qAAa@Cg@Ew@Ac@Bg@Di@Nw@Lg@Lw@V_BJuABiACwAAo@E_ACsACg@G{CEsBAOEQEMGOCGGIs@u@{@eAg@q@[_@wAaBu@aAQYKSWi@K[Uk@??AM@K?E@CFQ??i@T??_Bn@eAb@??_BuLe@{CYM",
  activity_type: "Run",
  title: "Young's Road Loop",
  center_lat: 40.7380184696829,
  center_lng: -74.4969764220433,
  distance: 8172.59,
  description: "The usual hilly killer"
)

Route.create(
  athlete_id: 1,
  polyline:
   "evuwFz~qbM^kA??oBuA??GE??OK??iAu@k@c@??WK??MK??aBeA??_@Q}AcA??{ByA??y@k@_Am@??~BqH",
  activity_type: "Run",
  title: "Penn Station",
  center_lat: 40.7516772834273,
  center_lng: -73.9844201880059,
  distance: 905.72,
  description: "Quickie"
  current_date: "Mon Dec 10 2018 02:07:50 GMT-0500 (Eastern Standard Time)"
)

Route.create(
  athlete_id: 1,
  polyline:
   "sqswFljueM~AtL??dDsA??h@U??fBs@fAg@|@a@lCgALGLKLMXY`AmANMFELERETE??h@CNARCPEv@WnEcB\\MvAk@??M}@Ku@M}@_AcHk@wD??Kk@M{@U{AQiASoAMs@CYg@{D??EYIk@G_@Kc@I[GUUy@[kAUu@EOCMCOE_@Io@E[AM??GY??SkAIa@Qw@Oy@OiAIiAI{@Gs@Iq@??UgBQ_AMi@GWM_@KUIQS[??U]{@sAW_@IOCC??EKQa@KUIWGWEWCOGg@AUAIA[??Co@Gy@_@aDC]Im@??QgA??Im@Q_BCU??AOC]??Aa@?O@o@?QBg@??TgEBg@LcC??BID[Ha@DS??Ry@H_@@O??DU@S@O?U?WCSCYG[G_@Mg@Oo@ISIU??_@gA??c@oAOe@g@_B??Oe@IUGOUg@g@y@[i@Q]{@cB??]s@CIACGOGSCM{@eEq@cDEQGSM[IQGIKOGKKM[_@MOKI??Ja@DGJKf@]r@k@VQDCRKRGXIh@G`@ERAN?rAHtBTtDZJ@|CP|DJtAF|AHf@@??H?NDJF??IYGY??Qw@}@cEOi@EKKWOUMSWY}AkBm@y@S]O[GQCOEQAG??CWIy@OaCAEgA{LAi@Ac@??GaCQ}CGkBGqA??AMEYGK??GGYOaA[??uFkB??aDeA??_@MUKkA_@wAi@??a@OaA]SGMI??Rg@Sf@??g@nAkDtIIRSf@??MZMTGJOTKNUV??]?K?GAICKCgDgAWKy@UIAqCu@??gFsA??qEkAaDy@??oCi@??a@Ie@Ie@Ks@Q??{@SGA??{A_@??kAYcGwAqG}AmEeAg@K??}@U??YD??iAJ??_@DaAJcCZa@FYF[HqA\\yDbAu@R]LUHWL[P[NMH??sBpA]V??[T_@T??oCjBuA|@yCbBa@V??oAt@GB??_@ROFIDIB??[He@Jc@H??y@L??i@JuAVeARK@WFo@Nc@PWJSJSJ[Na@XMF??{BtAMH??{BxAGD??IHIF??KJ??oBjCg@p@sAhB[d@??oFjH{@jA??DN@JFRFR??dAv@v@h@dBjA\\V??l@^hAt@|@r@d@b@b@`@??rBrBJH??fC~B??ZX??HH??hAbAJJ??pBpB??@@r@v@??h@h@??tBrBhEbE`@ZJJn@h@??XPtClBj@\\TNlAZrAZlB\\`ARl@Lb@L??\\\\l@x@d@p@r@hABD??dA|Ab@t@b@~@??~AnDh@nAv@jBb@bAT`@HJJHNHVJh@R??XH^Jj@VF@VBH@??L?T?l@G\\AF?N?F@NDNH??\\T\\^dBrB^`@ZVTLJDLB??D?XBLA^AV@d@B??@tA??@l@??B^@LBTDTJh@JZVz@d@tA@FnAtD|A~ERj@HTt@lBDJJZ??JXFPZz@|@rC??L\\\\lAJ^H`@Lj@Nz@Lz@@HJr@NdAFj@Dd@Fr@HhALbCHhBJtB@P??D`A`@|FJ`BFp@??RtBLbAVxB??Hx@??DVRnAVlA??h@vCJn@@Bv@tE??HZ@FDFFL??X`@??JJ??VTZT??lA~@??bAz@@@??nBfB??h@f@jChCb@`@DDj@j@n@p@b@f@`ApAjBhCT\\n@`A??VAFAHCbEiB??tEoB??hFoBjAa@??_BuLe@{CIE",
  activity_type: "Run",
  title: "Van Buren + Long Hill Loop",
  center_lat: 40.7379394448739,
  center_lng: -74.4970222777546,
  distance: 15380.46,
  description: "Long dude"
  current_date: "Mon Dec 10 2018 00:46:35 GMT-0500 (Eastern Standard Time)"
)

Route.create(
  athlete_id: 1,
  polyline:
   "sqswFljueMfAfIVlB??uHpC??uEnB??w@\\kCjAIBG@W@??eA_BkBiCaAqAc@g@QO]a@q@q@c@a@kCiCi@g@??oBgB??eA}@??kA}@AA??[UWU??KK??Ya@??GMEGAGI[??y@yEKo@i@wC??WmASoAEW??Iy@??UqBOkASuB??Gq@KaBa@}FEaA??MgCGwAAQMcCIiAGs@Ee@Gk@OeAM}@M{@O{@Mk@Ia@K_@Me@Og@M]??}@sC[{@Sk@??K[EKu@mBIUSk@}A_FeAaDISg@}AW{@K[Ki@EUCUAMC_@??Am@??AuA??@UBM@EJe@pAoEL_@??v@oCV}@z@wChA}D??Nq@DQHe@F_@Da@@KD{@@SFwABs@?e@@Y?SCk@?OIwAKmBSuBS}BOcBEcA??C]E{@GuBAa@?[??AUAUCWC[??Ko@Ia@Kc@M_@Sk@[{@Og@Sk@Oo@Kq@Oy@??Gu@??C]Aa@A_@Aq@???sAAiFC{BAo@IcAq@}EKgAAQ??AGMsA??UeCK_AQeBG]EUAIKa@EQEOIWKY_@y@Uc@Yk@o@iAu@sA{@cBS[OWOUGGKKSO??YD??iAJ??_@DaAJcCZa@FYFGBeBb@yDbAu@R]LUHWLGDSJ[NMH??sBpA]V??Lp@BRBLANA`@C~@AT?PBRDNHX@H?H?DAtA??rBOnBMpEWf@CF?B?BBDDBDBD?D?D?Fi@tFi@hGK|@o@vF??KJIDI@oCe@gASwDkAEGEGAK@[B}AAUAOKS??`@k@JUFODOBK@MDm@Bg@?}@?q@@O@c@JmB??@uA?OAIIYEOCS?Q@UB{@?C@a@@OCMCSMq@??\\WrBqA??LIZOZQVMTI\\Mt@SnA[hBg@lBg@XG`@GbC[|@IBA^E??hAK??XE??RNJJFFNTNVRZz@bBdB|CXj@Tb@^x@JXHVDNDPJ`@@HDTF\\@JNxAJ~@TdC??LrA@F??LxAp@|EHbA@n@?ZB~A@|H??@p@@^@`@B\\??Ft@??Nx@Jp@Nn@Rj@@DL`@Zz@Rj@L^Jb@H`@Jn@??BZBV@T@T??@|@FtBDz@B\\??DbANbB?FRtBRtBJlBHvABz@?RAX?d@Cr@GvAAREz@AJE`@G^Id@EPAFMh@??iA|DsAtEw@nC??M^q@~B_@nAKd@ADCLAT??@tA??@l@??B^@LBTDTJh@JZVz@f@|AnAtD|A~E@FPb@HTt@lBDJJZ??Rj@Zz@|@rC??L\\\\lAJ^H`@Lj@Nz@Lz@Ff@DTNdAFj@Dd@Fr@HhALbCHhBLfC??D`ARrCLhBJ`BFp@??RtBd@|D??Hx@??DVRnAVlA??^xBH\\Jn@x@xE??HZ@FDFFL??X`@??JJ??VTZT??lA~@??dA|@??nBfB??h@f@BBfCdCb@`@p@p@n@p@b@f@`ApAt@bAt@dAdA~A??VAFAHCbEiB??tEoB??hDoAjCaA??_BuLe@{C_@Q",
  activity_type: "Run",
  title: "Hartley Farms Out and Back",
  center_lat: 40.7380497,
  center_lng: -74.4969583,
  distance: 13637.6,
  description: "Lovely"
  current_date: "Tue Dec 10 2018 00:46:35 GMT-0500 (Eastern Standard Time)"
)
