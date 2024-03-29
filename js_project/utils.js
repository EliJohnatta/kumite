let pontuacao, placarShiro, placarAka, placarAdvertenciaShiro = 0, placarAdvertenciaAka = 0, placarJogaiShiro = 0, placarJogaiAka = 0;

function setPontuacao(sistemaPontuacao) {
    pontuacao = Number.parseInt(sistemaPontuacao);
}

function monitorarAdvertencia(advertencia, advertenciaAnterior, advertenciaPosterior, senshu, placar = "", valor = 0) {
    if(advertencia.checked) {
        if(senshu == "S") {
            placarAdvertenciaShiro += 1;
            if(advertenciaPosterior != null) {
                if(placarAdvertenciaShiro > 1) {
                    adicionarValorDoPlacar(placar, valor, false);
                }
                advertenciaPosterior.disabled = false;
            }
            else {
                verificarVencedor();
            }
        }
        else {
            placarAdvertenciaAka += 1;
            if(advertenciaPosterior != null) {
                if(placarAdvertenciaAka > 1) {
                    adicionarValorDoPlacar(placar, valor, true);
                }
                advertenciaPosterior.disabled = false;
            }
            else {
                verificarVencedor();
            }
        }
    }
    else {
        if(senshu == "S") {
            if(advertenciaAnterior != null && placarAdvertenciaShiro > 1) {
                retirarValorDoPlacar(placar, valor, false);
            }
            advertenciaPosterior.disabled = true;
            placarAdvertenciaShiro -= 1;
        }
        else {
            if(advertenciaAnterior != null && placarAdvertenciaAka > 1) {
                retirarValorDoPlacar(placar, valor, true);
            }
            advertenciaPosterior.disabled = true;
            placarAdvertenciaAka -= 1;
        }
    }
}

function monitorarJogai(jogai, jogaiPosterior, senshu) {
    if(jogai.checked) {
        if(senshu == "S") {
            placarJogaiShiro += 1;
            if(jogaiPosterior != null) {
                jogaiPosterior.disabled = false;
            }
            else {
                verificarVencedor();
            }
        }
        else {
            placarJogaiAka += 1;
            if(jogaiPosterior != null) {
                jogaiPosterior.disabled = false;
            }
            else {
                verificarVencedor();
            }
        }
    }
    else {
        if(senshu == "S") {
            jogaiPosterior.disabled = true;
            placarJogaiShiro -= 1;
        }
        else {
            jogaiPosterior.disabled = true;
            placarJogaiAka -= 1;
        }
    }
}

function verificarVencedor() {
    if(placarShiro >= pontuacao) {
        document.getElementById("exibirResultadoCombate").innerHTML = "Vitória de SHIRO por PONTUAÇÃO!";
        document.getElementById("radioSenshuVencedorShiro").checked = true;
        travarElementos()
    }
    else if(placarAka >= pontuacao) {
        document.getElementById("exibirResultadoCombate").innerHTML = "Vitória de AKA por PONTUAÇÃO!";
        document.getElementById("radioSenshuVencedorAka").checked = true;
        travarElementos()
    }
    else if(placarAdvertenciaShiro == 4) {
        document.getElementById("exibirResultadoCombate").innerHTML = "Vitória de AKA por excesso de ADVERTÊNCIA por parte de SHIRO!";
        document.getElementById("radioSenshuVencedorAka").checked = true;
        travarElementos()
    }
    else if(placarAdvertenciaAka == 4) {
        document.getElementById("exibirResultadoCombate").innerHTML = "Vitória de SHIRO por excesso de ADVERTÊNCIA por parte de AKA!";
        document.getElementById("radioSenshuVencedorShiro").checked = true;
        travarElementos()
    }
    else if(placarJogaiShiro == 4) {
        document.getElementById("exibirResultadoCombate").innerHTML = "Vitória de AKA por excesso de JOGAI por parte de SHIRO!";
        document.getElementById("radioSenshuVencedorAka").checked = true;
        travarElementos()
    }
    else if(placarJogaiAka == 4) {
        document.getElementById("exibirResultadoCombate").innerHTML = "Vitória de SHIRO por excesso de JOGAI por parte de AKA!";
        document.getElementById("radioSenshuVencedorShiro").checked = true;
        travarElementos()
    }
}

function travarElementos() {
    //BOTÕES
    document.getElementById("addIpponShiro").disabled = true;
    document.getElementById("rmIpponShiro").disabled = true;
    document.getElementById("addNihonShiro").disabled = true;
    document.getElementById("rmNihonShiro").disabled = true;
    document.getElementById("addSambonShiro").disabled = true;
    document.getElementById("rmSambonShiro").disabled = true;
    document.getElementById("addIpponAka").disabled = true;
    document.getElementById("rmIpponAka").disabled = true;
    document.getElementById("addNihonAka").disabled = true;
    document.getElementById("rmNihonAka").disabled = true;
    document.getElementById("addSambonAka").disabled = true;
    document.getElementById("rmSambonAka").disabled = true;
    //INPUTS
    document.getElementById("checkboxAdvertenciaShiroCK").disabled = true;
    document.getElementById("checkboxAdvertenciaShiroKK").disabled = true;
    document.getElementById("checkboxAdvertenciaShiroHC").disabled = true;
    document.getElementById("checkboxAdvertenciaShiroHS").disabled = true;
    document.getElementById("checkboxAdvertenciaAkaHS").disabled = true;
    document.getElementById("checkboxAdvertenciaAkaHC").disabled = true;
    document.getElementById("checkboxAdvertenciaAkaKK").disabled = true;
    document.getElementById("checkboxAdvertenciaAkaCK").disabled = true;
    document.getElementById("checkboxJogaiShiroCK").disabled = true;
    document.getElementById("checkboxJogaiShiroKK").disabled = true;
    document.getElementById("checkboxJogaiShiroHC").disabled = true;
    document.getElementById("checkboxJogaiShiroHS").disabled = true;
    document.getElementById("checkboxJogaiAkaHS").disabled = true;
    document.getElementById("checkboxJogaiAkaHC").disabled = true;
    document.getElementById("checkboxJogaiAkaKK").disabled = true;
    document.getElementById("checkboxJogaiAkaCK").disabled = true;
    document.getElementById("sistemaPontuacao").disabled = true;
}

function adicionarValorDoPlacar(placar, valor, flag) {
    if(flag) {
        placarShiro = Number.parseInt(placar.value) + valor;
        placar.value = placarShiro;
        verificarVencedor();
    }
    else {
        placarAka = Number.parseInt(placar.value) + valor;
        placar.value = placarAka;
        verificarVencedor();
    }
}

function retirarValorDoPlacar(placar, valor, flag) {
    if(flag) {
        placarShiro = Number.parseInt(placar.value) - valor;
        placar.value = placarShiro;
    }
    else {
        placarAka = Number.parseInt(placar.value) - valor;
        placar.value = placarAka;
    }
}

function limparDados() {
    location.reload();
}