const input = ["6-9 z: qzzzzxzzfzzzz",
    "2-4 s: xgmsdts",
    "6-7 k: khqpsvk",
    "1-3 k: knkqh",
    "4-11 z: lwnzgzlmpvz",
    "11-12 m: mmmmmmmmmmtz",
    "1-10 l: lllllllllml",
    "2-5 q: qjmzhdpmmnqpwptn",
    "7-8 t: ttkttbtwtt",
    "7-10 k: jmmlgrkmwkzkhbhr",
    "4-15 m: xrnxpvxsqfmfmtmqg",
    "5-7 s: swsskgwsbzv",
    "1-3 w: fqbnmlbvnw",
    "3-4 f: btqj",
    "1-6 l: llwlll",
    "14-19 s: ssnskstsssssssgcssq",
    "7-8 c: ccccccccccc",
    "3-6 p: fbzpfpp",
    "6-7 m: mmmmmmm",
    "4-7 b: tbdbgdmbbtbb",
    "5-6 z: zzxczzzmttpl",
    "12-13 c: fcjcbkcvqfpcj",
    "4-7 h: hhhhhshgjhrbmhh",
    "2-5 x: gxfdt",
    "7-15 c: czpmdcgzsclgfvnf",
    "4-7 s: djrssdsrxs",
    "3-18 k: bxnktckkrklkkqkbhkk",
    "4-6 d: ddddddds",
    "1-4 s: rssssss",
    "15-18 c: cccccccccccccccccc",
    "5-7 k: kkdkfqkkkc",
    "2-3 p: fppp",
    "3-4 n: qnnn",
    "11-12 r: crrgrrrmrrrrrnrnrgcr",
    "6-7 w: wwwwwvww",
    "3-12 k: kkvwkwkkkkmkkmkkkkkk",
    "2-3 z: vzlzq",
    "13-15 z: wxwdzgwdfwnzzqgms",
    "7-16 l: lllllllllllllllll",
    "2-7 x: rxblxnrvxtfpxtxdxmtw",
    "5-6 c: ccccvl",
    "13-18 h: nhhhhhhhhhhhthhhhjh",
    "7-9 r: znrrjxrhr",
    "4-9 q: qqqgvhqqc",
    "2-16 v: vvbvvvvcvvnvvvvvvv",
    "15-16 p: pppgppppppppppbzpp",
    "7-8 c: cxcccccxccc",
    "2-11 l: kvhbvkqbbwlccxflpshz",
    "7-8 g: ggvgkgsw",
    "15-16 d: dddddddddddfddqd",
    "9-10 h: hhhhhbhhhb",
    "6-9 b: bbbbbshxdbbbb",
    "7-13 k: vxkkkkkkkkskk",
    "5-18 t: tttttttttttttttttlt",
    "1-6 j: kjjjjtjj",
    "2-10 c: cdjcccncqvccc",
    "3-5 m: thmmm",
    "7-11 m: mmmmmmmmmmjm",
    "6-10 x: xxxxxxxxfxxxqsrxx",
    "1-7 l: lllllllll",
    "3-4 l: bccgqfqmw",
    "11-14 j: jzjjjbxjdwrwjs",
    "8-12 g: xjhglhggcgbggltl",
    "1-4 s: sssss",
    "5-6 v: cghvcx",
    "6-8 t: tttttttrtt",
    "2-3 j: jhzljj",
    "1-3 j: djgr",
    "4-8 m: mmmcmmmmmmm",
    "2-4 m: wmxwkljhbnwzz",
    "13-14 f: ffffxfffffffqh",
    "2-5 f: dtwxj",
    "8-15 t: ttttlntlttxtttttt",
    "10-12 h: hhhhphhmhqhhhhgh",
    "5-11 h: hkhmhjlglwbcmj",
    "3-13 c: cccccqccccccccsccccc",
    "1-5 q: qqqqqqq",
    "8-18 h: hhhhhhhchhhhhhchhvh",
    "3-6 g: cmlgzx",
    "2-4 f: tfxxffv",
    "2-11 w: wwlwswwwwwwkvwwwwwww",
    "9-16 f: bfffffzfvqfbjpftffp",
    "1-8 x: xxxxhxxxxx",
    "9-16 k: kkkkkkckxhkkkrkg",
    "10-13 c: ccpccxcccxccc",
    "1-5 g: gmgktgpgg",
    "1-7 b: kjblhbbbbbnbbf",
    "2-11 x: xxxxxxxxxxx",
    "13-14 n: nnnnnnnnnnnnvnn",
    "1-10 p: szlkqswpvpr",
    "3-4 c: cccc",
    "2-5 v: hcxxggmqvtj",
    "8-17 t: tttspltttmtphfqfr",
    "11-14 w: wzqzwwwwcfzwwqww",
    "7-10 n: cnnnndnnnn",
    "11-13 z: zzzzzzzzzzfzz",
    "2-5 l: hnfpwt",
    "5-6 k: kkkkvfsd",
    "5-11 f: ffgffffffffffdfffff",
    "2-3 s: dskm",
    "10-19 n: nnnnnnnnnnnnnnnnnnwn",
    "3-4 b: fspwzjqblbljpbdvxbq",
    "4-8 c: glcfckjs",
    "1-4 l: lllzwlllllxblvlllll",
    "12-15 f: tlfgzfffqfffffffwff",
    "11-12 j: kjjjjgjjjjtj",
    "6-14 c: cccccvcccccccc",
    "2-7 l: lrllllbgzl",
    "3-5 w: wwwwpw",
    "11-14 m: mmmmmmmmmmzmmj",
    "5-11 x: nqpxxbpgsjxjslxg",
    "8-12 n: nnnnnnnznnnnnnnnnnn",
    "6-8 p: ppppprpp",
    "8-10 q: lscqkhvqvqq",
    "2-6 m: kssmnmmjzfnhb",
    "12-13 t: tgwtttttsbjbd",
    "14-15 j: zjtjjjjjjjtzzjj",
    "7-8 s: sssssqzsss",
    "16-17 f: fffffffdfffffffff",
    "13-15 w: mwrwwwlwpwpwwwl",
    "3-6 v: hxvvvmpfw",
    "3-10 m: hhjmpfctxwbrwpc",
    "3-12 j: fvgbjhjqgnxp",
    "8-9 v: vvfvvvvvvvqr",
    "5-8 v: vvvbvvvv",
    "6-7 s: hssrsssts",
    "5-8 q: zqqqqsvq",
    "8-10 d: rdhqphxncd",
    "4-5 s: ssqss",
    "4-14 z: zzzqzzzzczzzzxzzzc",
    "3-4 p: pkpppp",
    "5-7 g: gkggbtgggh",
    "8-14 q: qqjqqqqvgqgqrtqqq",
    "19-20 c: cccccccccccccccccqcf",
    "2-5 l: hmldnrg",
    "2-4 d: rddd",
    "3-9 m: lwhhsmggbzvkm",
    "16-17 w: jsltwwwwckhmrgwnw",
    "5-6 q: qjqqwcbmq",
    "4-5 d: dddddd",
    "2-9 t: tksgtdbbtvkthtth",
    "3-7 p: pnpnppptbsvlppjh",
    "2-6 j: jjlvjjjj",
    "16-17 v: ngvvbjvvvvlncvkvd",
    "6-8 v: vjdvxvrq",
    "13-14 m: mmmkmmmmmmmmms",
    "8-12 x: xxxxcxxgxxxxx",
    "11-16 n: nwnnnndpnnnnnnnn",
    "2-17 f: fjfvfffgfffffcfwff",
    "2-7 k: kkkkskk",
    "7-8 d: dddgxdjd",
    "6-14 b: rbbsbmbbbbqnlb",
    "1-3 h: hrnr",
    "4-7 g: xggzglphmfgvjzgpb",
    "12-16 c: cccccccccccccccjc",
    "1-5 q: qslvqhslbrkpzttq",
    "10-16 n: nnnknnnnnznsnnznnnnn",
    "3-5 z: lzzll",
    "4-13 d: dqdldgdddddddd",
    "5-8 n: nnnnxnjqnn",
    "3-6 v: vwvvpv",
    "3-5 t: lhttr",
    "1-5 p: ppppbp",
    "9-10 c: ccbbgdcrccknqwv",
    "4-5 h: ghzrhkz",
    "14-15 r: rrrrrrrrxrrrrrr",
    "7-10 z: zzzzzbwzzgz",
    "2-3 t: tzttttttt",
    "1-2 k: mthj",
    "4-11 r: rggkxrwsrvrcrbrrrrr",
    "13-16 k: kkkkkkkkkkkkkkkkkk",
    "8-10 z: zzzzzzxczvzzzzm",
    "11-12 s: sssvssssssss",
    "11-18 t: nlvmtdxttwtxthjpqm",
    "1-19 x: qxxtxxxpxxxxxddxxkx",
    "15-18 q: qsqqqplwpqhqmvtxjx",
    "5-11 q: qvkkqxqqkrqfqq",
    "12-13 l: fzsvglgwcllxllwmxl",
    "2-12 j: sjqjdvrbfkgjphcr",
    "8-9 f: fffffffffff",
    "1-5 r: frrrm",
    "2-4 v: sfmvjdvhrnltlwfshnwn",
    "4-9 s: ssswsssslsssss",
    "12-13 v: vvvvvvvvvvvnvv",
    "11-12 w: wwwwwwwwwwww",
    "1-3 c: grvsjs",
    "5-7 p: ppxzppp",
    "10-11 t: vttttttpnkhkttpjttt",
    "11-16 g: ggggggggggpgtggj",
    "3-13 t: cspcttmxlttgt",
    "5-12 s: nssstgsqstssjbsbg",
    "10-13 c: cgccccccdzcjlcc",
    "5-6 j: jjjmnr",
    "2-9 x: xxpxcxwdzxxxwxxxxx",
    "5-8 m: phmcgvfnq",
    "2-5 m: tmwkmmnmmx",
    "10-11 n: nnnnnnnnnnt",
    "8-10 p: pjpdpppmnhpczp",
    "11-12 d: bvvdkhjddvdk",
    "7-11 d: dddddcddddjd",
    "1-2 m: mmmmmm",
    "3-4 q: qqqqvmq",
    "4-6 p: ppkqpgcnpfpct",
    "7-8 z: zrbzzzzf",
    "3-7 k: ktkklqk",
    "1-4 n: fvbnxcrq",
    "3-4 h: hcwh",
    "4-12 r: hptvxxkrzkjz",
    "3-14 k: kkkkkjkkkcnsmkk",
    "4-5 c: vwncp",
    "11-15 t: xqtttttsdtdtttj",
    "2-3 q: thktq",
    "3-7 p: fzppplf",
    "1-7 d: phdzkqsxgm",
    "7-8 g: gggggggg",
    "1-4 v: llvc",
    "14-19 b: bbbbsbbbbxbblbbbbbbb",
    "1-4 b: bptc",
    "5-11 v: vfvvpcfgvxvcvvvv",
    "9-11 j: jjjjjjjjjjj",
    "17-18 z: chbgftspdwsxkptfrb",
    "8-9 d: nxlkdzznfszf",
    "6-12 g: gggggggggggggggg",
    "3-4 t: ttlt",
    "4-9 c: csgclhqql",
    "3-7 q: qqhglqfq",
    "1-2 f: fffff",
    "1-11 k: kkkkkkkkqkzkqkgkjk",
    "10-13 m: mmmdpmwrmmmmgmmm",
    "6-8 b: bbbbsfbb",
    "4-5 d: fddqg",
    "7-13 z: zzzzcqdfzzzzz",
    "8-10 c: cccccccrczc",
    "2-11 w: prwzrtwwqwsx",
    "12-14 h: phhhhhhhhhhdhpthh",
    "1-7 s: ssssssss",
    "5-8 t: jtttbttntctttt",
    "3-11 w: cnhwdwxwxwrwkww",
    "3-6 w: wpwctmdrfh",
    "5-6 n: nnnmslxnnnnn",
    "11-13 q: qqqqqqqqqqkqqqqq",
    "4-5 s: sfsscsczsss",
    "3-11 x: crvfnxzscrx",
    "3-4 l: ltqz",
    "6-18 s: zsssssxpfpstssssss",
    "3-8 l: lklwqllm",
    "11-14 b: bbbbbwbbbbhbbbb",
    "3-4 f: gtzf",
    "15-18 m: mvmmmpmmmmzmmmzmmv",
    "2-6 w: whwgkw",
    "6-7 w: wwwwwgw",
    "18-19 h: hhhhjhhhhhhhhnhhhjnh",
    "1-6 c: xcccccpcccc",
    "5-6 z: jwfczxdzchzx",
    "3-6 z: zzzzzvz",
    "3-9 p: jtcpzqgdpgpvtcp",
    "1-4 p: wppp",
    "12-13 d: nddddddddddrd",
    "8-12 n: nnzgnbnnnncnnnnllnf",
    "4-5 w: xmwlwwbwhlwdjdxznw",
    "11-12 z: zzgzzmzzzzztzzzzz",
    "9-10 w: rwlwwwwwwvw",
    "9-10 w: wwwwwwwqwd",
    "5-10 k: kkkkjkkkrk",
    "2-10 x: nvxssnnmxsxxmdp",
    "14-18 f: gfffffqffrtffcfffh",
    "7-8 t: lbtkkltt",
    "14-18 t: tttntttttttttrtttjtt",
    "11-13 t: ttttvttttttkk",
    "4-6 d: xnqdgwhdplnfnnd",
    "3-11 c: qtktrztvcmcjcdptz",
    "16-20 j: jjjjjjjjjjjrjjjgjcjc",
    "11-12 d: dddddddddddjddsd",
    "6-7 m: mwmmrrfltmm",
    "9-10 t: ttmbjjtttttthr",
    "1-4 n: cffnnw",
    "2-5 w: twkkw",
    "5-6 k: zkkkkkt",
    "4-15 k: kkkkkkkkkkkkkkh",
    "14-15 d: dddddddddddddvz",
    "1-5 w: wwrsw",
    "3-4 c: wtcq",
    "15-16 j: hjjjvjjjjjjjjjjdj",
    "1-4 n: nnnpnnnnnnnnnnnnznn",
    "4-6 w: njhwvcpwwzclwbwd",
    "4-6 w: rwwtvs",
    "3-8 v: vvpjvvvvvvvp",
    "1-16 t: tttttttttvttttttttt",
    "2-10 s: ffkfgwlbdgnsnprc",
    "5-10 v: pdsgvvtvvv",
    "10-16 x: chjxpxmxvxxxcvkhjb",
    "5-13 l: lkllsrjllllllcll",
    "4-5 h: hhhlhh",
    "3-6 z: zpbznrzzsbzzz",
    "2-16 r: mxrrrbrxqsfvrhsrbl",
    "4-7 q: qqvqqqh",
    "3-4 s: ssnm",
    "7-13 p: ppppcppptnqpkhplpppp",
    "11-18 v: svmtvcvvvvvhfvlvvvv",
    "5-12 n: nxjdnnnszcnnnn",
    "1-3 n: tnmn",
    "6-17 k: klkkkpkkkkkkkkkkkzk",
    "12-17 d: dddddddddddjddvtdddd",
    "5-7 c: ndcddjzcrxccgdcc",
    "2-4 s: qkssssssz",
    "2-5 d: rdhdd",
    "9-10 b: jbbbbbbbbbb",
    "5-6 j: xbhfjjgqjjlmjjjkr",
    "3-4 d: lzdhbwb",
    "6-7 j: jjjkjwzjkjjjv",
    "17-19 g: gggggggggggggbggvgr",
    "3-4 r: rrwm",
    "1-7 g: dgjgbgrthgg",
    "11-18 x: tsxqxxpnxzxxprcsxlrl",
    "1-5 f: fvwwm",
    "2-5 b: dzdvb",
    "1-2 v: tvvv",
    "5-7 j: jjcjwlw",
    "3-11 z: cqkwrzqzfzbqlhssnfjm",
    "6-9 z: zzzzznzzbz",
    "12-15 l: rllllllllllllllll",
    "2-3 t: dztg",
    "5-8 r: rrrtxrrr",
    "6-7 v: vqvvvvvvcv",
    "7-8 l: lllxlllllf",
    "6-7 c: ccclcdq",
    "1-6 c: cctccvcccrv",
    "2-7 n: nbnnnnnnnn",
    "2-3 z: tznzg",
    "6-10 t: svpwctktsstttvktttt",
    "1-10 w: wwwwdwwwrcjwwxw",
    "6-11 p: pstpqcpjppz",
    "12-13 z: zzzzzzzzzzzszz",
    "11-15 n: nnnnnnnnnnnnnnnn",
    "11-12 n: nnnhnmntnntnn",
    "1-5 f: fvfkmttffhmnf",
    "14-17 v: vvvzvvvvvvvvvvvvcvv",
    "9-10 x: tdxcxxrfzq",
    "7-8 s: sssssshss",
    "7-11 w: tndwtqcwchwlww",
    "10-15 z: zzzzzzzzzqzzzzqz",
    "2-7 d: dddddkddjdhd",
    "11-12 j: xjjjjjjjjjdgjp",
    "3-4 x: xxxh",
    "7-9 q: ghqjtqqqfqhbqnhqqqfq",
    "1-9 p: jpklbnmpnpnpdp",
    "1-5 z: zzzzzzz",
    "7-8 t: ttttttjw",
    "18-19 s: sscsssssssssssssskss",
    "11-14 f: fffffrffdfgxdfffkf",
    "3-10 q: gqxqwzlxqqgdbqwcdnlk",
    "2-11 s: jnhvsvklrlh",
    "4-5 s: sssss",
    "4-16 f: fffnfffffffffffff",
    "1-5 s: sszsscspsmcrhqss",
    "6-7 f: ffffffdf",
    "5-6 x: xxxjxx",
    "7-8 k: vcbrgpkhlrdzkxchkzrd",
    "12-13 d: dpddhddddddgrd",
    "11-12 d: ddddpdddddmbd",
    "2-5 m: kmxxm",
    "3-11 m: wmxmmmsfmmfmmm",
    "10-13 x: xxxxxxxxxxxxx",
    "3-5 r: kwztrmr",
    "8-13 l: lpllllqxclfqzjj",
    "5-9 j: hsqjjsstj",
    "2-11 d: ddsdddddddd",
    "13-14 j: jjjjjjjbtzjjjh",
    "11-12 p: ppdpppzppzpppppmp",
    "5-7 t: kstztjtttt",
    "3-16 h: jhxrphhhkhhhhdhhph",
    "9-14 v: vvvvtvvvvvvvvvvvv",
    "4-9 q: qqhqmqqqqqgkfq",
    "3-8 j: trjcpjbjwkks",
    "9-12 s: smbssssssssjsj",
    "8-9 l: llcpllvllllln",
    "14-17 m: mmmmmmwmmcmmmcmmmmhm",
    "1-7 j: fjqjvjjjwfsjp",
    "1-8 k: kfnkfkkwfklkkkm",
    "14-17 l: lltrxxllllslvltfnh",
    "3-4 f: ffqdff",
    "9-12 h: lwhhqrhdhdchdh",
    "10-13 t: cttttttttrttttx",
    "2-6 j: mmtmjjw",
    "3-4 h: hhxh",
    "4-11 c: cdfgtcddwsj",
    "1-2 f: xmfff",
    "7-8 x: rxqdphxtv",
    "2-4 n: nphnzn",
    "8-10 r: rrrrrrrrrwrrr",
    "2-10 c: ckccccccclcc",
    "6-13 j: vbqznjpjjzqvgqj",
    "9-11 x: xxxxxpxxdxb",
    "11-14 v: vvvvvvvvvvvvvhvvv",
    "5-6 r: rbrrrg",
    "12-13 d: dlrdlddddbdcd",
    "6-13 x: xzxxxxrmjxhmxxxxjj",
    "2-3 c: ccqcwc",
    "11-17 n: nnnnnnnnnnnnnnnnnn",
    "2-4 r: wrsrcrltvsh",
    "14-15 l: lnltlllllmllllgllldl",
    "8-9 m: mgmmmxqmsbmmhmm",
    "3-4 m: npmmrbjr",
    "4-11 n: kwfnhknwdfnpshtnw",
    "19-20 x: pnzhdhxttngbxgxzzwxx",
    "12-13 r: rrrrmrqvrprrmrlrr",
    "12-15 f: lffffflffffjfff",
    "7-14 x: xpxxsjxkxxxmpcm",
    "5-6 b: fxfglbw",
    "3-7 z: zzsmfzzzzz",
    "7-15 w: gdhxwlgdqldtgpwkww",
    "12-13 c: dcvdcqcsdcgcclsc",
    "1-2 f: tfsffnff",
    "7-10 c: ccccccccch",
    "5-7 v: rvbkvnvh",
    "3-4 z: jzdvgq",
    "1-3 g: xgdggg",
    "1-20 r: rrrfhrtfrrrqknhcrbhr",
    "14-15 q: qbqmqqqqqpqqncqqqq",
    "5-7 r: rrrrrrrrr",
    "6-11 g: wcgggzbgwkhg",
    "15-17 g: ggggggggggggggdgg",
    "4-5 n: lnnln",
    "4-12 q: bqvzcfvckzqrqnqqqqkv",
    "2-3 b: brsb",
    "6-9 z: zzzzzzszqzzzznzzb",
    "2-7 h: kvmhjshb",
    "8-10 f: zgffkrhfjfqbpqgqtht",
    "12-13 m: cksxcmrrqrmsml",
    "15-18 d: dmqxddddjbdhpddzdddd",
    "5-14 f: fkpcnkwxbxkhqf",
    "6-7 k: kfkckkkkkkkkkkkkksk",
    "11-12 w: wwwwwwwwwwtwww",
    "1-3 t: tctrtgkttt",
    "1-2 l: llls",
    "10-11 t: tttttttttst",
    "3-4 n: nnnn",
    "12-13 n: nnngnnnnnnnnnn",
    "4-19 g: ggfkqswnrqfbblgwkkg",
    "1-4 c: ckcm",
    "1-13 b: bgbbbjbbbbbcb",
    "6-10 h: khhxbzqhtqrh",
    "1-4 v: vpvvs",
    "2-3 z: zczz",
    "2-4 s: nflsfms",
    "5-9 r: xsrlrtmph",
    "9-11 k: kkkkkkkkwkjd",
    "2-19 m: smbmfpmwpmslmvmpzmjw",
    "5-9 f: fmnwznffxqnpscffjdq",
    "5-13 c: sfcsczccvntcngsd",
    "10-13 f: sfffffrfzcffwff",
    "4-15 q: qqqqqqqqqqqqqqwq",
    "4-6 m: mbmdmkmmmnmm",
    "8-14 r: rvrprrrkrrrrhs",
    "7-15 g: zpdmdnjtgqjlxrgks",
    "3-6 p: qpplqpfvpk",
    "1-3 t: trtttqvtt",
    "4-5 d: vdwdd",
    "4-5 d: dddckd",
    "6-7 w: hwxwwwwpw",
    "7-9 m: xsqtmrxmrfjmw",
    "12-15 v: vvvvvvvwvvvvvvs",
    "6-7 b: bbbbbbd",
    "15-17 b: bbbbbbbbbbsbbbvbbbb",
    "7-9 p: ppkhgmmzp",
    "16-18 d: xdddrdvddpdddrpddhp",
    "7-11 v: fvpwgvbknbnvn",
    "3-4 k: kkkwjktmslgjf",
    "4-5 d: ddrdd",
    "13-14 z: jzzwzzzzzczjkgvzzzz",
    "1-2 h: fhskvjxhk",
    "3-5 g: nggxfgpgjmg",
    "12-13 h: fdgbxhdcrllhq",
    "2-4 k: tscc",
    "2-3 g: qgcvmgvgln",
    "8-9 n: nnnlnnnjjn",
    "2-20 c: crrccccrhcccctlccccc",
    "1-7 t: ttmtvttttqtwtmt",
    "11-12 v: vvsvvvlvvvbvvv",
    "11-14 v: vvhtrvcvvsvbvvvvvvvv",
    "8-9 s: ssslssskdsfs",
    "5-9 h: hhhhvhhhbhh",
    "3-5 f: mxtsffxssf",
    "9-13 h: hhhhhhhhshhhmh",
    "1-4 d: mdwdddddxjdx",
    "11-13 k: kklkxkhkkkkkh",
    "7-10 x: pnlzrxpxglt",
    "4-12 h: hhhhhhhhhhhkhhh",
    "9-10 v: vfvvmvvxmvvvvj",
    "8-10 v: vvvvvvvvvs",
    "5-6 d: ddddgdd",
    "3-5 l: lptbcl",
    "4-8 n: nwvnnnnnqbnn",
    "11-13 h: hhhhhhhhhhhhzhhhh",
    "3-6 j: jnvxjdsgj",
    "4-7 k: kkkhhkkkkj",
    "2-3 s: jsmh",
    "4-5 b: bbbbdb",
    "8-10 c: ccqcjccbccccc",
    "7-15 z: gzzzzzczzzzzzzdzzm",
    "7-8 g: gggrgggtggg",
    "11-14 s: skssssvpssssjksssw",
    "7-11 m: mmmmmfrmmmmmmg",
    "7-8 b: zbbbbbszsbb",
    "6-13 f: ffffnlfffffftfffff",
    "6-13 v: vvvvvvvvvvvvv",
    "14-15 l: llllllqlllllllf",
    "14-15 p: ppppppppprpbptfppp",
    "5-9 b: bbbbxbbbsbbb",
    "10-18 q: xpnfpbxszqbftrbtqj",
    "8-9 f: fxggtxvjffb",
    "10-11 l: lwfkqllllftwllllll",
    "6-9 k: kktkkkkkkkkkk",
    "8-15 q: qqqqqqqlqqqqtsh",
    "11-12 c: ccjcjccjcsrcccccswc",
    "4-7 c: mldccmj",
    "5-6 x: lvvxfc",
    "1-4 p: bdppppp",
    "1-2 q: qhxqq",
    "7-10 x: xxxxctzxsxxxpxgkm",
    "5-14 g: ctgbggjgqggpgmc",
    "2-5 l: hlllclpllcqllrxl",
    "14-19 w: wxmfxnshvhntvlxnhxw",
    "17-18 t: tdttttttttttttttxz",
    "1-2 b: bkxprpwkpckr",
    "1-3 c: cccccccccjkccm",
    "14-15 t: ttttttttttttttmn",
    "5-6 g: dspggq",
    "12-13 g: ggggggggggggg",
    "8-9 j: jpjjjqjjjhgkj",
    "4-5 s: psscc",
    "1-5 c: cdhdcqfqjzkg",
    "7-10 k: kkxkkkpkkr",
    "5-7 k: xkkgckv",
    "2-11 r: rrrrrrrrrrrr",
    "3-4 t: zpjf",
    "11-13 x: xxxxxxxxxxxxxx",
    "3-4 w: cwcwr",
    "1-2 q: qqqsbdmvs",
    "1-3 k: xpkxnzkk",
    "2-5 d: kbhddqrdxd",
    "7-8 q: tpnqqqzqcpqw",
    "4-5 f: fpxfr",
    "2-5 k: kkkkxkk",
    "10-19 n: nnnnnmnnnzncsnwbrbdn",
    "3-6 z: ffzzdzzcrwb",
    "2-3 k: kckk",
    "3-4 k: wfzk",
    "9-16 x: xxxxxxxxxxxxxxxxx",
    "2-3 w: wwwl",
    "4-10 r: ckfrpqvlwrmx",
    "6-7 v: vvvvlvv",
    "7-8 l: lqcbvvjlxbl",
    "13-14 z: wzlxhhdczjwcmk",
    "7-19 b: lcgclqqxsxphbsbmzlq",
    "6-7 j: vjjjjtx",
    "9-13 x: djsxbtxtcxxjxxxxxnx",
    "3-5 s: ssxswsss",
    "19-20 t: ttxktttttgtdttttttfs",
    "8-9 z: zzzzzzzzxt",
    "1-11 n: ntnnnnnwjndnn",
    "2-9 g: gggzggggzgggggggg",
    "11-12 x: xxxxxxxxxxxwxxx",
    "1-2 x: cxxddnf",
    "4-10 t: tcwtmhttcctd",
    "4-16 f: ffffffffffffffffff",
    "6-8 b: qmmdbbfcbbkbvfpbj",
    "7-10 w: wwwwwmwwwp",
    "9-15 q: tkqdqqqqcqqqqtkqqqq",
    "7-8 x: zxxxlxxxx",
    "6-7 r: hlrfrrrkrrrtrhjmmgl",
    "4-5 s: bzhmps",
    "15-16 h: nhhhhhwjhhhhhhld",
    "2-4 v: vvvvv",
    "9-12 m: fbmmmmpmmmmmjmmmml",
    "16-19 c: bgcnldccctppvpsclpj",
    "7-8 g: gggjgfgg",
    "2-5 g: wptrhlbnzcstsqjmncgp",
    "3-9 g: gjgdgzgvgglgvgnf",
    "12-14 z: lzxwqwplwkzbnf",
    "4-5 r: brrrr",
    "8-16 d: sqnkpjdzjrlzdwbjjdgd",
    "3-4 v: vvlv",
    "9-11 l: lhllslllblx",
    "4-8 f: ffflfbrfb",
    "9-11 d: dddndddddwdf",
    "14-16 b: bbbwbjzbbbbbbfbtb",
    "6-14 v: vvvvvdvvvvvvvv",
    "9-12 x: xxxxxxgxxjxxx",
    "10-13 t: tttttttttptttt",
    "3-4 t: tttt",
    "6-9 l: gwlllwllg",
    "5-7 f: fffffffff",
    "4-6 b: bcbbhbgb",
    "14-18 w: pbwkxhsjsvpwmlkwtj",
    "1-17 f: ffffffffffffffffffff",
    "11-17 j: jsqlmtmjpjsdjkcrrj",
    "7-12 b: bbblbfbbbbbb",
    "7-8 q: qqhqcngd",
    "8-12 b: bhbbbwbcbbbgb",
    "7-9 r: prrdmhmrrrrhjmpj",
    "15-17 x: hxwxxxxxxxxxxxxxbxx",
    "3-12 f: ffjkffffffdx",
    "17-18 v: vvvvvvvvvvvvvvvvkv",
    "5-6 l: llllll",
    "11-15 q: ncbjqqcqdmbzkfhsq",
    "1-3 c: ccnc",
    "13-18 v: bpvpvvxhvghvlhvtkv",
    "14-15 l: lllllxlsllllllxll",
    "2-18 h: bwfdfgrmqjjwxhqzgh",
    "11-12 j: nvftlpcbjjwjwvs",
    "8-11 t: tthhtgtkttt",
    "1-4 d: dncktlddldn",
    "11-13 j: gdpdxkqjjmjnj",
    "6-8 t: tttttltq",
    "7-9 p: pwppppbpf",
    "1-5 h: hhzxhpkthzhjh",
    "11-14 k: gkkzkkhvkkmkkkfhkkpk",
    "6-7 t: tttttvc",
    "4-12 b: lbvbckvhgbpbcw",
    "1-5 w: wwwxtbw",
    "12-13 x: xxxxxxxxxwxzxwx",
    "3-6 h: ghjhbhhq",
    "9-12 z: zzzzzzzczzzfzzzzzz",
    "2-16 g: mzxlgsnjnfzswlzb",
    "11-16 r: rrfrtrzhrtcrmrdgv",
    "3-4 d: gndc",
    "3-4 g: gggggrg",
    "10-11 m: mmmmmmmmmxj",
    "7-9 g: gtgsxwgzgrjggvfxbkd",
    "18-19 v: vvvvrvvvvvvvvvvvvhv",
    "2-8 l: flpbnfnlczl",
    "1-11 l: llllllllllll",
    "3-5 j: jjjjljjjjjjjj",
    "4-5 l: vwdlt",
    "3-5 l: vllnw",
    "13-14 z: lltbpkrqghqxczx",
    "5-8 h: tfhhtsjhhhsddl",
    "13-15 k: lztbvbqwhxzzkkklfnv",
    "4-9 h: hpsbfqrrqpsrhwxdnrc",
    "9-10 k: lkkdfvnwkk",
    "7-15 p: qmvqqqpggvlxppp",
    "10-19 v: xvvvgwwvvmvvvvgvjrrv",
    "3-6 t: qtftptnttmt",
    "4-16 c: qcsrwtcszkdjljfcnp",
    "4-5 d: dddsd",
    "2-3 b: hbwdg",
    "4-5 l: lmldl",
    "13-15 v: vvvvvcmmmfzppkvmv",
    "6-11 k: pbkkskgpkjkdwkvkk",
    "9-11 k: kktkkkkkkkq",
    "4-9 m: mmmmctmmd",
    "10-13 w: mjwwbwrwvktghdszxd",
    "3-7 q: krcxxqvnpkhvbwpjkg",
    "4-11 z: zzzzzzzzzkzqzzzzvnzz",
    "9-10 r: rhrrrrrrrrrr",
    "15-16 c: ccccccccccccccmwcc",
    "2-4 g: wggz",
    "3-4 g: jjgv",
    "1-2 h: gthh",
    "8-12 j: jjfjkjfjqqtjjkzvj",
    "18-20 p: xbzbpvjqjbxfjdkgpwzp",
    "9-14 t: ttttjtztttttwtj",
    "2-4 l: lnlq",
    "2-3 m: fpcbmzqkkfdzckl",
    "1-3 z: zczslqzcztt",
    "6-9 f: nbfvfvffsf",
    "15-20 k: kkkkkkkkkkkskpkkkkkk",
    "1-3 k: xkkqrskhkghqmkvtx",
    "18-19 s: sssssssssssssvsssvh",
    "10-11 x: fmxfvrxqzxnlx",
    "4-15 r: xfphgnpwklmbmbtrkcbg",
    "8-9 k: ktkkkkkjkk",
    "4-8 m: vmmmmmmmmqmtm",
    "8-13 r: rzqssbdrzxcmkhwv",
    "2-4 k: kkddn",
    "9-10 f: fffffwffjr",
    "6-7 z: zdtczlzmz",
    "1-3 c: cccc",
    "12-13 r: rdqrrfrrrrrrzrrdrrr",
    "2-14 k: kxwkkkdhkksxtkkkk",
    "2-11 r: trrrnrmrrrrrrrtr",
    "14-16 g: gggfgkgggggglcgsfggg",
    "11-12 r: rrrrrrrrrrrq",
    "13-18 l: lllllrlgllzllllmlgwl",
    "2-4 g: lgvpg",
    "4-5 p: kphkp",
    "3-4 f: zfjf",
    "3-4 x: wdxnjhnhdl",
    "2-17 d: xbdddddwddddjdddd",
    "9-12 f: ffffdffffffqff",
    "4-8 k: bkzkkkkkm",
    "2-4 s: hhfsztf",
    "1-6 g: rjggggggggggggggq",
    "3-7 l: gclpvpl",
    "2-9 g: gcggggggwg",
    "4-7 r: hnrlnrvjrrrrr",
    "6-13 q: qpvgqqqqvqgvq",
    "4-6 k: kkmsjk",
    "12-13 n: nnknnnnnnnnkn",
    "10-11 r: rrrrrrrrrrz",
    "15-18 p: ppppppppdpxbpppxpw",
    "5-8 j: jjfjjjxjd",
    "14-16 v: vspvvvvbvvvdvwvvvv",
    "3-9 m: jmsmmdmlmtmxcjm",
    "12-14 z: kvzzzzzkzczzzjzzzzd",
    "6-7 b: bbbbbbb",
    "9-11 j: dbjcjjjjdvj",
    "2-3 r: hmzb",
    "7-8 h: hhhhkhkzhg",
    "6-9 c: dcccjcccccfcc",
    "4-16 x: qjxkmxnkmvlxlwvw",
    "11-15 m: mmwmdmmmqzmmmmmm",
    "1-3 g: ggfg",
    "1-11 q: rqqnqfqqfqqqqqqbqqd",
    "3-20 x: tsxslcxppwzngxztpfdx",
    "9-10 r: rsqrjqzfrr",
    "2-3 z: zkzjzzzzzrzzzzzz",
    "11-13 l: llllllllllflll",
    "13-14 v: vvvmvvvvvvqvrdvv",
    "14-15 q: bqmqqqqqqmqqqrv",
    "3-4 w: wjnmwsmwnwl",
    "2-8 x: vxxsxxmxxxx",
    "1-4 w: wdlwhmt",
    "2-6 d: zzhdsdslj",
    "4-6 f: xffffsfffsffqfc",
    "5-12 m: mwdmwrmdpbmmm",
    "1-2 x: nzbxx",
    "7-11 n: pwnmppnzdhnnnljmcllw",
    "2-10 g: dcpvqcbgzsqtv",
    "3-4 k: fkhrkpw",
    "2-4 k: bxkkkkkkk",
    "4-7 c: bxzcmccxgc",
    "5-6 q: jbvqsk",
    "6-7 v: sqzmvvv",
    "1-2 f: ffsffvcjt",
    "10-17 m: mmmmmmzmmdmmmmrmmm",
    "9-10 x: xxxxxxxgxnxx",
    "4-8 w: wwwpwwqnwwwxwswwwwwv",
    "14-15 n: nnnnnnnnnnnnnnf",
    "2-4 w: wmws",
    "5-13 f: ffffdvnffwffwfff",
    "5-11 d: kjdrqdvdpxd",
    "6-14 z: qqrkczzdjxxvmq",
    "3-4 l: dlln",
    "2-7 h: hhhhhhhhhhhh",
    "4-6 d: fxdfdqqld",
    "10-11 t: ttrjbstltrkttttttt",
    "4-5 d: dddldd",
    "2-3 x: xxcrgz",
    "2-5 r: tskzvcrsnr",
    "8-10 l: lpkjnkllwwklhbcl",
    "1-2 c: ccccccccc",
    "2-4 q: vqqwqqfqsqvd",
    "3-10 n: nnnnkngngnqnfnnnc",
    "1-5 g: jgggc",
    "8-10 f: vxnlpftwxf",
    "4-5 c: cfcnp",
    "8-9 f: hfvkgwpffchpvdtkj",
    "4-5 k: kkkkkk",
    "3-14 m: rmdjmmdjrmkmlj",
    "7-9 g: hgghzgbgxggmngbm",
    "3-10 x: rsxgxxrwlh",
    "7-11 g: ggwhgzgggpgggg",
    "10-17 b: pdlbbbbbbnbbxtbfbb",
    "10-13 j: bhvnjhvsvjfjjgp",
    "10-12 v: vvvvvvvvvvvv",
    "5-6 s: sswsltsk",
    "9-10 c: jbccccchvcpxczcccz",
    "10-11 j: mjjzxjmxjhsjjjjjjv",
    "17-18 z: zzzzzzzzzzzzqzztzzzz",
    "6-7 m: vdmmmdl",
    "13-16 l: sllmlllllmflsklf",
    "1-2 r: rrlr",
    "1-3 w: twwxpkvpcwgdxbljpmw",
    "16-18 x: xxxxxxxxxvxxxxxxxxx",
    "14-16 b: bbbhbtbbbbbbbtbbbbb",
    "1-2 q: gqlv",
    "3-5 c: krhtc",
    "7-12 j: jjjjjjfjrsjhjqlcd",
    "4-7 r: krxzrrrrfrx",
    "8-12 j: jfzbsjnmjjnlvrjhjk",
    "2-6 d: wdmkzdvzmdjbcnpz",
    "9-11 w: wlwwwwwwwwww",
    "3-17 m: dzbnmqrxwmmbmdkdlmp",
    "3-10 j: dzjjjjjjwljjjjjjjfj",
    "10-14 z: mzzmzzzpntzznzwj",
    "5-6 x: gxxztxbxhrzxx",
    "4-10 t: wttttwwtttvbtpmc",
    "6-13 s: szshssssssxsssss",
    "9-10 k: skhbrmrfkk",
    "7-13 f: fffffbfrwfffffffzf",
    "10-12 x: qldpxxlxxxrxkxr",
    "15-16 b: bbbbbbbbbbdbbbbl",
    "9-11 b: bbbkbbbgbbngbbwbbb",
    "7-8 m: mmmmmmmmmmrw",
    "11-12 d: ddddddddddjd",
    "3-6 t: tkqqthl",
    "1-6 g: gwcgkg",
    "18-19 f: ffffffffffffdfrffrtf",
    "6-9 k: kkkkkvkkjk",
    "2-4 p: ppbnkqpvtcmp",
    "1-5 w: wptkw",
    "3-5 c: ccqcc",
    "12-13 r: hmrqbrsqnxqrrq",
    "3-7 n: lrnvfxnzcnhzzblh",
    "2-5 n: xnnpn",
    "9-10 h: kvmdhnnkhhhhhdrhg",
    "3-8 m: fzmmrnlmdfmmmp",
    "3-5 d: hjxdl",
    "2-4 l: lhcl",
    "9-14 q: qqqrqqqqqqqqqbqgp",
    "3-4 v: vtqvhv",
    "16-18 g: ggggwggggggggggggvgg",
    "2-3 w: wwmw",
    "14-15 l: lllllllllllllnll",
    "1-3 s: wsss",
    "16-17 q: qqqqqqqqqqqqqqqqf",
    "3-4 c: cccc",
    "1-3 t: xttt",
    "3-10 g: gjmgrvwcqlxmppkjz",
    "1-3 l: xlllgll",
    "1-4 q: gqjp",
    "1-5 z: zzhztzz",
    "11-12 v: vcvvvvvvvvmvvv",
    "3-4 n: tnsdgnnm",
    "3-4 q: qrjqqxbqqmlw",
    "5-6 n: nnnznnnnnnnnnnnn",
    "4-12 c: pmhcbcpcchdfjwcqgbcr",
    "1-8 l: sqlnpclq",
    "1-3 z: zczw",
    "3-4 l: lllh",
    "2-18 s: sssssscssssssssssgs",
    "4-5 j: mljjj",
    "5-6 q: qqffqqq",
    "5-9 h: hhgfhhdhqcnhbswh",
    "5-7 r: gbrrtrv",
    "5-8 h: drdhhhbhr",
    "13-14 p: ppppppppppppnbpppp",
    "2-4 j: lpjbjjjtd",
    "6-9 c: cccccqzcgc",
    "3-10 w: wwlwwwwwwhwwww",
    "11-13 s: wsssbsmssstsssssss",
    "4-13 t: hgrglkhtqcxthrcj",
    "9-13 c: bmccccczgccccw",
    "1-7 z: zzzzzblz",
    "4-5 p: hptvc",
    "8-20 p: lnpfmrghqdptpjtvrqqf",
    "5-8 m: rqskmvdmcqg",
    "11-16 c: cqcccccnvcccccwcgc",
    "4-6 f: vfggfsk",
    "13-14 f: cwjgljbbntfhbp",
    "3-4 c: ccccf",
    "1-4 g: kggggg",
    "7-8 j: ctlfgjmlr",
    "1-3 t: sfgg",
    "1-6 n: hnnnnnnn",
    "9-18 v: vvvqvvpvfvvvmhvkpl",
    "1-9 z: mzzzzzzzq",
    "5-6 b: bbpbbb",
    "1-4 m: cmmr",
    "3-5 f: rfhqx",
    "3-4 c: cccc",
    "11-17 d: ddddddddsddkdddxddd",
    "17-18 l: lllllllllllllllllq",
    "10-11 f: fffffffffnqf",
    "6-10 f: cfffffldnffffvf",
    "10-14 d: sgddddnqxdgdtdxdrrmd",
    "3-4 v: vvghv",
    "6-11 g: ggtgfnqggvggwxgghg",
    "4-5 l: llldm",
    "3-9 t: pzstwtqnxtttttkt",
    "13-14 z: zzzzzzzzzzzzzz",
    "11-12 w: jrkdwwwlwxwl",
    "5-10 r: hqkcrsprcr",
    "9-11 n: nnnnnnnnnnnn",
    "2-7 c: rcbgckj",
    "9-10 k: sngvkckmtw",
    "13-17 v: vhbvvvvvvvghvvvvb",
    "7-8 t: tttgbcqt",
    "8-9 v: vvvvvvvzsvvvvvv",
    "15-16 j: jjjjjjjjjjjjjjjj",
    "5-6 d: ddhdtshd",
    "6-8 x: bdxxxxxxxpxmbxx",
    "2-5 t: nxfwt",
    "1-2 v: vvpv",
    "6-7 r: rrwtrpr",
    "1-3 t: tttttst",
    "2-6 j: rpjrwhkq",
    "9-11 m: mqkmlmpmmcm",
    "4-5 n: vsxxknktfxnqm",
    "5-10 v: rbvfvvsttvrgbvvj",
    "1-9 g: ggdgggggkggg",
    "1-3 k: kskk",
    "17-19 p: ppppppphpppppmpppppp",
    "2-8 m: kvqdbmjcwwf",
    "1-2 r: rrhr",
    "5-12 j: qjjgtjjhjjjjjj",
    "10-11 m: mmmmmwmmmrmp",
    "10-12 h: hhhhhhhhhhxhh",
    "5-8 f: frtprsbf",
    "2-4 k: fpqb",
    "1-2 f: zfpf",
    "4-5 p: ppppp",
    "8-9 v: cqmzfrhvvbgxdvt",
    "2-6 p: pszftm",
    "4-5 z: zzzqz",
    "2-3 l: lkkl",
    "12-19 k: kkxzqfxmzklkssmsgkkv",
    "4-7 h: hhmhhhpp",
    "6-12 r: mrrrrrrrrrrrrrrrrrr",
    "4-15 q: gvlbpbqxvnbjqvn",
    "7-9 x: xxxxxxxnx",
    "2-3 c: rcrcfwczgc",
    "1-17 n: cnnnndnnnnnnnnnnznn",
    "4-8 c: rcccwbccl",
    "3-5 t: dltbt",
    "10-13 r: rrrrrrdrrgrrqnr",
    "3-5 r: qrhrprrrrrr",
    "1-7 m: pmkrxrznld",
    "8-16 b: bcmbnbbbbnzbbbbbfv",
    "7-9 c: cmcmchscw",
    "2-4 w: sfwwww",
    "3-10 h: qhlhhhdmhhhc",
    "7-8 b: dbbpbbqdj",
    "2-5 l: zlpwlzqsg",
    "12-15 m: mmmmdmmqmmmzmmf",
    "5-8 t: ttttcttkt",
    "15-16 m: lzmkmmmsmmmmmlmm",
    "3-9 b: bbbbbbbbb",
    "10-12 t: tttttttttjttlt",
    "8-12 x: xxrxxxxxjxxxxxx",
    "1-11 k: dbkkbzfqkkk",
    "5-6 n: nnknztn",
    "3-8 r: rnrpwqrdgxrhrrn",
    "6-10 s: sfshcstppsrxvk",
    "2-3 f: cffsrf",
    "7-13 b: dcfggfbztwnbctvhvghf",
    "1-7 z: zzzjzwdzz",
    "5-8 k: kkkkwkkb",
    "4-10 h: bkrbppchqhnqdl",
    "8-11 g: ztjbgzggggg",
    "1-3 j: jjxjjjjj",
    "16-17 x: xxxxxxxxxxxxxxxxt",
    "3-4 z: zzhz",
    "2-4 b: jrrbmbjvb",
    "7-9 s: sssssssss",
    "3-10 g: pgxgpggcgtkrxw",
    "13-15 x: xxvxmxxxxxxjxgtxtxxx",
    "13-17 x: xxxxxxxxxxgxgxxxvxx",
    "2-3 m: mwjmmm",
    "16-17 f: fffffwfffffffffff",
    "10-11 h: nqwxhtchhmhhhlhfhhh",
    "3-5 m: mmnmrmmt",
    "3-4 j: jzwjjpp",
    "9-18 d: dddfbdjqdddsfddtwz",
    "4-6 z: zzzzzxzzzzz",
    "2-3 h: hndfh",
    "9-10 h: hhthhhhhhgh",
    "8-10 w: vptrwwwnwwn",
    "5-9 d: jsvxdgndhk",
    "18-19 p: pqwmsqhxzpdpqthkmnp",
    "10-11 s: sshssssssbb",
    "1-4 z: zzzzz",
    "16-19 n: nntnmnnntbwdnxlmdtn",
    "7-8 r: prqcxsrrt",
    "6-9 k: kkkgkkkkkk",
    "7-11 m: tbhqvmtzfxzb",
    "7-8 x: mxxxxxxsjnxhjr",
    "6-10 l: llnlllllcl",
    "6-7 l: sljlfhl",
    "1-5 n: dnntb",
    "2-8 h: shzlhhvhxlwph",
    "17-18 w: wwwwwwwwwwwwwwwjwv",
    "5-12 d: ddddmddddddrd",
    "6-9 k: fkxkrkkkw",
    "3-5 z: gfkzz",
    "15-16 j: jjjdjjjjjjjjjjjjj",
    "7-17 d: ldwddddddddncdlxdd",
    "6-12 g: qgxmdgmlqgkgc",
    "1-10 w: zwwwwwwwwgw",
    "1-4 z: zzzpv",
    "2-9 k: kkpkkkkjdmkkkhm",
    "4-12 g: gggmgggglgggzggggcg",
    "8-11 z: zzzzzzsxzzzp",
    "3-8 s: ssssbsmbpshssbhxsq",
    "7-10 m: mmmmrmmmmcmkm",
    "3-7 m: mmpmmmj",
    "3-9 q: qvdqnxbqqm",
    "3-10 f: ffbcwcfpkf",
    "11-16 b: jvjbhvcnhhnbblbrmpbl",
    "5-6 l: lbnrll",
    "4-6 h: hhmhhmw",
    "1-15 h: whhhhhhhchlclhthrhh",
    "5-6 l: nlfllllpf",
    "2-3 f: nvffq",
    "15-20 l: llllllllllllllrllllz",
    "7-9 z: zzzzzznzwz",
    "1-6 m: mmmmmmm",
    "6-7 v: ckvbtcv"];

const parseInput = (input) => {
    const min = +input.split("-")[0];
    const max = +input.split(" ")[0].split("-")[1];
    const char = input.split(" ")[1].split(":")[0];
    const password = input.split(" ")[2];
    return {min, max, char, password}
}

const isValidPassword = (min, max, char, password) => {
    const charCount = password.split("").filter(c => c === char).length;
    return charCount >= min && charCount <= max
}

const isValidPassword2 = (min, max, char, password) => {
    const first = password.split("")[min - 1] === char;
    const second = password.split("")[max - 1] === char;
    return [first, second].filter(r => r).length === 1;
}

const countValidPasswords = (inputs, validator) => {
    return inputs.reduce((count, input) => {
        const {min, max, char, password} = parseInput(input);
        return validator(min, max, char, password) ? count + 1 : count;
    }, 0)
}

console.log(countValidPasswords(input, isValidPassword));
console.log(countValidPasswords(input, isValidPassword2));