(function () {
    var bg = NEJ.P, bh = bg("nej.e"), bM = bg("nej.ui"), cF = bg("nm.w"), bi;
    cF.Eh = NEJ.C();
    bi = cF.Eh.ci(bM.hL);
    var hB = bh.kM(["<div>", '  <div class="m-mask"></div>', '  <div class="m-opentip">', '    <div class="lay"><div class="note"><h3>链接打不开？</h3><p>请点击右上角<br>选择在 <span class="s-fc5">&nbsp;“${browser}”</span>&nbsp;中打开</p></div>', "  </div>", "</div>"].join(""));
    bi.cL = function (bf) {
        bf = bf || {};
        this.SS = bf.os;
        this.bhQ = bf.client;
        this.dq(bf)
    };
    bi.cP = function (bf) {
        bf = bf || {};
        bf.parent = document.body;
        bh.co(document.body, "z-hasnosupport");
        this.cT(bf);
        this.eQ([[this.bC, "click", this.ew.bp(this)]])
    };
    bi.dm = function () {
        this.dr();
        bh.ck(document.body, "z-hasnosupport")
    };
    bi.MR = function () {
        var wX = null;
        switch (this.SS) {
            case"wp":
                wX = "ie";
                break;
            case"ios":
                wX = "Safari";
                break;
            default:
                wX = "浏览器"
        }
        this.hn = bh.jM(bh.dX(hB, {browser: wX}))
    };
    bi.ew = function (bj) {
        this.bK("onclose");
        this.cA()
    }
})();
(function () {
    var bg = NEJ.P, bh = bg("nej.e"), bM = bg("nej.ui"), cF = bg("nm.w"), bi;
    cF.btB = NEJ.C();
    bi = cF.btB.ci(bM.hL);
    var cz = null;
    var hB = bh.jM(['<div class="m-mask"></div>', '<div class="m-sharetip">', '    <p>请点击右上角<span class="icn"></span></p>', "    <p>分享给更多小伙伴</p>", "</div>"].join(""));
    bi.cP = function (bf) {
        bf = bf || {};
        bf.parent = document.body;
        this.cT(bf);
        this.eQ([[this.bC, "click", this.ew.bp(this)]])
    };
    bi.MR = function () {
        this.hn = hB
    };
    bi.ew = function (bj) {
        this.bK("onclose");
        this.cA()
    };
    cF.btB.cH = function () {
        if (!window.GClient)return alert("想分享给更多好友？复制上面的链接发给他们");
        if (cz)cz.cA();
        cz = cF.btB.bT()
    }
})();
(function () {
    var bg = NEJ.P, bh = bg("nej.e"), bF = bg("nej.j"), bm = bg("nej.u"), bo = bg("nej.v"), cW = bg("nej.ut"), El = bg("api"), cF = bg("nm.w"), bv = bg("nm.x"), bi;
    var UWP_VERSION_RE = /Windows Phone\s+(\d+)\.(\d+)/;
    var IOS_VERSION_RE = /OS\s+(\d+)_(\d+)/;
    var AND_VERSION_RE = /Android\s+(\d+)\.(\d+)/;
    var UWP_VERSION_STR_RE = /Windows Phone\s+([\d\.]+)/;
    var IOS_VERSION_STR_RE = /OS\s+([\d_]+)/;
    var AND_VERSION_STR_RE = /Android\s+([\d\.]+)/;
    var fK = window.navigator.userAgent;
    var bci = /appver/i.test(document.cookie);
    var btC = /\bipad\b/i.test(fK);
    var bBd = ["micromessenger", "qq", "weibo", "douban", "renren"];
    var bBc = {topic: "subject", activity: "topic"};
    cF.bzD = NEJ.C();
    bi = cF.bzD.ci(cW.dH);
    bi.cP = function (bf) {
        this.cT(bf);
        this.bwU = bf.platform || window.GPlatform || "";
        this.bhQ = bf.client || window.GClient || "";
        this.bBb = bf.device || window.GDevice || "";
        this.bAo = bf.resType || "";
        this.bAp = bf.resQuery || "";
        this.bAq = bf.downloadLink || window.GDownloadLink || "";
        this.bBa = this.bwU == "ios" ? this.bBb == "phone" ? "iphone" : "ipad" : this.bwU;
        this.eQ([[document.body, "click", this.ew.bp(this)], [document.body, "touchstart", NEJ.F]])
    };
    bi.ew = function (bj) {
        var bl = bo.cK(bj, "d:gAction");
        if (!bl)return;
        var cE = bh.bH(bl, "gAction");
        switch (cE) {
            case"wakeup":
                var bcb = bh.bH(bl, "gResType") || this.bAo, bzg = bh.bH(bl, "gResQuery") || this.bAp, iW = bv.bzC(bcb, bzg), bzp = !!(bh.bH(bl, "gAutoRedirect") && this.bhQ);
                this.bK("onclick", "wakeup", bl);
                bv.bix(this.bwU, this.bhQ, iW, bci ? "" : this.bAq, bzp);
                break;
            case"download":
                if (this.bzS) {
                    this.bzS = clearTimeout(this.bzS);
                    break
                }
                this.bK("onclick", "download", bl);
                this.bzS = setTimeout(function () {
                    bv.Cf(this.bwU, this.bhQ, this.bAq, this.bBa)
                }.bp(this), 100);
                break;
            case"resource":
                var bcb = bh.bH(bl, "gResType"), bzg = bh.bH(bl, "gResQuery"), iW = bv.bzC(bcb, bzg), bzn = bh.fI(bl, "href"), bzA = +(new Date);
                bzn = location.protocol + "//" + location.host + (/^\//.test(bzn) ? bzn : "/m");
                this.bK("onclick", "resource", bl);
                if (bci) {
                    bv.mK(iW);
                    bo.fV(bj)
                } else if (bv.buS() >= 9) {
                    bv.bdn(iW, bzn, true);
                    setTimeout(function () {
                        if (new Date - bzA < 200)location.href = bzn
                    }, 100);
                    bo.fV(bj)
                } else {
                    bv.mK(iW)
                }
                break;
            case"share":
                this.bK("onclick", "share", bl);
                if (bci) {
                    bv.mK(bv.bzC(this.bAo, this.bAp))
                } else {
                    cF.btB.cH()
                }
                break
        }
    };
    var buN = bv.buR = function () {
        return /Windows Phone/.test(fK)
    };
    var GU = bv.blL = function () {
        return /Android/.test(fK) && !buN()
    };
    var St = bv.blc = function () {
        return /(?:i(?:Phone|P(?:o|a)d))/.test(fK)
    };
    var Wt = bv.buS = function () {
        if (!St())return 0;
        var HO = fK.match(IOS_VERSION_RE);
        return parseInt(HO[1], 10) + parseInt(HO[2], 10) / 10
    };
    var buQ = bv.buT = function () {
        if (!buN())return 0;
        var HO = fK.match(UWP_VERSION_RE);
        return parseInt(HO[1], 10) + parseInt(HO[2], 10) / 10
    };
    var buO = bv.buU = function () {
        if (!GU())return 0;
        var HO = fK.match(AND_VERSION_RE);
        return parseInt(HO[1], 10) + parseInt(HO[2], 10) / 10
    };
    var bjX = bv.buh = function () {
        return /windows phone 8/i.test(fK)
    };
    var RI = function (iW) {
        var cr = bm.gw(location.search.slice(1)), lP = bm.gw(location.hash && location.hash.split("?")[1]), fz = [];
        if (cr.yyfrom) {
            fz.push("yyfrom=" + cr.yyfrom)
        }
        if (lP.thirdfrom) {
            fz.push("thirdfrom=" + lP.thirdfrom)
        }
        return fz.length > 0 ? iW + (iW.indexOf("?") > 0 ? "&" : "?") + fz.join("&") : iW
    };
    bv.GP = function (ef) {
        return bm.fZ(bBd, ef) >= 0
    };
    bv.mK = function () {
        var EE = [], GO = null, di = null;
        var bdr = function () {
            bm.cB(EE, window.clearTimeout);
            EE = []
        };
        bo.bQ(window, "blur pagehide beforeunload", bdr);
        return function (iW, EI) {
            if (!iW)return;
            iW = RI(iW);
            window.setTimeout(function () {
                if (typeof EI == "string" && EI.length > 0) {
                    EE.push(window.setTimeout(function () {
                        if (+(new Date) - GO < 3100) {
                            window.top.location.href = EI
                        }
                    }, 3e3))
                }
                GO = +(new Date);
                if (Wt() >= 9) {
                    location.href = iW
                } else {
                    di = document.createElement("iframe");
                    di.src = iW;
                    di.style.display = "none";
                    document.body.appendChild(di);
                    setTimeout(function () {
                        document.body.removeChild(di);
                        di = null
                    }, 0)
                }
            }, 0)
        }
    }();
    bv.bdn = function (iW, xt, bzp) {
        var iW = RI(iW), KL = /igame\.163\.com/.test(location.host) ? "igame.163.com" : "m.music.163.com", cY = "//" + KL + "/m/applink/?scheme=" + encodeURIComponent(iW);
        if (typeof xt == "string" && xt)cY += "&dl=" + encodeURIComponent(xt);
        if (typeof bzp == "boolean" && bzp)cY += "&redirect=1";
        location.href = cY
    };
    bv.bix = function (lE, ef, iW, xt, bzp) {
        if (xt && lE == "android")xt = "/m?dl=" + encodeURIComponent(xt);
        if (bci) {
            bv.mK(iW)
        } else if (Wt() >= 9 && !btC) {
            xt = ef == "micromessenger" || ef == "qq" ? "" : xt;
            bv.bdn(iW, xt, bzp)
        } else if (!ef || !bv.GP(ef)) {
            bv.mK(iW, xt)
        } else {
            cF.Eh.bT({os: lE})
        }
    };
    bv.Cf = function (lE, ef, xt, uS) {
        if (lE == "ios" && (ef == "weibo" || ef == "douban") || uS == "ipad" && (ef == "micromessenger" || ef == "qq")) {
            cF.Eh.bT({os: lE})
        } else {
            location.href = xt
        }
    };
    bv.btP = function (lz, fz) {
        if (GU()) {
            bv.mK("orpheus://openimg?" + bm.eR({position: fz.position, urls: JSON.stringify(lz)}))
        } else {
            bv.mK("orpheus://browseimg/imgs?imgs=" + encodeURIComponent(lz.join(",")));
            setTimeout(function () {
                bv.mK("orpheus://browseimg/openimg?" + bm.eR(fz))
            }, 0)
        }
    };
    bv.EL = function () {
        var HO = UWP_VERSION_STR_RE.exec(fK);
        if (HO)return HO[1];
        HO = IOS_VERSION_STR_RE.exec(fK);
        if (HO)return HO[1].replace(/_/g, ".");
        HO = AND_VERSION_STR_RE.exec(fK);
        if (HO)return HO[1];
        return ""
    };
    bv.bzC = function (bcb, bzg) {
        var mk = bBc[bcb] || bcb;
        return "orpheus://" + mk + (/^\d+$/.test(bzg + "") ? "/" : "?") + bzg
    };
    if (window.GLogSource) {
        var eL = location.hash;
        if (eL.indexOf("thirdfrom") < 0 && window.GClient != "renren") {
            location.hash = eL + (eL.indexOf("?") > 0 ? "&" : "?") + "thirdfrom=" + window.GLogSource
        }
    }
})();
(function () {
    var bg = NEJ.P, bX = NEJ.O, bh = bg("nej.e"), bm = bg("nej.u"), cV = bg("nej.ui"), bo = bg("nej.v"), bL = bg("nej.ut"), cF = bg("nm.w"), bv = bg("nm.x"), bi, cf;
    if (cF.CD)return;
    cF.CD = NEJ.C();
    bi = cF.CD.ci(bL.dH);
    var HR = {
        factor: 1.5,
        delta: 0,
        setParam: 1,
        paramWidth: 0,
        heightRatio: 0,
        enlarge: false,
        tostatic: false,
        quality: 75,
        clazz: "j-lazy",
        sbody: window,
        container: document.body,
        dynamic: false,
        blankImage: "",
        webp: true
    };
    var HS = "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    (function () {
        var lastTime = 0;
        var vendors = ["webkit", "moz"];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"]
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback, element) {
                var currTime = (new Date).getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                    callback(currTime + timeToCall)
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id
            }
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id)
            }
        }
    })();
    bi.cL = function (bf) {
        this.dq(bf)
    };
    bi.cP = function (bf) {
        var iJ = this, CB = false;
        var CA = function () {
            if (!CB) {
                CB = true;
                window.requestAnimationFrame(HN)
            }
        }, HN = function () {
            iJ.HL.call(iJ);
            if (iJ.bpP.dynamic || iJ.fj && iJ.fj.length) {
                CB = false
            } else {
                bo.kH(iJ.xq, "scroll", CA)
            }
        };
        this.cT(bf);
        bf = NEJ.X(NEJ.X({}, HR), bf);
        bf.webp &= window.GWebpSupport || 0;
        bf.webp &= this.qQ();
        this.xq = bf.sbody;
        this.HW = bf.container;
        this.bpP = bf;
        this.fj = bh.cv(this.HW, bf.clazz);
        bo.bQ(this.xq, "scroll", CA);
        HN()
    };
    bi.Jy = function () {
        var jQ = window.devicePixelRatio || Math.sqrt(screen.deviceXDPI * screen.deviceYDPI) / 96 || 1;
        if (isNaN(jQ)) {
            jQ = 1
        }
        return function () {
            return jQ
        }
    }();
    bi.JC = function (dy, CT) {
        if (dy.indexOf(".music.126.net") > 0) {
            var cr = {};
            switch (this.bpP.setParam) {
                case 0:
                    break;
                case 1:
                    var gl = this.bpP.paramWidth || CT.width;
                    if (!gl || gl < 10) {
                        gl = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth
                    }
                    var beX = Math.ceil(this.Jy() * gl);
                    if (!this.bpP.heightRatio) {
                        cr.thumbnail = beX + "x0"
                    } else {
                        cr.thumbnail = beX + "y" + Math.ceil(beX * this.bpP.heightRatio)
                    }
                    break;
                case 2:
                    var fC = this.bpP.paramWidth || CT.height;
                    if (!fC) {
                        fC = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth
                    }
                    var bfb = Math.ceil(this.Jy() * fC);
                    if (!this.bpP.heightRatio) {
                        cr.thumbnail = "0x" + bfb
                    } else {
                        cr.thumbnail = Math.ceil(bfb * this.bpP.heightRatio) + "y" + bfb
                    }
                    break
            }
            cr.quality = this.bpP.quality;
            if (this.bpP.enlarge) {
                cr.enlarge = 1
            }
            if (cr.thumbnail) {
                cr.tostatic = +this.bpP.tostatic
            }
            if (this.bpP.webp) {
                cr.type = "webp";
                dy = dy.replace(/\.(jpg|jpeg|png)/, ".webp")
            }
            cr = bm.eR(cr);
            if (cr) {
                dy += "?imageView&" + cr
            }
        }
        return dy
    };
    bi.JE = function (bq) {
        if (bq && bq.tagName.toUpperCase() == "IMG") {
            var btj = bq.src.split("?"), cr = btj[1] || {};
            cr = bm.gw(cr);
            if (cr.type == "webp") {
                delete cr.type;
                btj[1] = bm.eR(cr);
                bq.src = btj.join("?")
            } else {
                bq.src = this.bpP.blankImage || HS;
                bq.onload = null;
                bq.onerror = null
            }
        }
    };
    bi.JF = function (bq) {
        bh.co(bq, "z-loaded");
        this.bK("onimgload", bq)
    };
    bi.XT = function (YD) {
        if (YD) {
            this.fj = bh.cv(this.HW, this.bpP.clazz)
        }
        this.HL()
    };
    bi.HL = function (bj) {
        var bq = bo.cK(bj) || {};
        if (!bq) {
            return
        }
        if (!bq.scrollHeight) {
            bq = bh.ll()
        }
        var cq = bh.kX(this.HW), ds = this.bpP.delta + bq.clientHeight * this.bpP.factor + bq.scrollTop - cq.y, BF = [];
        for (var i = 0; i < this.fj.length; i++) {
            var CT = this.fj[i];
            if (bh.kX(CT, this.HW).y < ds) {
                var dy = bh.bH(CT, "src");
                if (dy && CT.src != dy) {
                    CT.onerror = this.JE.bp(this, CT);
                    CT.onload = this.JF.bp(this, CT);
                    if (bh.bH(CT, "type") == "gif") {
                        CT.src = this.bti(dy)
                    } else {
                        CT.src = this.JC(dy, CT)
                    }
                    bh.bH(CT, "src", "")
                }
            } else {
                BF.push(CT)
            }
        }
        this.fj = BF
    };
    bi.qQ = function () {
        var elem = document.createElement("canvas");
        if (!!(elem.getContext && elem.getContext("2d"))) {
            return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0
        } else {
            return false
        }
    };
    bi.dm = function () {
        this.dr()
    };
    bi.bti = function (dy) {
        var bx = this.btg(dy);
        if (!!bx) {
            return dy.substr(0, dy.length - bx.length) + "gif"
        }
        return dy
    };
    bi.btg = function (dC) {
        return ((/\.(\w+)$/.exec(dC) || bX)[1] || "").toLowerCase()
    };
    bv.bdx = function (bf) {
        cF.CD.bbi(bf, true)
    }
})();
(function () {
    var bg = NEJ.P, bh = bg("nej.e"), bF = bg("nej.j"), bm = bg("nej.u"), bo = bg("nej.v"), El = bg("api"), cF = bg("nm.w"), ir = bg("nm.u"), bv = bg("nm.x");
    bv.bkE = function () {
        return /appver/.test(document.cookie)
    };
    bv.bsU = function () {
        return !!window.GMobile
    };
    bv.blA = function () {
        return !!(window.GUser && GUser.userId)
    };
    bv.bsT = function () {
        return !!(window.GUser && GUser.userId && GUser.nickname)
    };
    bv.bth = function () {
        return !bv.bkE() && bv.bsU()
    };
    bv.bhR = function (Rv, fu) {
        El.backaction = function () {
            setTimeout(function () {
                if (fu) {
                    fu()
                } else {
                    bv.mK("orpheus://backcntl/security/0")
                }
            }, 0)
        };
        bv.mK("orpheus://backcntl/security/" + (Rv ? 1 : 0))
    };
    bv.GQ = function () {
        var QZ = window.GPlatform == "wp" ? "orpheus://welfare/login?rurl=" : "orpheus://login?rurl=";
        return function (QP) {
            bv.mK(QZ + encodeURIComponent(QP))
        }
    }();
    bv.iR = function (cE, bI, dS, bf) {
        if (!cE)return;
        dS = dS || NEJ.F;
        bf = bf || {};
        bF.cJ("/api/feedback/weblog", {
            method: "post",
            sync: !!bf.sync,
            timeout: 100,
            data: bm.eR({logs: JSON.stringify([{action: cE, json: bI || null}])}),
            onload: dS,
            onerror: dS
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + cE + ", json=" + JSON.stringify(bI))
        }
    };
    bv.biF = function (ot, biD, bf) {
        var mG, bV, bw;
        var Zn = null;
        var biB = 0;
        if (!bf)bf = {};
        var biE = function () {
            biB = bf.leading === false ? 0 : +(new Date);
            Zn = null;
            bw = ot.apply(mG, bV);
            if (!Zn)mG = bV = null
        };
        return function () {
            var jq = +(new Date);
            if (!biB && bf.leading === false)biB = jq;
            var biC = biD - (jq - biB);
            mG = this;
            bV = arguments;
            if (biC <= 0 || biC > biD) {
                if (Zn) {
                    clearTimeout(Zn);
                    Zn = null
                }
                biB = jq;
                bw = ot.apply(mG, bV);
                if (!Zn)mG = bV = null
            } else if (!Zn && bf.trailing !== false) {
                Zn = setTimeout(biE, biC)
            }
            return bw
        }
    };
    bv.bky = function (ot, biD, FL) {
        var Zn, bV, mG, bke, bw;
        var biE = function () {
            var jZ = +(new Date) - bke;
            if (jZ < biD && jZ >= 0) {
                Zn = setTimeout(biE, biD - jZ)
            } else {
                Zn = null;
                if (!FL) {
                    bw = ot.apply(mG, bV);
                    if (!Zn)mG = bV = null
                }
            }
        };
        return function () {
            mG = this;
            bV = arguments;
            bke = +(new Date);
            var bkx = FL && !Zn;
            if (!Zn)Zn = setTimeout(biE, biD);
            if (bkx) {
                bw = ot.apply(mG, bV);
                mG = bV = null
            }
            return bw
        }
    };
    bv.btf = function (bsH) {
        if (bv.bsT())return;
        if (bv.bsU()) {
            bsH = bsH || location.pathname + location.search + location.hash;
            var bG = location.protocol + "//" + bsH;
            bv.mK("orpheus://login?" + bm.eR({rurl: bsH, url: bG}));
            return
        }
        var fU = location.protocol + "//" + location.hostname, bte = "d594a5dcfaa494ab9d8e6fee30cc453da673b1f8eed2d6c52110a6836ce6f3d2", btd = "02f1ca04ac31749142e1995bb952608ff782500e510c479ad964e1aeb9e1d7af", cr = {
            client_id: location.hostname == "music.163.com" ? bte : btd,
            redirect_uri: fU + "/m/musicfansjump",
            state: bsH ? fU + bsH : location.href
        };
        location.href = fU + "/m/oauth2/authorize?" + bm.eR(cr)
    };
    bv.bws = function () {
        return window.localStorage && window.localStorage.getItem
    };
    bv.bwr = function (bD) {
        var bk = arguments[1];
        if (!bD)return;
        if (this.bws()) {
            if (bk) {
                bF.oT(bD, bk)
            } else {
                return bF.mz(bD)
            }
        } else {
            if (bk || bk == "") {
                bF.nM(bD, bk)
            } else {
                return bF.nM(bD)
            }
        }
    };
    bv.bwq = function (bD) {
        if (!bD)return;
        if (this.bws()) {
            bF.ut(bD)
        } else {
            bF.nM(bD, "")
        }
    };
    bv.btu = function (bf) {
        var cS = /from=timeline/.test(location.search) ? "wxtimeline" : "wxsession";
        var eI = function (eN) {
            bv.iR("indirectshare", {type: bf.resType || "", id: bf.resId || "", url: location.href, from: cS, to: eN})
        };
        document.addEventListener("WeixinJSBridgeReady", function () {
            WeixinJSBridge.on("menu:share:appmessage", function (argv) {
                eI("wxsession");
                WeixinJSBridge.invoke("sendAppMessage", {
                    img_url: bf.picUrl || "",
                    img_width: "580",
                    img_height: "580",
                    link: bf.link || location.href,
                    desc: bf.subTitle || location.href,
                    title: bf.title || document.title
                }, NEJ.F)
            });
            WeixinJSBridge.on("menu:share:timeline", function (argv) {
                eI("wxtimeline");
                WeixinJSBridge.invoke("shareTimeline", {
                    img_url: bf.picUrl || "",
                    img_width: "580",
                    img_height: "580",
                    link: bf.link || location.href,
                    desc: (bf.reversal ? bf.title : bf.subTitle) || location.href,
                    title: (bf.reversal ? bf.subTitle || bf.title : bf.title) || document.title
                }, bg.noop)
            })
        }, false)
    };
    bv.btM = function (QP) {
        QP = QP || location.href;
        if (bv.bth()) {
            bv.bix(GPlatform, GClient, "orpheus://openurl?url=" + encodeURIComponent(QP), GDownloadLink)
        } else if (!bv.bsT()) {
            bv.btf()
        } else {
            return true
        }
    };
    bv.bug = function (bl, boD) {
        if (!bl)return null;
        if (bh.dY(bl, boD))return bl;
        return bv.bug(bl.parentNode, boD)
    };
    bv.bzt = function (qr) {
        function pad(jU) {
            return jU + Array(6 - ("" + jU).length + 1).join(0)
        }

        var bR = qr.split(".");
        var jZ = bR.pop();
        var QQ = "";
        for (var i = 0, l = bR.length; i < l; i++) {
            QQ = QQ + pad(bR[i])
        }
        return parseInt(QQ + jZ, 10)
    };
    bv.bAZ = function (eH) {
        return GPlatform == "ios" && GDevice == "pad" && bv.bzt(bF.nM("appver")) >= bv.bzt(eH.ipad) || GPlatform == "ios" && GDevice == "phone" && bv.bzt(bF.nM("appver")) >= bv.bzt(eH.iphone) || GPlatform == "android" && GDevice == "phone" && bv.bzt(bF.nM("appver")) >= bv.bzt(eH.android)
    };
    bv.bAY = function () {
        var cm = null;
        return function (zK) {
            if (cm) {
                zK(cm)
            } else {
                bF.cJ("/api/copyright/can_share_song/config", {
                    type: "json", onload: function (bw) {
                        if (bw.data) {
                            cm = bw.data;
                            zK(cm)
                        } else {
                            zK({})
                        }
                    }, onerror: function (bw) {
                        zK({})
                    }
                })
            }
        }
    }();
    bv.bzG = function () {
        var bAt = -1;
        var bAX = function () {
            return typeof window.orientation === "undefined" ? window.outerWidth > window.outerHeight ? 90 : 0 : window.orientation
        };
        var bAW = function () {
            window.orientation = bAX();
            if (window.orientation != bAt) {
                bAt = window.orientation;
                bo.bK(window, "orientationchange")
            }
        };
        return function () {
            bo.bQ(window, "resize", bAW)
        }
    }();
    bv.bBL = function () {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return "IE " + (tem[1] || "")
        }
        if (M[1] === "Chrome") {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null)return tem.slice(1).join(" ").replace("OPR", "Opera")
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
        if ((tem = ua.match(/version\/(\d+)/i)) != null)M.splice(1, 1, tem[1]);
        return M.join(" ")
    }
})();
"use strict";
!function (a, b) {
    "function" == typeof define && (define.amd || define.cmd) ? define(b) : a.touch = b()
}(this, function () {
    function a() {
        var a = "mouseup mousedown mousemove mouseout", c = "touchstart touchmove touchend touchcancel", d = b.hasTouch ? c : a;
        d.split(" ").forEach(function (a) {
            document.addEventListener(a, A, !1)
        })
    }

    var b = {};
    b.PCevts = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        touchcancel: "mouseout"
    }, b.hasTouch = "ontouchstart"in window, b.getType = function (a) {
        return Object.prototype.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
    }, b.getSelector = function (a) {
        if (a.id)return "#" + a.id;
        if (a.className) {
            var b = a.className.split(/\s+/);
            return "." + b.join(".")
        }
        return a === document ? "body" : a.tagName.toLowerCase()
    }, b.matchSelector = function (a, b) {
        return a.webkitMatchesSelector(b)
    }, b.getEventListeners = function (a) {
        return a.listeners
    }, b.getPCevts = function (a) {
        return this.PCevts[a] || a
    }, b.forceReflow = function () {
        var a = "reflowDivBlock", b = document.getElementById(a);
        b || (b = document.createElement("div"), b.id = a, document.body.appendChild(b));
        var c = b.parentNode, d = b.nextSibling;
        c.removeChild(b), c.insertBefore(b, d)
    }, b.simpleClone = function (a) {
        return Object.create(a)
    }, b.getPosOfEvent = function (a) {
        if (this.hasTouch) {
            for (var b = [], c = null, d = 0, e = a.touches.length; e > d; d++)c = a.touches[d], b.push({
                x: c.pageX,
                y: c.pageY
            });
            return b
        }
        return [{x: a.pageX, y: a.pageY}]
    }, b.getDistance = function (a, b) {
        var c = b.x - a.x, d = b.y - a.y;
        return Math.sqrt(c * c + d * d)
    }, b.getFingers = function (a) {
        return a.touches ? a.touches.length : 1
    }, b.calScale = function (a, b) {
        if (a.length >= 2 && b.length >= 2) {
            var c = this.getDistance(a[1], a[0]), d = this.getDistance(b[1], b[0]);
            return d / c
        }
        return 1
    }, b.getAngle = function (a, b) {
        return 180 * Math.atan2(b.y - a.y, b.x - a.x) / Math.PI
    }, b.getAngle180 = function (a, b) {
        var c = Math.atan(-1 * (b.y - a.y) / (b.x - a.x)) * (180 / Math.PI);
        return 0 > c ? c + 180 : c
    }, b.getDirectionFromAngle = function (a) {
        var b = {
            up: -45 > a && a > -135,
            down: a >= 45 && 135 > a,
            left: a >= 135 || -135 >= a,
            right: a >= -45 && 45 >= a
        };
        for (var c in b)if (b[c])return c;
        return null
    }, b.getXYByElement = function (a) {
        for (var b = 0, c = 0; a.offsetParent;)b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
        return {left: b, top: c}
    }, b.reset = function () {
        h = i = j = null, q = o = k = l = !1, m = !1, f = {}, t = !1
    }, b.isTouchMove = function (a) {
        return "touchmove" === a.type || "mousemove" === a.type
    }, b.isTouchEnd = function (a) {
        return "touchend" === a.type || "mouseup" === a.type || "touchcancel" === a.type
    }, b.env = function () {
        var a = {}, b = navigator.userAgent, c = b.match(/(Android)[\s\/]+([\d\.]+)/), d = b.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/), e = b.match(/(Windows\s+Phone)\s([\d\.]+)/), f = /WebKit\/[\d.]+/i.test(b), g = d ? navigator.standalone ? f : /Safari/i.test(b) && !/CriOS/i.test(b) && !/MQQBrowser/i.test(b) : !1;
        return c && (a.android = !0, a.version = c[2]), d && (a.ios = !0, a.version = d[2].replace(/_/g, "."), a.ios7 = /^7/.test(a.version), "iPad" === d[1] ? a.ipad = !0 : "iPhone" === d[1] ? (a.iphone = !0, a.iphone5 = 568 == screen.height) : "iPod" === d[1] && (a.ipod = !0)), e && (a.wp = !0, a.version = e[2], a.wp8 = /^8/.test(a.version)), f && (a.webkit = !0), g && (a.safari = !0), a
    }();
    var c = {
        proxyid: 0, proxies: [], trigger: function (a, b, c) {
            c = c || {};
            var d, e = {bubbles: !0, cancelable: !0, detail: c};
            try {
                "undefined" != typeof CustomEvent ? (d = new CustomEvent(b, e), a && a.dispatchEvent(d)) : (d = document.createEvent("CustomEvent"), d.initCustomEvent(b, !0, !0, c), a && a.dispatchEvent(d))
            } catch (f) {
                console.warn("Touch.js is not supported by environment.")
            }
        }, bind: function (a, c, d) {
            a.listeners = a.listeners || {}, a.listeners[c] ? a.listeners[c].push(d) : a.listeners[c] = [d];
            var e = function (a) {
                b.env.ios7 && b.forceReflow(), a.originEvent = a;
                for (var c in a.detail)"type" !== c && (a[c] = a.detail[c]);
                a.startRotate = function () {
                    t = !0
                };
                var e = d.call(a.target, a);
                "undefined" == typeof e || e || (a.stopPropagation(), a.preventDefault())
            };
            d.proxy = d.proxy || {}, d.proxy[c] ? d.proxy[c].push(this.proxyid++) : d.proxy[c] = [this.proxyid++], this.proxies.push(e), a.addEventListener && a.addEventListener(c, e, !1)
        }, unbind: function (a, b, c) {
            if (c) {
                var d = c.proxy[b];
                d && d.length && d.forEach(function () {
                    a.removeEventListener && a.removeEventListener(b, this.proxies[this.proxyid], !1)
                })
            } else {
                var e = a.listeners[b];
                e && e.length && e.forEach(function (c) {
                    a.removeEventListener(b, c, !1)
                })
            }
        }, delegate: function (a, c, d, e) {
            var f = function (c) {
                var f, g;
                c.originEvent = c;
                for (var h in c.detail)"type" !== h && (c[h] = c.detail[h]);
                c.startRotate = function () {
                    t = !0
                };
                var i = b.getSelector(a) + " " + d, j = b.matchSelector(c.target, i), k = b.matchSelector(c.target, i + " " + c.target.nodeName);
                if (!j && k) {
                    for (b.env.ios7 && b.forceReflow(), f = c.target; !b.matchSelector(f, i);)f = f.parentNode;
                    g = e.call(c.target, c), "undefined" == typeof g || g || (c.stopPropagation(), c.preventDefault())
                } else b.env.ios7 && b.forceReflow(), (j || k) && (g = e.call(c.target, c), "undefined" == typeof g || g || (c.stopPropagation(), c.preventDefault()))
            };
            e.proxy = e.proxy || {}, e.proxy[c] ? e.proxy[c].push(this.proxyid++) : e.proxy[c] = [this.proxyid++], this.proxies.push(f), a.listeners = a.listeners || {}, a.listeners[c] ? a.listeners[c].push(f) : a.listeners[c] = [f], a.addEventListener && a.addEventListener(c, f, !1)
        }, undelegate: function (a, b, c, d) {
            if (d) {
                var e = d.proxy[b];
                e.length && e.forEach(function () {
                    a.removeEventListener && a.removeEventListener(b, this.proxies[this.proxyid], !1)
                })
            } else {
                var f = a.listeners[b];
                f.forEach(function (c) {
                    a.removeEventListener(b, c, !1)
                })
            }
        }
    }, d = {
        tap: !0,
        doubleTap: !0,
        tapMaxDistance: 10,
        hold: !0,
        tapTime: 200,
        holdTime: 650,
        maxDoubleTapInterval: 300,
        swipe: !0,
        swipeTime: 300,
        swipeMinDistance: 18,
        swipeFactor: 5,
        drag: !0,
        pinch: !0,
        minScaleRate: 0,
        minRotationAngle: 0
    }, e = {
        TOUCH_START: "touchstart",
        TOUCH_MOVE: "touchmove",
        TOUCH_END: "touchend",
        TOUCH_CANCEL: "touchcancel",
        MOUSE_DOWN: "mousedown",
        MOUSE_MOVE: "mousemove",
        MOUSE_UP: "mouseup",
        CLICK: "click",
        PINCH_START: "pinchstart",
        PINCH_END: "pinchend",
        PINCH: "pinch",
        PINCH_IN: "pinchin",
        PINCH_OUT: "pinchout",
        ROTATION_LEFT: "rotateleft",
        ROTATION_RIGHT: "rotateright",
        ROTATION: "rotate",
        SWIPE_START: "swipestart",
        SWIPING: "swiping",
        SWIPE_END: "swipeend",
        SWIPE_LEFT: "swipeleft",
        SWIPE_RIGHT: "swiperight",
        SWIPE_UP: "swipeup",
        SWIPE_DOWN: "swipedown",
        SWIPE: "swipe",
        DRAG: "drag",
        DRAGSTART: "dragstart",
        DRAGEND: "dragend",
        HOLD: "hold",
        TAP: "tap",
        DOUBLE_TAP: "doubletap"
    }, f = {
        start: null,
        move: null,
        end: null
    }, g = 0, h = null, i = null, j = null, k = !1, l = !1, m = !1, n = {}, o = !1, p = null, q = !1, r = null, s = 1, t = !1, u = [], v = 0, w = 0, x = 0, y = null, z = {
        getAngleDiff: function (a) {
            for (var c = parseInt(v - b.getAngle180(a[0], a[1]), 10), d = 0; Math.abs(c - w) > 90 && d++ < 50;)0 > w ? c -= 180 : c += 180;
            return w = parseInt(c, 10)
        }, pinch: function (a) {
            var g = a.target;
            if (d.pinch) {
                if (!o)return;
                if (b.getFingers(a) < 2 && !b.isTouchEnd(a))return;
                var h = b.calScale(f.start, f.move), i = this.getAngleDiff(f.move), j = {
                    type: "",
                    originEvent: a,
                    scale: h,
                    rotation: i,
                    direction: i > 0 ? "right" : "left",
                    fingersCount: b.getFingers(a)
                };
                if (l ? b.isTouchMove(a) ? (j.fingerStatus = "move", c.trigger(g, e.PINCH, j)) : b.isTouchEnd(a) && (j.fingerStatus = "end", c.trigger(g, e.PINCH_END, j), b.reset()) : (l = !0, j.fingerStatus = "start", c.trigger(g, e.PINCH_START, j)), Math.abs(1 - h) > d.minScaleRate) {
                    var k = b.simpleClone(j), m = 1e-11;
                    h > s ? (s = h - m, c.trigger(g, e.PINCH_OUT, k, !1)) : s > h && (s = h + m, c.trigger(g, e.PINCH_IN, k, !1)), b.isTouchEnd(a) && (s = 1)
                }
                if (Math.abs(i) > d.minRotationAngle) {
                    var n, p = b.simpleClone(j);
                    n = i > 0 ? e.ROTATION_RIGHT : e.ROTATION_LEFT, c.trigger(g, n, p, !1), c.trigger(g, e.ROTATION, j)
                }
            }
        }, rotateSingleFinger: function (a) {
            var d = a.target;
            if (t && b.getFingers(a) < 2) {
                if (!f.move)return;
                if (u.length < 2) {
                    var g = b.getXYByElement(d);
                    u = [{
                        x: g.left + d.offsetWidth / 2,
                        y: g.top + d.offsetHeight / 2
                    }, f.move[0]], v = parseInt(b.getAngle180(u[0], u[1]), 10)
                }
                var h = [u[0], f.move[0]], i = this.getAngleDiff(h), j = {
                    type: "",
                    originEvent: a,
                    rotation: i,
                    direction: i > 0 ? "right" : "left",
                    fingersCount: b.getFingers(a)
                };
                b.isTouchMove(a) ? j.fingerStatus = "move" : (b.isTouchEnd(a) || "mouseout" === a.type) && (j.fingerStatus = "end", c.trigger(d, e.PINCH_END, j), b.reset());
                var k = i > 0 ? e.ROTATION_RIGHT : e.ROTATION_LEFT;
                c.trigger(d, k, j), c.trigger(d, e.ROTATION, j)
            }
        }, swipe: function (a) {
            var h = a.target;
            if (o && f.move && !(b.getFingers(a) > 1)) {
                var i = Date.now(), j = i - g, l = b.getDistance(f.start[0], f.move[0]), p = {
                    x: f.move[0].x - n.left,
                    y: f.move[0].y - n.top
                }, q = b.getAngle(f.start[0], f.move[0]), r = b.getDirectionFromAngle(q), s = j / 1e3, t = 10 * (10 - d.swipeFactor) * s * s, u = {
                    type: e.SWIPE,
                    originEvent: a,
                    position: p,
                    direction: r,
                    distance: l,
                    distanceX: f.move[0].x - f.start[0].x,
                    distanceY: f.move[0].y - f.start[0].y,
                    x: f.move[0].x - f.start[0].x,
                    y: f.move[0].y - f.start[0].y,
                    angle: q,
                    duration: j,
                    fingersCount: b.getFingers(a),
                    factor: t
                };
                if (d.swipe) {
                    var v = function () {
                        var a = e;
                        switch (r) {
                            case"up":
                                c.trigger(h, a.SWIPE_UP, u);
                                break;
                            case"down":
                                c.trigger(h, a.SWIPE_DOWN, u);
                                break;
                            case"left":
                                c.trigger(h, a.SWIPE_LEFT, u);
                                break;
                            case"right":
                                c.trigger(h, a.SWIPE_RIGHT, u)
                        }
                    };
                    k ? b.isTouchMove(a) ? (u.fingerStatus = u.swipe = "move", c.trigger(h, e.SWIPING, u), j > d.swipeTime && j < d.swipeTime + 50 && l > d.swipeMinDistance && (v(), c.trigger(h, e.SWIPE, u, !1))) : (b.isTouchEnd(a) || "mouseout" === a.type) && (u.fingerStatus = u.swipe = "end", c.trigger(h, e.SWIPE_END, u), d.swipeTime > j && l > d.swipeMinDistance && (v(), c.trigger(h, e.SWIPE, u, !1))) : (u.fingerStatus = u.swipe = "start", k = !0, c.trigger(h, e.SWIPE_START, u))
                }
                d.drag && (m ? b.isTouchMove(a) ? (u.fingerStatus = u.swipe = "move", c.trigger(h, e.DRAG, u)) : b.isTouchEnd(a) && (u.fingerStatus = u.swipe = "end", c.trigger(h, e.DRAGEND, u)) : (u.fingerStatus = u.swipe = "start", m = !0, c.trigger(h, e.DRAGSTART, u)))
            }
        }, tap: function (a) {
            var h = a.target;
            if (d.tap) {
                var i = Date.now(), j = i - g, k = b.getDistance(f.start[0], f.move ? f.move[0] : f.start[0]);
                clearTimeout(p);
                var l = function () {
                    if (y && d.doubleTap && g - x < d.maxDoubleTapInterval) {
                        var a = b.getDistance(y, f.start[0]);
                        if (16 > a)return !0
                    }
                    return !1
                }();
                if (l)return clearTimeout(r), void c.trigger(h, e.DOUBLE_TAP, {
                    type: e.DOUBLE_TAP,
                    originEvent: a,
                    position: f.start[0]
                });
                if (d.tapMaxDistance < k)return;
                d.holdTime > j && b.getFingers(a) <= 1 && (q = !0, x = i, y = f.start[0], r = setTimeout(function () {
                    c.trigger(h, e.TAP, {type: e.TAP, originEvent: a, fingersCount: b.getFingers(a), position: y})
                }, d.tapTime))
            }
        }, hold: function (a) {
            var e = a.target;
            d.hold && (clearTimeout(p), p = setTimeout(function () {
                if (f.start) {
                    var g = b.getDistance(f.start[0], f.move ? f.move[0] : f.start[0]);
                    d.tapMaxDistance < g || q || c.trigger(e, "hold", {
                        type: "hold",
                        originEvent: a,
                        fingersCount: b.getFingers(a),
                        position: f.start[0]
                    })
                }
            }, d.holdTime))
        }
    }, A = function (a) {
        var c = a.target;
        switch (a.type) {
            case"touchstart":
            case"mousedown":
                u = [], o = !0, (!f.start || f.start.length < 2) && (f.start = b.getPosOfEvent(a)), b.getFingers(a) >= 2 && (v = parseInt(b.getAngle180(f.start[0], f.start[1]), 10)), g = Date.now(), h = a, n = {};
                var d = c.getBoundingClientRect(), e = document.documentElement;
                n = {
                    top: d.top + (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: d.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }, z.hold(a);
                break;
            case"touchmove":
            case"mousemove":
                if (!o || !f.start)return;
                f.move = b.getPosOfEvent(a), b.getFingers(a) >= 2 ? z.pinch(a) : t ? z.rotateSingleFinger(a) : z.swipe(a);
                break;
            case"touchend":
            case"touchcancel":
            case"mouseup":
            case"mouseout":
                if (!o)return;
                j = a, l ? z.pinch(a) : t ? z.rotateSingleFinger(a) : k ? z.swipe(a) : z.tap(a), b.reset(), v = 0, w = 0, a.touches && 1 === a.touches.length && (o = !0, t = !0)
        }
    }, B = function () {
        function a(a) {
            b.hasTouch || (a = b.getPCevts(a)), j.forEach(function (b) {
                c.delegate(b, a, h, g[a])
            })
        }

        function d(a) {
            b.hasTouch || (a = b.getPCevts(a)), j.forEach(function (b) {
                c.bind(b, a, g[a])
            })
        }

        var e, f, g, h, i = arguments;
        if (i.length < 2 || i > 4)return console.error("unexpected arguments!");
        var j = "string" === b.getType(i[0]) ? document.querySelectorAll(i[0]) : i[0];
        if (j = j.length ? Array.prototype.slice.call(j) : [j], 3 === i.length && "string" === b.getType(i[1]))return e = i[1].split(" "), f = i[2], void e.forEach(function (a) {
            b.hasTouch || (a = b.getPCevts(a)), j.forEach(function (b) {
                c.bind(b, a, f)
            })
        });
        if (3 !== i.length || "object" !== b.getType(i[1]))if (2 !== i.length || "object" !== b.getType(i[1])) {
            if (4 === i.length && "object" === b.getType(i[2]))return e = i[1].split(" "), f = i[3], void e.forEach(function (a) {
                b.hasTouch || (a = b.getPCevts(a)), j.forEach(function (b) {
                    c.bind(b, a, f)
                })
            });
            if (4 === i.length) {
                var k = j[0];
                return e = i[1].split(" "), h = i[2], f = i[3], void e.forEach(function (a) {
                    b.hasTouch || (a = b.getPCevts(a)), c.delegate(k, a, h, f)
                })
            }
        } else {
            g = i[1];
            for (var l in g)d(l)
        } else {
            g = i[1], h = i[2];
            for (var m in g)a(m)
        }
    }, C = function () {
        var a, d, e = arguments;
        if (e.length < 1 || e.length > 4)return console.error("unexpected arguments!");
        var f = "string" === b.getType(e[0]) ? document.querySelectorAll(e[0]) : e[0];
        if (f = f.length ? Array.prototype.slice.call(f) : [f], 1 === e.length || 2 === e.length)return void f.forEach(function (d) {
            a = e[1] ? e[1].split(" ") : Object.keys(d.listeners), a.length && a.forEach(function (a) {
                b.hasTouch || (a = b.getPCevts(a)), c.unbind(d, a), c.undelegate(d, a)
            })
        });
        if (3 === e.length && "function" === b.getType(e[2]))return d = e[2], void f.forEach(function (f) {
            a = e[1].split(" "), a.forEach(function (a) {
                b.hasTouch || (a = b.getPCevts(a)), c.unbind(f, a, d)
            })
        });
        if (3 === e.length && "string" === b.getType(e[2])) {
            var g = e[2];
            return void f.forEach(function (d) {
                a = e[1].split(" "), a.forEach(function (a) {
                    b.hasTouch || (a = b.getPCevts(a)), c.undelegate(d, a, g)
                })
            })
        }
        return 4 === e.length ? (d = e[3], void f.forEach(function (f) {
            a = e[1].split(" "), a.forEach(function (a) {
                b.hasTouch || (a = b.getPCevts(a)), c.undelegate(f, a, g, d)
            })
        })) : void 0
    }, D = function (a, d, e) {
        var f = arguments;
        b.hasTouch || (d = b.getPCevts(d));
        var g = "string" === b.getType(f[0]) ? document.querySelectorAll(f[0]) : f[0];
        g = g.length ? Array.prototype.call(g) : [g], g.forEach(function (a) {
            c.trigger(a, d, e)
        })
    };
    a();
    var E = {};
    return E.on = E.bind = E.live = B, E.off = E.unbind = E.die = C, E.config = d, E.trigger = D, E
});
(function () {
    var bg = NEJ.P, bX = NEJ.O, bm = bg("nej.u"), bF = bg("nej.j"), bv = bg("nm.x");
    var SETTING_KEY = "player-setting";
    var vl = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    vl = bF.mz(SETTING_KEY) || vl;
    bv.Tv = function () {
        return vl
    };
    bv.Ty = function (oE) {
        if (oE) {
            vl = oE;
            bF.oT(SETTING_KEY, oE)
        }
    }
})();
(function () {
    var bg = NEJ.P, bX = NEJ.O, bh = bg("nej.e"), bo = bg("nej.v"), bm = bg("nej.u"), bL = bg("nej.ut"), bv = bg("nm.x"), bE = bg("nm.d"), eI = bg("nm.w.player.log");
    var kw = bE.lr.bT();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var rp = function (bx, cQ, il) {
        var dQ = bv.fO("{0} {1} {2}", bm.qj(new Date, "yyyy-MM-dd HH:mm:ss"), bx, cQ);
        if (il == LogLevel.ERROR) {
            kw.nT("playerror", {message: cQ})
        }
        if (il >= LogLevel.INFO) {
            kw.bcI(dQ)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(dQ)
        }
    };
    eI.kT = function () {
        rp("PLAY_ERROR", bv.fO.apply(null, arguments), LogLevel.ERROR)
    };
    eI.hX = function () {
        rp("PLAY_INFO", bv.fO.apply(null, arguments), LogLevel.INFO)
    };
    eI.bhf = function () {
        rp("PLAY_DEBUG", bv.fO.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var bg = NEJ.P, bh = bg("nej.e"), bo = bg("nej.v"), bL = bg("nej.ut"), bm = bg("nej.u"), cF = bg("nm.w"), fu = bg("flash.cb");
    var cO = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var nD, uX, kn;
    cF.Uj = function (bx, dS) {
        if (bx != "flash") {
            if (!nD) {
                nD = bh.hm("audio");
                bm.cB(cO, function (bx) {
                    bo.bQ(nD, bx, onMediaCallBack)
                })
            }
            if (nD && nD.canPlayType && nD.canPlayType("audio/mpeg")) {
                dS(new MediaWrap("audio"));
                return
            }
        }
        if (!uX) {
            bh.qU({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (gy) {
                    uX = gy;
                    bm.cB(cO, function (bx) {
                        fu[bx] = onMediaCallBack;
                        uX.addCallback(bx, "flash.cb." + bx)
                    });
                    dS(new MediaWrap("flash"))
                }.bp(this)
            })
        } else {
            dS(new MediaWrap("flash"))
        }
    };
    function MediaWrap(nN) {
        var gM;
        bL.fF.bT({element: this, event: cO.concat(["interrupt", "recover"])});
        gM = nN == "audio" ? nD : uX;
        this.type = nN;
        this.destroy = function () {
        };
        this.setSrc = function (bG) {
            if (kn != this) {
                var jZ = kn;
                if (jZ) {
                    jZ.interrupt()
                }
                kn = this
            }
            if (nN == "flash") {
                gM.setSrc(bG)
            } else {
                gM.src = bG
            }
        };
        this.play = function () {
            if (kn != this) {
                var jZ = kn;
                if (jZ) {
                    jZ.interrupt();
                    kn = this;
                    this.recover()
                } else {
                    kn = this
                }
            }
            if (nN == "flash") {
                gM.as_play()
            } else {
                gM.play()
            }
        };
        this.pause = function () {
            if (kn != this)return;
            if (nN == "flash") {
                gM.as_pause()
            } else {
                gM.pause()
            }
        };
        this.load = function () {
            if (kn != this)return;
            if (nN == "flash") {
                gM.as_load()
            } else {
                gM.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return gM
        };
        var Us = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        bm.cB(Us, function (bD) {
            var qY = "get" + bD, qX = "set" + bD;
            if (nN == "flash") {
                if (!this[qY]) {
                    this[qY] = function () {
                        return gM[qY]()
                    }
                }
                if (!this[qX]) {
                    this[qX] = function (value) {
                        gM[qX](value)
                    }
                }
            } else {
                var IJ = bD.slice(0, 1).toLowerCase() + bD.slice(1);
                if (!this[qY]) {
                    this[qY] = function () {
                        return gM[IJ]
                    }
                }
                if (!this[qX]) {
                    this[qX] = function (value) {
                        gM[IJ] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(bj) {
        if (kn) {
            bo.bK(kn, bj.type, bj)
        }
    }
})();
(function () {
    var bg = NEJ.P, bo = bg("nej.v"), bF = bg("nej.j"), bL = bg("nej.ut"), dR = bg("nej.p"), cF = bg("nm.w"), bv = bg("nm.x"), eI = bg("nm.w.player.log"), bi;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4};
    var ErrorType = {INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10};
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3};
    var IK = false;
    cF.mC = NEJ.C();
    bi = cF.mC.ci(bL.dH);
    bi.cP = function (bf) {
        this.cT(bf);
        this.cl = {};
        this.IL(bf.media);
        bF.cJ("/api/cdns", {
            type: "json", onload: function (bj) {
                if (bj.code) {
                    this.iy = bj.data
                }
            }.bp(this)
        })
    };
    bi.dm = function () {
        this.dr();
        delete this.cl
    };
    bi.AU = function (cC) {
        if (!cC)return;
        var IM = this.cl.volume;
        if (this.dx) {
            this.dx.pause()
        }
        this.cl = {time: 0, id: cC.id, duration: cC.duration / 1e3, play: this.cl.play, stalledRetryCount: 0};
        if (IM != null) {
            this.cl.volume = IM
        }
        this.cl.loadState = LoadState.LOAD_START;
        this.IN(cC.id);
        eI.hX("play song id: {0}", cC.id)
    };
    bi.gI = function () {
        if (this.cl.error) {
            this.cl.error = null;
            if (this.cl.error == ErrorType.INFO_GET_ERR || this.IO()) {
                this.IP()
            } else {
                this.qT()
            }
        } else {
            if (this.dx) {
                this.dx.play()
            }
        }
        this.cl.play = true;
        this.hN("play")
    };
    bi.ig = function () {
        if (this.dx) {
            this.dx.pause()
        }
        this.cl.play = false;
        this.hN("pause")
    };
    bi.UB = function (cR) {
        if (this.dx) {
            this.dx.setCurrentTime(cR)
        }
        this.cl.time = cR;
        eI.hX("seek to: {0}", cR)
    };
    bi.bhd = function () {
        return this.cl.duration || 0
    };
    bi.FV = function () {
        return !!this.cl.play
    };
    bi.SE = function (IT) {
        this.cl.volume = IT;
        if (this.dx) {
            this.dx.setVolume(IT)
        }
    };
    bi.bhc = function () {
        return this.cl.time
    };
    bi.IL = function (bx) {
        cF.Uj(bx, function (gM) {
            this.dx = gM;
            eI.hX("media loaded: {0}", gM.type);
            this.eQ([[this.dx, "loadedmetadata", this.Vn.bp(this)], [this.dx, "ended", this.Vq.bp(this)], [this.dx, "waiting", this.nE.bp(this)], [this.dx, "play", this.yu.bp(this)], [this.dx, "pause", this.Vw.bp(this)], [this.dx, "playing", this.AP.bp(this)], [this.dx, "timeupdate", this.Vy.bp(this)], [this.dx, "progress", this.uI.bp(this)], [this.dx, "stalled", this.VB.bp(this)], [this.dx, "interrupt", this.ig.bp(this)], [this.dx, "recover", this.VC.bp(this)], [this.dx, "error", this.gT.bp(this)]]);
            if (this.cl) {
                if (this.cl.loadState == LoadState.LOAD_START || this.cl.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.AN();
                    if (this.cl.volume != null) {
                        this.dx.setVolume(this.cl.volume)
                    }
                }
            }
        }.bp(this))
    };
    bi.VF = function (bx) {
        this.OH();
        this.dx.destroy();
        this.cl.loadState = LoadState.IN_SWITCH_MEDIA;
        this.nE();
        this.IL(bx);
        eI.hX("switch media")
    };
    bi.bhb = function () {
        return this.dx
    };
    bi.IN = function () {
        this.nE();
        bF.cJ("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cl.id]), br: DEFAULT_BR},
            onload: this.IY.bp(this),
            onerror: this.IY.bp(this)
        })
    };
    bi.IY = function (bj) {
        if (bj.code == 200 && bj.data && bj.data.length) {
            var cN = bj.data[0];
            if (!cN.url) {
                this.cl.error = ErrorType.INFO_GET_ERR;
                this.hN("error", {code: this.cl.error});
                return
            }
            this.cl.playUrl = cN.url;
            this.cl.expireTime = (new Date).getTime() + cN.expi * 1e3;
            this.AN()
        } else {
            this.cl.error = ErrorType.INFO_GET_ERR;
            this.hN("error", {code: this.cl.error});
            eI.kT("info load error")
        }
    };
    bi.AN = function () {
        if (this.dx) {
            var bG = this.cl.playUrl;
            if (this.cl.time > 0 && (this.cl.loadState == LoadState.IN_RE_GET_URL || this.cl.loadState == LoadState.IN_RE_GET_URL)) {
                bG += "#t=" + this.cl.time
            }
            this.dx.setSrc(bG);
            eI.hX("load mp3: {0},loadState: {1}.", bG, this.cl.loadState)
        }
    };
    bi.IZ = function () {
        if (/#t=(\d+)$/.test(this.dx.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    bi.qT = function () {
        var cR = parseInt(this.cl.time) || 0, VR = this.IZ();
        if (cR === VR) {
            this.dx.load()
        } else {
            this.dx.setSrc(this.cl.playUrl + "#t=" + cR)
        }
        this.cl.loadState = LoadState.IN_RELOAD;
        this.nE();
        eI.hX("reload from: {0}", cR)
    };
    bi.IP = function () {
        this.cl.loadState = LoadState.IN_RE_GET_URL;
        this.IN()
    };
    bi.Je = function () {
        var tU = getHost(this.cl.playUrl);
        if (tU) {
            for (var i = 0; i < this.iy.length; i++) {
                var gL = this.iy[i] || [], bA = gL.indexOf(tU);
                if (bA >= 0 && gL.length > 1) {
                    return gL[(bA + 1) % gL.length]
                }
            }
        }
        function getHost(bG) {
            if (CDN_HOST_REG.test(bG))return RegExp.$1
        }
    };
    bi.VV = function () {
        this.cl.playUrl = this.cl.playUrl.replace(CDN_HOST_REG, this.Je());
        this.cl.loadState = LoadState.IN_SWITCH_CDN;
        this.AN();
        this.nE()
    };
    bi.Vn = function () {
        if (this.cl.loadState == LoadState.LOAD_START) {
            this.cl.loadState = LoadState.LOADED_META;
            if (this.dx.type == "audio") {
                this.cl.duration = this.dx.getDuration()
            }
            this.hN("loadedmeta", {duration: this.cl.duration})
        } else {
            this.cl.loadState = LoadState.LOADED_META
        }
        if (this.cl.play) {
            this.dx.play()
        } else {
            this.dx.pause()
        }
        if (this.cl.time && parseInt(this.cl.time) != this.IZ()) {
            this.dx.setCurrentTime(this.cl.time)
        }
        this.AJ();
        this.AP();
        IK = true;
        eI.hX("loaded meta")
    };
    bi.Vq = function () {
        this.cl.ended = true;
        this.hN("ended")
    };
    bi.nE = function () {
        if (!this.cl.waiting) {
            this.cl.waiting = true;
            this.cl.waitTimestamp = +(new Date);
            this.hN("waiting")
        }
    };
    bi.AP = function () {
        this.cl.waiting = false;
        this.cl.waitTimestamp = 0;
        this.hN("playing")
    };
    bi.yu = function () {
        this.hN("play")
    };
    bi.Vw = function () {
        this.hN("pause")
    };
    bi.Vy = function () {
        if (this.cl.loadState != LoadState.LOADED_META)return;
        var cR = this.dx.getCurrentTime();
        if (this.cl.waiting && cR > this.cl.time) {
            this.AP()
        }
        this.cl.time = cR;
        this.hN("timeupdate", {time: this.cl.time, duration: this.cl.duration})
    };
    bi.uI = function (bj) {
        if (this.cl.loadState != LoadState.LOADED_META)return;
        var bw = {};
        if (bj.data) {
            bw.total = bj.data.total;
            bw.loaded = bj.data.loaded
        } else {
            var uG = this.dx.getBuffered(), cR = this.dx.getCurrentTime(), oy = 0;
            for (var i = 0; i < uG.length; i++) {
                if (cR > uG.start(i) && cR < uG.end(i)) {
                    oy = uG.end(i);
                    break
                }
            }
            bw.total = this.cl.duration;
            bw.loaded = Math.min(oy, bw.total)
        }
        this.hN("progress", bw)
    };
    bi.AJ = function () {
        if (this.cl.retry) {
            clearTimeout(this.cl.retry.tid);
            this.cl.retry = null
        }
    };
    bi.gT = function () {
        var eo = this.dx.getError();
        eI.kT("media error code: {0}, netState: {1}", eo.code, this.dx.getNetworkState());
        if (eo.code == MediaError.MEDIA_ERR_NETWORK || eo.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var oE = bv.Tv();
            if (!this.cl.retry) {
                this.cl.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cl.retry.tid)
            }
            if (this.cl.retry.level == RetryLevel.NONE) {
                if (this.IO()) {
                    this.cl.retry.level = RetryLevel.GET_URL;
                    this.IP();
                    eI.hX("Url expired, get url.")
                } else {
                    this.cl.retry.level = RetryLevel.RELOAD;
                    this.cl.retry.tid = setTimeout(this.qT.bp(this), 3e3);
                    eI.hX("Reload mp3 3s later.")
                }
            } else if (this.cl.retry.level == RetryLevel.GET_URL) {
                this.cl.retry.level = RetryLevel.RELOAD;
                this.cl.retry.tid = setTimeout(this.qT.bp(this), 3e3);
                eI.hX("Reload mp3 3s later.")
            } else if (this.cl.retry.level == RetryLevel.RELOAD) {
                this.cl.retry.level = RetryLevel.SWITCH_CDN;
                if (this.Je()) {
                    this.cl.retry.tid = setTimeout(this.VV.bp(this), 5e3);
                    eI.hX("Switch CDN 5s later.")
                } else {
                    this.cl.retry.tid = setTimeout(this.qT.bp(this), 5e3);
                    eI.hX("Reload mp3 5s later.")
                }
            } else if (!IK && this.dx.type == "audio" && !oE.useFlash && !dR.tW.mac && bv.Bz().supported) {
                oE.useFlash = true;
                bv.Ty(oE);
                this.VF("flash")
            } else {
                this.AJ();
                this.ig();
                this.cl.error = ErrorType.NET_ERR;
                this.hN("error", {code: this.cl.error});
                eI.kT("error can not retry.")
            }
        } else {
            this.AJ();
            this.ig();
            this.cl.error = ErrorType.UNKNOWN_ERR;
            this.hN("error", {code: this.cl.error});
            eI.kT("error can not retry.")
        }
    };
    bi.VB = function () {
        var vj = 0, Jg = 5e3;
        return function () {
            this.nE();
            clearTimeout(vj);
            setTimeout(function () {
                var jq = +(new Date);
                if (this.cl.waiting && jq - this.cl.waitTimestamp >= Jg && this.cl.stalledRetryCount < MAX_STALLED_RETRY) {
                    eI.hX("stalled too long retry.");
                    this.cl.stalledRetryCount++;
                    this.qT()
                }
            }.bp(this), Jg);
            eI.hX("stalled")
        }
    }();
    bi.IO = function () {
        var jq = +(new Date);
        return jq > this.cl.expireTime
    };
    bi.VC = function () {
        var cR = parseInt(this.cl.time) || 0;
        this.dx.setSrc(this.cl.playUrl + "#t=" + cR);
        this.cl.loadState = LoadState.IN_RELOAD;
        this.nE();
        eI.hX("recover from: {0}", cR)
    };
    bi.hN = function (cE, bk) {
        bo.bK(cF.mC, "playaction", {action: cE, data: bk || {}})
    };
    bL.fF.bT({element: cF.mC, event: ["playaction"]})
})();
(function () {
    var bg = NEJ.P, bh = bg("nej.e"), bo = bg("nej.v"), bm = bg("nej.u"), eD = bg("nm.ut");
    eD.Sk = function () {
        var FY = function (bR, dZ, hD, ho, lw) {
            if (hD < ho) {
                var lo = Math.floor((hD + ho) / 2);
                FY(bR, dZ, hD, lo, lw);
                FY(bR, dZ, lo + 1, ho, lw);
                RW(bR, dZ, hD, lo, ho, lw)
            }
        };
        var RW = function (bR, dZ, hD, lo, ho, lw) {
            var i = hD, j = lo + 1, k = hD;
            while (i <= lo && j <= ho) {
                if (lw(bR[i], bR[j]) <= 0) {
                    dZ[k++] = bR[i++]
                } else {
                    dZ[k++] = bR[j++]
                }
            }
            while (i <= lo) {
                dZ[k++] = bR[i++]
            }
            while (j <= ho) {
                dZ[k++] = bR[j++]
            }
            for (i = hD; i <= ho; i++) {
                bR[i] = dZ[i]
            }
        };
        var Rr = function (Dp, Rn) {
            return Dp < Rn
        };
        return function (bR, lw) {
            if (!bR || bR.length == 0)return bR;
            lw = lw || Rr;
            FY(bR, new Array(bR.length), 0, bR.length - 1, lw);
            return bR
        }
    }();
    eD.Gj = function () {
        var ek = /\r\n|\r|\n/, gB = /\[(.*?)\]/gi, bfl = {ar: "artist", ti: "track", al: "album", offset: "offset"};
        var bdJ = function (bw, gU) {
            var bR = [];
            gU = gU.replace(gB, function ($1, $2) {
                var cR = bbH.call(this, bw, $2);
                if (cR != null) {
                    bR.push({time: cR, tag: $2});
                    bw.scrollable = !0
                }
                return ""
            }.bp(this)).trim();
            if (!bR.length) {
                if (!gU || gU.length == 0)return;
                bR.push({time: -1})
            }
            bm.cB(bR, function (bz) {
                bz.lyric = gU
            });
            var nZ = bw.lines;
            nZ.push.apply(nZ, bR)
        };
        var bbH = function (bw, cR) {
            var bR = cR.split(":"), un = bR.shift(), bs = bfl[un];
            if (!!bs) {
                bw[bs] = bR.join(":");
                return null
            }
            un = parseInt(un);
            if (isNaN(un)) {
                return null
            } else {
                var cq = parseInt(bw.offset) || 0;
                return un * 60 + parseFloat(bR.join(".")) + cq / 1e3
            }
        };
        var Wj = function (Vx, Tj) {
            return Vx.time - Tj.time
        };
        return function (bt, bZ) {
            var bw = {id: bt, lines: [], scrollable: !1, source: bZ};
            bm.cB((bZ || "").trim().split(ek), bdJ.bp(null, bw));
            if (bw.scrollable) {
                eD.Sk(bw.lines, Wj);
                var bA;
                for (var i = 0; i < bw.lines.length; i++) {
                    if (!!bw.lines[i].lyric) {
                        bA = i;
                        break
                    }
                }
                bw.lines.splice(0, bA)
            }
            return bw
        }
    }();
    eD.bhZ = function (QA, SY) {
        var Gt = eD.Gj(0, QA), Gs = eD.Gj(0, SY);
        if (Gt.scrollable && Gs.scrollable) {
            bm.cB(Gt.lines, function (bz) {
                var Ly = getTranslate(bz.time);
                if (Ly) {
                    bz.lyric = bz.lyric + "<br>" + Ly.lyric
                }
            })
        }
        return Gt;
        function getTranslate(cR) {
            var bA = bm.fZ(Gs.lines, function (bz) {
                return bz.time == cR
            });
            if (bA != -1) {
                return Gs.lines[bA]
            }
        }
    }
})();
(function () {
    var bg = NEJ.P, bh = bg("nej.e"), bo = bg("nej.v"), bm = bg("nej.u"), bL = bg("nej.ut"), cV = bg("nej.ui"), bF = bg("nej.j"), cF = bg("nm.w"), ir = bg("nm.ut"), bv = bg("nm.x"), bE = bg("nm.d"), cy = bg("nm.m.mob"), eD = bg("nm.ut"), bi, cf;
    var hB = bh.jM('<div class="m-lrccon">' + '<p class="j-noscroll noscroll"><sup>*</sup>该歌词不支持自动滚动<sup>*</sup><a class="j-wakescroll" href="javascript:;" data-action="wakeup" data-log="openclient">求滚动</a></p>' + '<p class="j-nolrc nolrc">暂无歌词，<a class="j-wakelyric" href="javascript:;" data-g-action="wakeup" data-log="openclient">求歌词</a></p>' + '<p class="j-pure pure">纯音乐，无歌词</p>' + '<div class="m-lrcsroll j-lrcscroll">' + '<section class="m-lrcinner j-lrcinner">' + "</section>" + "</div>" + "</div>");
    cy.bjc = NEJ.C();
    bi = cy.bjc.ci(cV.hL);
    bi.fS = function () {
        this.hn = hB
    };
    bi.byh = function () {
        this.gj();
        this.bjL = bh.cv(this.bC, "j-noscroll")[0];
        this.bjK = bh.cv(this.bC, "j-nolrc")[0];
        this.bjJ = bh.cv(this.bC, "j-pure")[0];
        this.biJ = bh.cv(this.bC, "j-lrcinner")[0];
        this.bjM = bh.cv(this.bC, "j-lrctop")[0];
        this.biV = bh.cv(this.bC, "j-lrcscroll")[0];
        this.bjI = bh.cv(this.bC, "j-wakescroll")[0];
        this.bjH = bh.cv(this.bC, "j-wakelyric")[0];
        this.biM = false
    };
    bi.cP = function (bf) {
        this.cT(bf);
        if (bf.lrcobj.nolyric === true) {
            this.bjG = true;
            this.bjJ.style.display = "block";
            return
        }
        if (bf.lrcobj.uncollected === true || bf.lrcobj.lrc.lyric.trim() === "") {
            this.bjF = true;
            this.bjK.style.display = "block";
            bh.co(this.bjH, "z-top");
            return
        }
        var biH = this.bjd(eD.Gj(3, bf.lrcobj.lrc.lyric));
        var biI = this.bjd(eD.Gj(3, bf.lrcobj.tlyric.lyric));
        if (biH.scrollable === true && biI.scrollable === true) {
            this.bjE(biH, biI)
        } else {
            this.bjD(biH)
        }
        this.bjC()
    };
    bi.bjC = function () {
        var fC = document.body.clientHeight;
        var gl = document.body.clientWidth;
        var Uo = gl / fC;
        var biK = .1;
        if (Uo <= .67 && this.biM === false) {
            biK = .16
        } else if (Uo <= .67 && this.biM === true) {
            biK = .18
        } else if (Uo > .7 && this.biM === false) {
            biK = .06
        } else if (Uo > .7 && this.biM === true) {
            biK = .08
        } else if (this.biM === true) {
            biK = .12
        }
        if (Uo > .65 && this.biW === false) {
            biK = biK * 2 / 3
        }
        var bjB = fC * biK;
        var eF = Math.floor(bjB / this.biX);
        if (eF >= 3) {
            eF = 3;
            if (this.biW === false) {
                eF = 2
            }
        }
        if (eF === 0) {
            this.biV.style.height = "0"
        } else {
            this.biV.style.height = this.biX * eF - this.bjA + "px"
        }
        if (this.biM === false && eF < 3) {
            this.biT = 1
        }
        this.buP = eF
    };
    bi.dm = function () {
        this.bK("ondestroy");
        this.dr()
    };
    bi.bjd = function (biH) {
        var nZ = biH.lines;
        var bje = [];
        var cu = nZ.length;
        for (var i = 0; i < cu; i++) {
            var eH = nZ[i];
            if (eH.lyric.trim() !== "") {
                bje.push(eH)
            }
        }
        biH.lines = bje;
        return biH
    };
    bi.bjD = function (biH) {
        this.biT = 2;
        this.biW = biH.scrollable;
        if (this.biW === false) {
            this.bjL.style.display = "block";
            bh.co(this.bjI, "z-top");
            bh.co(this.biV, "scroll")
        }
        this.biO = biH.lines;
        this.biS = this.biO.length;
        this.biP = 0;
        var biR = document.createDocumentFragment();
        for (var i = 0; i < this.biS; i++) {
            var gU = this.biO[i];
            var bz = bh.nW("<p data-time='" + gU.time + "' class='j-lrcitem lrcitem'>" + (gU.lyric != "" ? gU.lyric : "&nbsp;") + "</p>");
            biR.appendChild(bz)
        }
        this.biJ.appendChild(biR);
        this.biL = this.biJ.children;
        this.bjf()
    };
    bi.bjE = function (biH, biI) {
        this.biM = true;
        this.biT = 1;
        bh.co(this.biV, "z-trans");
        this.biO = this.bjz(biH, biI);
        this.biS = this.biO.length;
        this.biP = 0;
        var biR = document.createDocumentFragment();
        for (var i = 0; i < this.biS; i++) {
            var gU = this.biO[i];
            var bz = bh.nW("<p data-time='" + gU.time + "' class='j-lrcitem lrcitem'>" + "<span class='real'>" + (gU.lyric != "" ? gU.lyric : "&nbsp;") + "</span>" + "<span class='trans'>" + (gU.tlyric != "" ? gU.tlyric : "&nbsp;") + "</span>" + "</p>");
            biR.appendChild(bz)
        }
        this.biJ.appendChild(biR);
        this.biL = this.biJ.children;
        this.bjf()
    };
    bi.bjf = function () {
        this.biX = 999999;
        for (var i = 0; i < this.biS; i++) {
            if (this.biL[i].offsetHeight < this.biX) {
                this.biX = this.biL[i].offsetHeight
            }
        }
        var biN = window.getComputedStyle(this.biL[0], null);
        this.bjA = parseInt(biN.paddingBottom)
    };
    bi.bjz = function (biH, biI) {
        var bjy = biH.lines.length;
        var bjx = biI.lines.length;
        for (var i = 0; i < bjy; i++) {
            var cR = biH.lines[i].time;
            var bS = false;
            for (var j = 0; j < bjx; j++) {
                if (cR === biI.lines[j].time) {
                    biH.lines[i].tlyric = biI.lines[j].lyric;
                    bS = true;
                    break
                }
            }
            if (bS === false) {
                biH.lines[i].tlyric = ""
            }
        }
        return biH.lines
    };
    bi.bjw = function (bj) {
        if (this.biW === false || this.bjF === true || this.bjG === true)return;
        if (this.biP === 0)this.biL[0].style.color = "rgba(255, 255, 255, 1)";
        for (var i = 0; i < this.biS; i++) {
            var gU = this.biO[i];
            if (gU.time <= bj.data.time && i > this.biP) {
                this.biP = i;
                this.bjv(this.biP);
                this.biL[i - 1].style.color = "rgba(255, 255, 255, 0.6)";
                this.biL[i].style.color = "rgba(255, 255, 255, 1)";
                break
            }
        }
    };
    bi.bjv = function (bA) {
        if (bA < this.biT)return;
        var bjb = parseInt(bh.hP(this.biL[bA], "lineHeight")), CG = parseInt(bh.hP(this.biL[bA], "paddingBottom")), HQ = ~~(this.biL[bA].offsetHeight / (bjb + CG) + .5), lm = HQ <= 2 ? bjb + CG : 0;
        if (this.buP < 3) {
            lm -= bjb + CG
        }
        lm = -lm;
        for (var i = 0; i < bA; ++i) {
            lm += this.biL[i].offsetHeight
        }
        var bjg = "-" + lm + "px";
        this.biJ.style.webkitTransform = "translateY(" + bjg + ")";
        this.biJ.style.transform = "translateY(" + bjg + ")"
    };
    bi.bjt = function () {
        this.biP = 0;
        this.biJ.style.webkitTransform = "translateY(0)";
        this.biJ.style.transform = "translateY(0)"
    };
    bi.bjN = function (bA) {
        this.biT = bA
    }
})();
(function () {
    var bg = NEJ.P, bh = bg("nej.e"), bm = bg("nej.u"), cV = bg("nej.ui"), bo = bg("nej.v"), bL = bg("nej.ut"), bU = bg("nm.l"), bv = bg("nm.x"), bi, cf;
    var hB = bh.jM("<div class='m-confirm'>" + "<section class='cont j-cont z-small'>" + "<div class='head'>" + "<p class='cxt j-cxt'>请升级至客户端最新版参加活动</p>" + "</div>" + "<div id='confirm-2' class='action'>" + "<a href='javascript:;' class='close j-close'>暂不升级</a>" + "<a href='javascript:;' class='click j-action'>去升级</a>" + "</div>" + "<div id='confirm-1' class='one-action'>" + "<a href='javascript:;' class='click j-confirm'>知道了</a>" + "</div>" + "</section>" + "</div>");
    bU.big = NEJ.C();
    bi = bU.big.ci(cV.hL);
    bi.fS = function () {
        this.hn = hB
    };
    bi.byh = function () {
        this.gj();
        this.bih = bh.cv(this.bC, "j-cont")[0];
        this.biq = bh.cv(this.bC, "j-cxt")[0];
        this.bif = bh.cv(this.bC, "j-action")[0];
        this.boe = bh.cv(this.bC, "j-confirm")[0];
        this.bii = bh.cv(this.bC, "j-close")[0];
        bo.bQ(this.bii, "click", this.bip.bp(this));
        bo.bQ(this.bif, "click", this.bio.bp(this));
        bo.bQ(this.boe, "click", this.brg.bp(this))
    };
    bi.cP = function (bf) {
        this.cT(bf);
        var ip = bh.bO("confirm-1"), iG = bh.bO("confirm-2");
        if (bf.btnNum && bf.btnNum == 2) {
            ip.style.display = "none";
            iG.style.display = "block"
        } else {
            iG.style.display = "none";
            ip.style.display = "block"
        }
        this.biq.innerHTML = bf.context || "这是系统confirm弹窗";
        if (!bf.btnNum || bf.btnNum == 2) {
            this.bii.innerHTML = bf.closeText || "关闭"
        }
        this.bif.innerHTML = bf.actionText || "关闭";
        this.bif.handleActionClick = bf.actionClick || function () {
                this.bij()
            }.bp(this);
        this.boe.innerHTML = bf.confirmText || "知道了";
        this.boe.handleConfirmClick = bf.confirmClick || function () {
                this.bij()
            }.bp(this)
    };
    bi.dm = function () {
        this.bK("ondestroy");
        this.dr()
    };
    bi.bip = function () {
        this.bij()
    };
    bi.bio = function () {
        this.bif.handleActionClick();
        this.bij()
    };
    bi.brg = function () {
        this.boe.handleConfirmClick()
    };
    bi.bij = function () {
        bh.co(this.bih, "z-small");
        setTimeout(function () {
            this.cA()
        }.bp(this), 200)
    };
    bi.bin = function () {
        bh.ck(this.bih, "z-small")
    };
    bv.bim = function (options) {
        options = options || {};
        options.parent = options.parent || document.body;
        var bil = bU.big.bT(options);
        setTimeout(function () {
            bil.bin()
        }, 0)
    }
})();
(function () {
    var bg = NEJ.P, bh = bg("nej.e"), bo = bg("nej.v"), bm = bg("nej.u"), bL = bg("nej.ut"), bF = bg("nej.j"), ir = bg("nm.ut"), bv = bg("nm.x"), cF = bg("nm.w"), bE = bg("nm.d"), cy = bg("nm.m.mob"), eD = bg("nm.ut"), bi, cf;
    cy.Js = NEJ.C();
    bi = cy.Js.ci(bL.dH);
    var lE = GPlatform || "", ef = GClient || "", bit = GDownloadLink || "", biw = GLogSource || ef, uS = lE == "ios" ? GDevice == "phone" ? "iphone" : "ipad" : lE, biu = GInApp || false, Hz = bv.EL();
    var jV = 4, qP = "";
    var btt = 0;
    bi.cL = function () {
        this.dq();
        var gC = this.bC = bh.bO("module-root");
        var bn = bh.cv(gC, "j-flag");
        this.Jt = bn.shift();
        this.mn = bn.shift();
        this.gX = bn.shift();
        this.pw = bn.shift();
        this.biY = bh.cv(gC, "j-song")[0];
        this.biZ = bh.cv(gC, "j-loadlrc")[0];
        this.biQ = bh.cv(gC, "j-sgt")[0];
        this.bjs = bh.cv(gC, "j-disc")[0];
        this.ks = bh.bH(gC, "songId");
        this.beD = bh.bH(gC, "userId");
        this.zR = null;
        this.zQ = false;
        this.bja = false;
        cF.bzD.bT({resType: "song", resQuery: this.ks, onclick: this.bBG.bp(this)});
        qP = "orpheus://song/" + this.ks;
        this.Ap();
        this.Ao();
        this.bjr();
        this.bjq();
        if (ef)document.title = "网易云音乐 - " + document.title;
        this.yl = setTimeout(function () {
            bh.ck(this.gX, "f-hide")
        }.bp(this), 1e3);
        bv.btu({resType: "song", resId: this.ks, picUrl: bh.bH(this.mn, "picUrl") + +"?param=580y580"});
        touch.on(document.body, "touchmove swipe", this.tZ.bp(this));
        bo.bQ(document.body, "click", this.ew.bp(this));
        bo.bQ(window, "unload", this.btv.bp(this))
    };
    bi.bjr = function () {
        var biN = window.getComputedStyle(this.biQ, null);
        var fC = parseInt(biN.height);
        var bjb = parseInt(biN.lineHeight);
        var ju = bh.cv(this.biQ, "j-sgtitle")[0];
        var bjh = ju.innerText;
        var bji = bh.cv(this.biQ, "j-sgsinger")[0];
        var bjj = bji.innerText;
        if (fC > bjb * 1.5) {
            if (bjj.length > 5) {
                bji.innerText = bjj.substr(0, 5) + "..."
            }
            var bjp = bjh.length;
            for (var i = bjp - 1; i > 0; i--) {
                ju.innerText = bjh.substr(0, i) + "...";
                biN = window.getComputedStyle(this.biQ, null);
                fC = parseInt(biN.height);
                bjb = parseInt(biN.lineHeight);
                if (fC < bjb * 1.5)break
            }
        }
        this.bjo = true;
        this.bjk()
    };
    bi.bjq = function () {
        var fC = document.body.clientHeight;
        var gl = document.body.clientWidth;
        if (gl / fC >= .63) {
            this.biQ.style.marginTop = "15px"
        }
        if (gl / fC >= .74) {
            this.bjl = false;
            bh.co(this.biY, "z-hide");
            bh.co(this.biZ, "z-hide")
        } else {
            this.bjl = true;
            bh.ck(this.biZ, "z-hide")
        }
    };
    bi.bBG = function (bBt, bl) {
        var mJ = bh.bH(bl, "log");
        if (mJ)this.iU(mJ)
    };
    bi.ew = function (bj) {
        if (bo.cK(bj, "d:gAction"))return;
        var bl = bo.cK(bj, "d:action");
        if (!bl)return;
        var cE = bh.bH(bl, "action");
        switch (cE) {
            case"talk":
                this.XC();
                this.iU("background");
                break;
            case"play":
                this.XD();
                break
        }
    };
    bi.btv = function () {
        this.bkb({sync: true})
    };
    bi.biv = function (iW) {
        bv.bix(lE, ef, iW, biu ? "" : bit, true)
    };
    bi.Ao = function () {
        this.hK = bE.lf.bT({
            onitemload: this.Ah.bp(this),
            onlyricload: this.bjn.bp(this),
            onlyricerror: this.bjm.bp(this)
        });
        this.hK.vx({key: "track", id: this.ks});
        this.hK.vx({key: "track_lyric", id: this.ks})
    };
    bi.bjn = function (bj) {
        this.bkz = bh.cv(this.bC, "j-lrc")[0];
        this.jl = cy.bjc.bT({parent: this.bkz, lrcobj: bj});
        this.bja = true;
        this.bjk()
    };
    bi.bjk = function () {
        if (this.bjo === true && this.bja === true) {
            bh.co(this.biZ, "z-hide");
            bh.ck(this.biY, "z-unvis")
        }
    };
    bi.bjm = function (bj) {
        this.biZ.innerText = "获取歌词失败，请稍后重试"
    };
    bi.Ah = function (bj) {
        var cC = this.hK.eJ(bj.id), kP = cC.privilege;
        this.df = cF.mC.iK();
        this.df.AU({id: this.ks});
        if (kP) {
            if (kP.st == -300) {
                this.nz = "版权方要求，该歌曲仅能通过网易云音乐APP播放";
                return
            } else if (kP.fee > 0 && kP.fee != 8 && kP.fee != 32) {
                this.nz = "唱片公司要求该歌曲须付费，打开网易云音乐购买后即可自由畅享";
                return
            } else if (kP.pl <= 0) {
                this.nz = "由于版权保护，您所在的地区暂时无法使用";
                return
            }
        }
        this.df.gI();
        bo.bQ(cF.mC, "playaction", this.mh.bp(this))
    };
    bi.Ap = function () {
        var img = new Image;
        img.src = "http://music.163.com/api/img/blur/" + bh.bH(this.mn, "pic");
        bo.bQ(img, "load", function () {
            bh.cn(this.mn, "backgroundImage", "url(" + img.src + ")");
            bh.co(this.mn, "z-show")
        }.bp(this))
    };
    bi.mh = function (bj) {
        if (bj.action == "play") {
            this.yl = clearTimeout(this.yl);
            bh.ck(this.gX.parentNode, "z-stop");
            btt = +(new Date)
        } else if (bj.action == "pause" || bj.action == "ended") {
            bh.ck(this.gX, "f-hide");
            bh.co(this.bjs, "z-stop");
            if (bj.action == "ended")this.jl.bjt();
            this.bkb();
            btt = 0
        } else if (bj.action == "timeupdate") {
            if (this.bja === true) {
                this.jl.bjw(bj)
            }
        } else if (bj.action == "error") {
            bh.ck(this.gX, "f-hide");
            bh.co(this.bjs, "z-stop");
            this.nz = "播放失败[" + ((bj.data || {}).code || 0) + "]";
            this.XD();
            this.bkb();
            btt = 0
        }
    };
    bi.XD = function () {
        if (this.nz) {
            bv.bim({
                context: this.nz, closeText: "取消", actionText: "打开云音乐", actionClick: function () {
                    this.iU("openclient");
                    this.biv(qP)
                }.bp(this)
            });
            return
        }
        if (!bh.dY(this.gX.parentNode, "z-stop")) {
            this.df.ig()
        } else {
            this.df.gI();
            this.iU("play")
        }
    };
    bi.XC = function () {
        if (this.zQ) {
            this.XE();
            this.zQ = false
        } else {
            this.XH();
            this.zQ = true
        }
    };
    bi.XH = function () {
        bh.co(this.Jt, "m-mode2-1");
        bh.co(this.pw, "z-show");
        bh.co(this.biY, "z-hide");
        if (!this.zR) {
            this.pw.innerHTML = bh.hg("m-loading").outerHTML;
            setTimeout(this.Af.bp(this, jV, this.ks), 500)
        }
    };
    bi.XE = function () {
        bh.ck(this.Jt, "m-mode2-1");
        bh.ck(this.pw, "z-show");
        if (this.bjl === true) {
            bh.ck(this.biY, "z-hide")
        }
    };
    bi.Af = function (bx, bt) {
        bF.cJ("/api/v1/resource/comments/get", {
            type: "json",
            query: {resourceType: bx, resourceId: bt},
            onload: this.zU.bp(this)
        })
    };
    bi.zU = function (bj) {
        var jL = [], bsm = [], cX = 0;
        if (bj.code == 200) {
            bsm = bj.hotComments;
            jL = bj.comments;
            cX = bj.total;
            if (bsm.length > 10) {
                bsm = bsm.slice(0, 10)
            }
            jL = jL.slice(0, 10 - bsm.length)
        }
        this.zR = {comments: jL, hotComments: bsm, total: cX};
        this.pw.innerHTML = bh.dX("m-mres-talk", this.zR, {getRichText: bv.rB});
        bv.bdx({sbody: this.pw, heightRatio: 1})
    };
    bi.iU = function (bir) {
        var bI = {
            page: "webview",
            pagetype: "webnew2",
            resourcetype: "song",
            resourceid: this.ks,
            shareuserid: this.beD || "",
            button: bir,
            source: biw,
            platform: uS,
            osver: Hz
        };
        bv.iR("click", bI)
    };
    bi.bkb = function (bf) {
        if (btt == 0)return;
        bv.iR("play", {
            type: "song",
            id: +this.ks,
            shareuserid: this.beD || "",
            source: biw,
            platform: uS,
            time: (new Date - btt) / 1e3 | 0
        }, NEJ.F, bf)
    };
    bi.tZ = function (e) {
        switch (e.type) {
            case"touchmove":
                break;
            case"swipe":
                this.iU("slide");
                break
        }
    };
    bh.fx("template-box");
    cy.Js.bT()
})()