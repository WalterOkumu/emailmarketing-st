import { Fragment } from "react";

const ContactForm = () => {

  return (
        <Fragment>
            <h1 className="text-left md:px-0 text-5xl font-bold md:inline-block py-2 rounded-md text-[#FBED04]">
                Faça o seu negócio chegar a mais de 4000 clientes com um único email! 
            </h1>
            <h3 className="text-[1rem] mb-8 md:w-[100%] md:text-left text-center">
                Preencha os campos abaixo para obter a nossa oferta especial Black Friday
            </h3>
            <div id="mlb2-5795093" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5795093">
                <div className="ml-form-align-center">
                    <div className="ml-form-embedWrapper embedForm">
                    <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                        <div className="ml-form-embedContent" style={{marginBottom:0}}></div>
                        <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/l2h1b5" data-code="l2h1b5" method="post" target="_blank">
                        <div className="ml-form-formContent">
                            <div className="ml-form-fieldRow">
                            <div className="ml-field-group ml-field-name">
                                <input aria-label="name" type="text" className="form-control" data-inputmask="" name="fields[name]" placeholder="Nome" autoComplete="name" />
                            </div>
                            </div>
                            <div className="ml-form-fieldRow">
                            <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="E-mail" autoComplete="email" />
                            </div>
                            </div>
                            <div className="ml-form-fieldRow ml-last-item">
                            <div className="ml-field-group ml-field-company">
                                <input aria-label="company" type="text" className="form-control" data-inputmask="" name="fields[company]" placeholder="Empresa" autoComplete="" />
                            </div>
                            </div>
                        </div>
                        <input type="hidden" name="ml-submit" value="1" />
                        <div className="ml-form-embedSubmit">
                            <button type="submit" className="primary">Enviar</button>
                            <button disabled="disabled" style={{display:"none"}} type="button" className="loading"> <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span> </button>
                        </div>
                        <input type="hidden" name="anticsrf" value="true" />
                        </form>
                    </div>
                    <div className="ml-form-successBody row-success" style={{display:"none"}}>
                        <div className="ml-form-successContent">
                            <h4>Obrigado!</h4>
                            <p>Enviaremos sua proposta o mais rápido possível.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
  );
};

export default ContactForm;