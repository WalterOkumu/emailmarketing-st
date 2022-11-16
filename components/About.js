export default function About() {
    return(

        <>
            <section className="mt-32 flex flex-col justify-center items-center mx-auto md:w-1/2 w-full">
                <h1 className="px-16 md:px-0 text-5xl font-bold md:inline-block p-2 rounded-md text-[#070707] text-center">E-mail Marketing</h1>
                <h2 className="px-16 md:px-0 text-4xl md:text-center italic font-light pt-3">Faça o seu negócio chegar a <span className="font-bold">mais de 4000 clientes</span> com um único email!</h2>
                <div className="pt-8 px-16 md:px-0">
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
                </div>
            </section>
            <section className="mt-32 flex flex-col justify-center items-center mx-auto gap-16 md:w-3/4 w-full">
            <h3 className="text-5xl font-bold text-center md:w-[56%] px-8">
                O que o email marketing faz pela sua empresa?</h3>

            <div className="text-center md:w-1/2 w-full px-8">
                <h4 className="font-bold text-[1.5rem]">Objetivos Gerais</h4>
                <p className="mx-auto">Informar; Atrai; Envolver; Guiar; Estimular; Converter.</p>
            </div>

            <div className="text-center md:w-1/2 w-full px-8">
                <h4 className="font-bold text-[1.5rem]">O que oferecemos?</h4>
                <p className="mx-auto">
                    Um banco de dados exclusivo; Um serviço dedicado que gera relatórios: Um produtor de conteúdo; Um designer.
                </p>
            </div>
        </section>
        </>
        
    );
}