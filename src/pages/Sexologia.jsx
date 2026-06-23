import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Heart, Plus, Minus, ArrowRight, UserCircle, Users, Activity, Sparkle, ChatCircle, Globe } from 'phosphor-react';
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

const Sexologia = () => {
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
              Sexualidade, intimidade e relacionamentos também fazem parte da saúde emocional.
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--color-text)' }}>
              A Sexologia Clínica oferece um espaço de escuta acolhedora e especializada para compreender questões relacionadas à sexualidade, aos relacionamentos e ao bem-estar íntimo, sempre com ética, respeito e sigilo.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contato" className="btn btn-primary">Agendar Consulta</Link>
              <Link to="/sobre" className="btn btn-outline">Conheça minha abordagem</Link>
            </div>
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
              {/* Imagem Placeholder */}
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--color-brown-main), var(--color-secondary))', opacity: 0.6 }}></div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* O QUE É SEXOLOGIA CLÍNICA? */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <FadeUp delay={0.2}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)' }}>Um olhar integral sobre a sexualidade humana.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-text)', fontSize: '1.1rem' }}>
              <p>A sexualidade faz parte da experiência humana e está presente em diferentes momentos da vida. Questões relacionadas ao desejo, intimidade, autoestima, relacionamentos e satisfação sexual podem gerar sofrimento e impactar significativamente a qualidade de vida.</p>
              <p>A Sexologia Clínica é uma área especializada que oferece um espaço seguro para compreender essas experiências, promovendo autoconhecimento, saúde emocional e relações mais satisfatórias.</p>
              <p>Cada pessoa possui uma história única e, por isso, o acompanhamento é construído de forma individualizada, respeitando valores, vivências e singularidades.</p>
            </div>
          </FadeUp>
          <FadeUp>
            <div style={{ height: '500px', borderRadius: '16px', backgroundColor: 'var(--color-bg-alt)', boxShadow: '0 15px 35px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--color-secondary)', opacity: 0.2 }}></div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* COMO A SEXOLOGIA PODE AJUDAR? */}
      <section className="section section-bg-white">
        <div className="container">
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Como a Sexologia Clínica pode ajudar?</h2>
          </FadeUp>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {[
              { title: 'Relacionamentos Afetivos', desc: 'Compreender dificuldades na vida amorosa, comunicação e construção de vínculos mais saudáveis.', icon: <Users size={40} color="var(--color-brown-main)" weight="thin" /> },
              { title: 'Desejo Sexual', desc: 'Questões relacionadas à diminuição do desejo ou diferenças de libido entre parceiros.', icon: <Sparkle size={40} color="var(--color-brown-main)" weight="thin" /> },
              { title: 'Autoestima e Autoconfiança', desc: 'Fortalecer a relação consigo mesmo e com o próprio corpo.', icon: <UserCircle size={40} color="var(--color-brown-main)" weight="thin" /> },
              { title: 'Ansiedade e Sexualidade', desc: 'Entender como fatores emocionais podem influenciar a vida íntima.', icon: <Activity size={40} color="var(--color-brown-main)" weight="thin" /> },
              { title: 'Intimidade e Conexão', desc: 'Promover maior proximidade emocional e afetiva.', icon: <Heart size={40} color="var(--color-brown-main)" weight="thin" /> },
              { title: 'Conflitos Relacionados à Sexualidade', desc: 'Um espaço de acolhimento e reflexão livre de julgamentos.', icon: <ChatCircle size={40} color="var(--color-brown-main)" weight="thin" /> }
            ].map((item, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div style={{
                  padding: '3rem 2rem', backgroundColor: 'var(--color-bg-main)', borderRadius: '16px', height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: '1px solid transparent'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = 'var(--color-secondary)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ marginBottom: '1.5rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-brown-deep)' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'var(--color-text)' }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAIS DEMANDAS */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Principais Demandas</h2>
          </FadeUp>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { title: 'Dificuldades nos Relacionamentos', desc: 'Compreender conflitos e fortalecer a comunicação.' },
              { title: 'Baixa Libido', desc: 'Investigar fatores emocionais e relacionais envolvidos.' },
              { title: 'Insegurança e Autoestima', desc: 'Desenvolver uma relação mais saudável consigo mesmo.' },
              { title: 'Ansiedade de Desempenho', desc: 'Reduzir medos, pressões e expectativas excessivas.' },
              { title: 'Questões Ligadas à Intimidade', desc: 'Promover maior conforto e bem-estar na vida afetiva e sexual.' },
              { title: 'Sexualidade ao Longo da Vida', desc: 'Refletir sobre mudanças e desafios em diferentes fases da vida.' }
            ].map((demanda, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ height: '180px', backgroundColor: 'var(--color-secondary)', opacity: 0.3 }}></div>
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-brown-deep)' }}>{demanda.title}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: 0 }}>{demanda.desc}</p>
                  </div>
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)' }}>Escuta especializada, ética e sem julgamentos.</h2>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
              Meu trabalho em Sexologia Clínica está fundamentado em uma escuta acolhedora e individualizada, integrada à prática da Psicologia e da Psicanálise.
            </p>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
              Mais do que oferecer respostas prontas, o objetivo é compreender a singularidade de cada história, respeitando o tempo, os valores e as experiências de cada pessoa.
            </p>
            <p style={{ fontSize: '1.15rem', margin: 0 }}>
              A sexualidade é uma dimensão importante da existência humana e pode ser vivida de forma mais saudável quando há espaço para reflexão, autoconhecimento e diálogo.
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              'Quando dificuldades na vida afetiva estão gerando sofrimento.',
              'Quando existe diminuição do desejo sexual.',
              'Em momentos de conflitos no relacionamento.',
              'Quando sentimentos de insegurança e vergonha interferem na intimidade.',
              'Quando há ansiedade relacionada ao desempenho.',
              'Quando questões ligadas à sexualidade despertam dúvidas ou sofrimento.',
              'Quando existe o desejo de desenvolver uma relação mais saudável consigo mesmo e com o outro.'
            ].map((item, idx) => (
              <FadeUp delay={idx * 0.05} key={idx}>
                <div style={{
                  padding: '1.5rem 2rem', backgroundColor: 'var(--color-bg-main)', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', gap: '1.5rem'
                }}>
                  <ArrowRight size={24} color="var(--color-brown-main)" weight="bold" style={{ flexShrink: 0 }} />
                  <p style={{ margin: 0, fontWeight: 400, color: 'var(--color-text)', fontSize: '1.1rem' }}>{item}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ATENDIMENTO ONLINE */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <FadeUp>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-brown-deep)' }}>
                Atendimento online para todo o Brasil e brasileiros que vivem no exterior.
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                As consultas são realizadas em ambiente seguro, reservado e sigiloso, oferecendo conforto e praticidade, sem abrir mão da qualidade do acompanhamento psicológico.
              </p>
              <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--color-text)' }}>
                Todo o processo ocorre com ética, acolhimento e respeito à individualidade de cada paciente.
              </p>
            </FadeUp>
          </div>
          <div>
            <FadeUp delay={0.2}>
              <div style={{ height: '400px', borderRadius: '16px', backgroundColor: 'var(--color-secondary)', opacity: 0.3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Globe size={120} color="var(--color-brown-deep)" weight="thin" opacity={0.5} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Perguntas Frequentes</h2>
          </FadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'O atendimento é sigiloso?', a: 'Sim. Todo acompanhamento psicológico segue rigorosamente os princípios éticos da profissão e o sigilo profissional.' },
              { q: 'É necessário estar em um relacionamento para procurar a Sexologia Clínica?', a: 'Não. O acompanhamento pode beneficiar qualquer pessoa que deseje compreender melhor sua sexualidade, autoestima ou relacionamentos.' },
              { q: 'O atendimento é apenas para problemas sexuais?', a: 'Não. A Sexologia Clínica aborda também questões relacionadas à intimidade, vínculos afetivos, autoestima e bem-estar emocional.' },
              { q: 'O atendimento é realizado online?', a: 'Sim. Atendo pacientes de todo o Brasil e brasileiros que vivem no exterior.' }
            ].map((faq, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div 
                  onClick={() => toggleFaq(idx)}
                  style={{
                    padding: '1.5rem 2rem', backgroundColor: 'var(--color-bg-main)', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 500, color: 'var(--color-brown-deep)' }}>{faq.q}</h3>
                    {openFaq === idx ? <Minus size={20} color="var(--color-brown-main)" /> : <Plus size={20} color="var(--color-brown-main)" />}
                  </div>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ marginTop: '1rem', marginBottom: 0, fontSize: '1rem', color: 'var(--color-text)' }}>{faq.a}</p>
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
        <div className="container" style={{ maxWidth: '750px' }}>
          <FadeUp>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
              Cuidar da sexualidade também é cuidar da saúde emocional.
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.8)' }}>
              Através de uma escuta acolhedora, ética e especializada, é possível compreender conflitos, fortalecer relacionamentos e construir uma relação mais saudável consigo mesmo.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <a href="https://wa.me/5531986007610" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-brown-deep)', fontSize: '1rem', padding: '1.2rem 3rem' }}>
                AGENDAR CONSULTA
              </a>
              <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-secondary)' }}>WhatsApp: (31) 98600-7610</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
};

export default Sexologia;
