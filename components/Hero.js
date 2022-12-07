import Image from "next/image";
import ContactForm from "./ContactForm";
import heroImage from '/public/black_friday.png'

export default function Hero() {

    return(
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse mt-16 gap-8 md:gap-18 text-[#f8f8ff] justify-center items-center">
                <div className="md:w-1/2 w-full self-center items-center pb-10 md:pb-0">
                    
                    <ContactForm />
                </div>
                <div className="md:w-1/2 w-full self-center">
                    {/*<h1 className="text-5xl font-bold bg-[#FBED04] md:inline-block p-2 rounded-md text-[#070707]">E-mail Marketing</h1>
                    <h2 className="text-4xl md:text-left italic font-light pt-3">Faça o seu negócio chegar a <span className="font-bold">mais de 4000 clientes</span> com um único email!</h2>
                    <div className="pt-8">
                        <p className="leading-relaxed text-justify">
                            O marketing por email é o uso do email para promover
                            produtos ou serviços. Mas não se limita apenas a isso.
                            Você pode usar o marketing por e-mail para desenvolver
                            relações com os clientes atuais e / ou para chegar a
                            clientes em potencial. O marketing por email permite que
                            as empresas mantenham seus clientes informados e
                            personalizem as suas mensagens de marketing. Veja nisso
                            como uma das formas de marketing digital mais
                            económicas e ricas em conversões da atualidade.
                        </p>
                </div>*/}
                    {/*<Image src={heroImage} alt="Black Friday" className="object-contain" layout="responsive" priority/>*/}
                </div>
            </div>
        </div>
    );
}