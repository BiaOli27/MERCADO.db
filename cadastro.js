function validaCampo()
{
if(document.cadastro.nome.value=="")
{
alert("O Campo nome é Obrigatório!")
return false;
}
else
if(document.cadastro.email.value=="")
{
alert("O Campo email é Obrigatório!")
return false;
}
else
if(document.cadastro.endereco.value=="")
{
alert("O Campo endereço é Obrigatório!")
return false;
}
else
if(document.cadastro.cidade.value=="")
{
alert("O Campo Cidade é Obrigatório!")
return false;
}
else
if(document.cadastro.estado.value=="")
{
alert("O Campo Estado é Obrigatório!")
return false;
}
else
if(document.cadastro.bairro.value=="")
{
alert("O Campo Bairro é Obrigatório!")
return false;
}
else
if(document.cadastro.pais.value=="")
{
    alert("O Campo Login é Obrigatório!");
return false;
}
else
if(document.cadastro.login.value=="")
{
alert("O Campo Login é Obrigatório!");
return false;
}
else
if(document.cadastro.senha.value=="")
{
alert("Digite uma senha!");
return false;
}
else
return true;
}