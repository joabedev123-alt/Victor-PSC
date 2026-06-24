import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Brain, Plus, Minus, ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const Psicoterapia = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--color-bg-alt)'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <FadeUp>
            <h1 style={{ fontSize: '3.2rem', marginBottom: '1.5rem', color: 'var(--color-brown-deep)', lineHeight: 1.2 }}>
              Um espaço seguro para compreender sua história e cuidar da sua saúde emocional.
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--color-text)' }}>
              A psicoterapia é um convite ao autoconhecimento. Um espaço de escuta, reflexão e acolhimento, onde cada pessoa pode compreender melhor seus sentimentos, conflitos e formas de se relacionar consigo mesma e com o mundo.
            </p>
            <Link to="/contato" className="btn btn-primary">Agendar Consulta</Link>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div style={{
              width: '100%',
              height: '550px',
              backgroundColor: 'var(--color-secondary)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}>
              {/* Imagem Humanizada */}
              <img src="/Profissionais/Fotos pessoais/IMG_2557.jpeg" alt="Psicoterapia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* O QUE É PSICOTERAPIA? */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <FadeUp>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.03)', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--color-bg-main)' }}>
              <img src="/Profissionais/Fotos pessoais/5FBA80EC-0AEB-415C-95CC-D45D31868D22.png" alt="O que é Psicoterapia" style={{ width: '100%', maxHeight: '600px', height: 'auto', objectFit: 'contain', marginTop: '40px' }} />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)' }}>O que é a psicoterapia?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-text)', fontSize: '1.1rem' }}>
              <p>A psicoterapia é um processo de cuidado emocional que proporciona um espaço reservado e seguro para falar sobre pensamentos, sentimentos, angústias e experiências de vida.</p>
              <p>Por meio do diálogo e da escuta especializada, é possível compreender conflitos internos, desenvolver novas formas de lidar com desafios e construir uma relação mais saudável consigo mesmo e com os outros.</p>
              <p>Cada processo é único, respeitando a história, o tempo e as necessidades de cada pessoa.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* COMO A TERAPIA PODE AJUDAR? */}
      <section className="section section-bg-white">
        <div className="container">
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Como a terapia pode ajudar?</h2>
          </FadeUp>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Ansiedade', desc: 'Aprender a lidar com preocupações excessivas, medos e sintomas físicos relacionados à ansiedade.' },
              { title: 'Depressão', desc: 'Compreender emoções, recuperar o sentido da vida e reconstruir o bem-estar emocional.' },
              { title: 'Burnout e Estresse', desc: 'Encontrar equilíbrio diante das exigências do trabalho e da rotina.' },
              { title: 'Autoestima', desc: 'Desenvolver uma relação mais saudável consigo mesmo.' },
              { title: 'Relacionamentos', desc: 'Compreender padrões afetivos e melhorar vínculos pessoais e amorosos.' },
              { title: 'Conflitos Existenciais', desc: 'Refletir sobre propósito, mudanças e momentos de transição da vida.' }
            ].map((item, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div style={{
                  padding: '2.5rem', backgroundColor: 'var(--color-bg-main)', borderRadius: '16px', height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-brown-main)' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '1rem' }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* MINHA ABORDAGEM */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <FadeUp>
            <Brain size={60} color="var(--color-brown-main)" weight="thin" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)' }}>Psicoterapia orientada pela Psicanálise</h2>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
              Meu trabalho clínico é fundamentado na Psicanálise, uma abordagem que busca compreender não apenas os sintomas, mas também os significados presentes em cada experiência humana.
            </p>
            <p style={{ fontSize: '1.15rem', margin: 0 }}>
              Através da escuta e da reflexão, o processo terapêutico permite identificar padrões, emoções e conflitos que muitas vezes atuam de forma inconsciente, promovendo autoconhecimento e novas possibilidades de vida.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* QUANDO PROCURAR AJUDA? */}
      <section className="section section-bg-white">
        <div className="container">
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Quando procurar ajuda?</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              'Quando a ansiedade está afetando a rotina.',
              'Quando sentimentos de tristeza persistem.',
              'Em momentos de luto ou perdas importantes.',
              'Durante crises nos relacionamentos.',
              'Quando existe sofrimento emocional constante.',
              'Em situações de estresse ou esgotamento.',
              'Quando há dificuldade em lidar com emoções.',
              'Quando surge o desejo de se conhecer melhor.',
              'Passa por mudanças importantes ou momentos de transição.'
            ].map((item, idx) => (
              <FadeUp delay={idx * 0.05} key={idx}>
                <div style={{
                  padding: '1.5rem 2rem', border: '1px solid rgba(162, 115, 74, 0.2)', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#fff', height: '100%'
                }}>
                  <ArrowRight size={20} color="var(--color-brown-main)" />
                  <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-text)' }}>{item}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONAM AS SESSÕES? */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Como funcionam as sessões?</h2>
          </FadeUp>
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--color-brown-main)' }}>
            {[
              { step: '1. Primeiro contato', desc: 'Conversamos pelo WhatsApp para esclarecer dúvidas e agendar.' },
              { step: '2. Agendamento', desc: 'Definimos o melhor horário para os atendimentos.' },
              { step: '3. Sessões Online', desc: 'Encontros em ambiente seguro, reservado e sigiloso.' },
              { step: '4. Processo Terapêutico', desc: 'Cada pessoa possui seu próprio tempo e necessidades.' },
              { step: '5. Desenvolvimento', desc: 'A psicoterapia é construída a partir da escuta das demandas únicas de cada paciente, respeitando sua história e suas necessidades específicas.' }
            ].map((item, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div style={{ position: 'relative', marginBottom: '3rem' }}>
                  <div style={{
                    position: 'absolute', left: '-2.55rem', top: '0',
                    width: '20px', height: '20px', borderRadius: '50%',
                    backgroundColor: 'var(--color-brown-deep)', border: '4px solid var(--color-bg-main)'
                  }}></div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--color-brown-main)', marginBottom: '0.5rem' }}>{item.step}</h3>
                  <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--color-text)' }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É INDICADA? E ATENDIMENTO ONLINE */}
      <section className="section section-bg-white">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          <div>
            <FadeUp>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)' }}>Para quem é indicada?</h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>A psicoterapia pode ser indicada para pessoas que enfrentam:</p>
            </FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                'Ansiedade', 'Depressão', 'Burnout', 'Baixa autoestima',
                'Problemas nos relacionamentos', 'Inseguranças', 'Luto',
                'Estresse', 'conflitos existenciais', 'Saúde sexual e sexualidade',
                'Sofrimento emocional', 'Conflitos familiares'
              ].map((item, idx) => (
                <FadeUp delay={idx * 0.05} key={idx}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={20} color="var(--color-brown-main)" weight="fill" />
                    <span style={{ fontSize: '0.95rem' }}>{item}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          
          <div>
            <FadeUp>
              <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
                <img src="/Profissionais/Fotos pessoais/5FBA80EC-0AEB-415C-95CC-D45D31868D22.png" alt="Mapa do Brasil" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-brown-deep)' }}>Psicoterapia online para todo o Brasil.</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
                A terapia online oferece praticidade, conforto e segurança, permitindo que você realize suas sessões em um ambiente familiar, sem abrir mão da qualidade do acompanhamento psicológico.
              </p>
              <p style={{ fontSize: '1.05rem' }}>
                O atendimento segue os mesmos princípios éticos, técnicos e de sigilo da modalidade presencial.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Dúvidas Frequentes</h2>
          </FadeUp>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'Como funciona a terapia online?', a: 'As sessões acontecem por videochamada, em uma plataforma segura, permitindo que você seja atendido de onde estiver.' },
              { q: 'Como faço para agendar uma sessão?', a: 'Basta entrar em contato pelo WhatsApp para esclarecer dúvidas e verificar a disponibilidade de horários.' },
              { q: 'Qual a duração das sessões?', a: 'As sessões têm duração aproximada de 50 minutos.' },
              { q: 'Com que frequência acontecem as sessões?', a: 'A frequência dos encontros é definida em conjunto entre psicólogo e paciente, considerando as necessidades, objetivos e particularidades de cada caso. Em muitos casos, as sessões ocorrem semanalmente, mas essa decisão faz parte da construção do processo terapêutico.' },
              { q: 'Como saber se a terapia pode me ajudar?', a: 'A decisão de iniciar um processo terapêutico é pessoal. As primeiras sessões permitem compreender melhor suas demandas e avaliar como o trabalho pode contribuir para você.' },
              { q: 'Os atendimentos são sigilosos?', a: 'Sim. O sigilo profissional é um princípio ético fundamental.' },
              { q: 'Como obter informações sobre os valores?', a: 'As informações sobre valores e formas de pagamento são fornecidas diretamente no primeiro contato.' },
              { q: 'Atende brasileiros no exterior?', a: 'Sim. Realizo atendimentos online para brasileiros que vivem em diferentes países.' },
              { q: 'Nunca fiz terapia. Como funciona a primeira sessão?', a: 'A primeira sessão é um momento de acolhimento e escuta, em que você poderá falar sobre suas questões, expectativas e dúvidas em relação ao processo terapêutico.' },
              { q: 'Quanto tempo dura um processo terapêutico?', a: 'Não existe uma duração pré-definida. Cada processo é único e acontece de acordo com as necessidades, objetivos e particularidades de cada pessoa.' }
            ].map((faq, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div 
                  onClick={() => toggleFaq(idx)}
                  style={{
                    padding: '1.5rem 2rem', backgroundColor: 'var(--color-bg-main)', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 500 }}>{faq.q}</h3>
                    {openFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.95rem' }}>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ backgroundColor: 'var(--color-brown-deep)', padding: '6rem 2rem', textAlign: 'center', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <FadeUp>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
              Cuidar da saúde emocional é investir em si mesmo.
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.8)' }}>
              Se você sente que chegou o momento de olhar para sua história com mais atenção e acolhimento, estou à disposição para caminhar ao seu lado.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <a href="https://wa.me/5531986007610" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-brown-deep)', fontSize: '1rem', padding: '1.2rem 3rem' }}>
                AGENDAR CONSULTA
              </a>
              <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-secondary)' }}>📱 WhatsApp (31) 98600-7610</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
};

export default Psicoterapia;
