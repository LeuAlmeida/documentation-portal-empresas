---
title: "Aplicação e Rotas"
metaTitle: ""
metaDescription: ""
---

Exemplo de requisição:

**HOMOLOG:** [POST] `https://sitenethomologa.serasa.com.br:443/experian-data-licensing-ws/dataLicensingService`

**PROD:** [POST] `https://sitenet.serasa.com.br:443/experian-data-licensing-ws/dataLicensingService`

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dat="http://services.experian.com.br/DataLicensing/DataLicensingService/">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-2">
            <wsse:Username>USERNAME</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">PASSWORD</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <dat:ConsultarPF>
         <parameters>
            <cpf>33439893634</cpf>
            <RetornoPF>
			<cpf>true</cpf>
			<nome>true</nome>
			<endereco>true</endereco>
			<situacaoCadastral>HISTORICO</situacaoCadastral>
            </RetornoPF>
         </parameters>
      </dat:ConsultarPF>
   </soapenv:Body>
</soapenv:Envelope>
```
