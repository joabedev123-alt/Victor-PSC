import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown, CheckCircle, Plus, Minus } from 'phosphor-react';
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

const Home = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        paddingTop: '5rem',
        paddingBottom: '3rem'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <FadeUp>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-brown-deep)' }}>
              Psicoterapia com acolhimento, profundidade e escuta especializada.
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--color-text)' }}>
              Através da Psicanálise e da Sexologia Clínica, ofereço um espaço seguro para compreender conflitos emocionais, fortalecer relacionamentos e promover uma vida com mais equilíbrio e significado.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contato" className="btn btn-primary">Fale com um especialista</Link>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div style={{
              width: '100%',
              height: '500px',
              backgroundColor: 'var(--color-secondary)',
              borderRadius: '20px 20px 20px 20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <img src="/foto-1402.jpg" alt="Dr. Victor Morais" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section className="section section-bg-white">
        <div className="container">
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Especialidades</h2>
          </FadeUp>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { title: 'Psicoterapia Individual', desc: 'Atendimento clínico focado no autoconhecimento e tratamento de sofrimentos psíquicos.' },
              { title: 'Psicanálise', desc: 'Abordagem profunda para acessar raízes de conflitos inconscientes.' },
              { title: 'Sexologia Clínica', desc: 'Tratamento de disfunções sexuais e questões de intimidade.' },
              { title: 'Atendimento Online', desc: 'Sessões seguras por videochamada de onde você estiver.' },
              { title: 'Brasileiros no Exterior', desc: 'Acolhimento na sua língua materna para questões de adaptação e vida fora.' },
              { title: 'Relacionamentos', desc: 'Mediação de conflitos conjugais e fortalecimento de vínculos.' }
            ].map((item, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div style={{
                  padding: '3rem 2rem',
                  backgroundColor: 'var(--color-bg-main)',
                  borderRadius: '12px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-brown-main)' }}>{item.title}</h3>
                  <p style={{ margin: 0 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* DEMANDAS TRATADAS */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Demandas Tratadas</h2>
          </FadeUp>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {['Ansiedade', 'Depressão', 'Burnout', 'Vícios', 'Baixa autoestima', 'Conflitos conjugais'].map((demanda, idx) => (
              <FadeUp delay={idx * 0.1} key={demanda}>
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ height: '200px', backgroundColor: 'var(--color-secondary)', opacity: 0.3 }}></div>
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{demanda}</h3>
                    <p style={{ fontSize: '0.95rem' }}>Abordagem focada em compreender as raízes do sintoma e promover alívio e resignificação.</p>
                    <Link to="/demandas" style={{ color: 'var(--color-brown-main)', fontWeight: 500, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Saiba mais →</Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM SOU */}
      <section className="section section-bg-white">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <FadeUp>
            <div style={{ height: '600px', borderRadius: '12px', background: 'var(--color-secondary)' }}></div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)', textTransform: 'uppercase' }}>Uma escuta acolhedora para histórias únicas.</h2>
            <p>Olá, sou Victor Morais. Atuo como psicólogo clínico com foco na psicanálise e sexologia. Acredito que o processo terapêutico é um encontro profundo onde você pode ser quem é, sem julgamentos.</p>
            <p>Meu objetivo é oferecer um espaço seguro para que possamos juntos investigar os motivos do seu sofrimento e buscar caminhos para uma vida mais autêntica e saudável.</p>
            <ul style={{ listStyle: 'none', margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Psicologia Clínica', 'Psicanálise', 'Sexologia Clínica', 'Atendimento online para todo Brasil e exterior'].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={24} color="var(--color-brown-main)" weight="fill" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/sobre" className="btn btn-outline">Conheça minha trajetória</Link>
          </FadeUp>
        </div>
      </section>

      {/* NOSSO PROCESSO & DIFERENCIAIS */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <FadeUp>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-brown-deep)' }}>Nosso Processo</h2>
            </FadeUp>
            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--color-brown-main)' }}>
              {[
                { title: 'Primeiro contato', desc: 'Envie uma mensagem via WhatsApp.' },
                { title: 'Agendamento', desc: 'Encontraremos o melhor horário.' },
                { title: 'Sessões online', desc: 'Encontros semanais de 50 minutos.' },
                { title: 'Processo individualizado', desc: 'Foco exclusivo na sua demanda.' },
                { title: 'Transformação', desc: 'Resultados contínuos e profundos.' }
              ].map((step, idx) => (
                <FadeUp delay={idx * 0.1} key={idx}>
                  <div style={{ position: 'relative', marginBottom: '2rem' }}>
                    <div style={{
                      position: 'absolute', left: '-2.45rem', top: '0.2rem',
                      width: '16px', height: '16px', borderRadius: '50%',
                      backgroundColor: 'var(--color-brown-main)', border: '4px solid var(--color-bg-main)'
                    }}></div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>{step.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.8 }}>{step.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          
          <div>
            <FadeUp>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-brown-deep)' }}>Diferenciais</h2>
            </FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {['Sigilo absoluto', 'Escuta individualizada', 'Abordagem psicanalítica', 'Especialização em Sexologia Clínica', 'Horários flexíveis', 'Ambiente acolhedor'].map((dif, idx) => (
                <FadeUp delay={idx * 0.1} key={idx}>
                  <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
                    <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-brown-main)' }}>{dif}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section">
        <div className="container text-center">
          <FadeUp>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-brown-deep)' }}>Avaliações</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#FABB05', fontSize: '1.5rem', marginBottom: '2rem' }}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--color-text)' }}>
              Acompanhe as avaliações no Google Meu Negócio e veja como a psicoterapia psicanalítica e a sexologia clínica têm transformado a vida de pacientes no Brasil e no exterior.
            </p>
            <a href="https://share.google/bc86hTB4oMbV5QdZL" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Ver depoimentos no Google
            </a>
          </FadeUp>
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
              { q: 'Como funciona a terapia online?', a: 'As sessões ocorrem por videochamada (Google Meet ou similar), garantindo o mesmo sigilo e eficácia do presencial, com a comodidade de estar em seu próprio ambiente.' },
              { q: 'Qual a duração das sessões?', a: 'Cada sessão tem a duração de 50 minutos.' },
              { q: 'Atende brasileiros no exterior?', a: 'Sim, atendo pacientes de diversos países, ajustando o fuso horário para nossa conveniência.' },
              { q: 'Valores são informados pelo WhatsApp?', a: 'Sim. Entre em contato e lhe enviarei todas as informações de valores e disponibilidade de agenda.' }
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
      <section style={{ backgroundColor: 'var(--color-brown-deep)', padding: '6rem 2rem', color: 'var(--color-white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeUp>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
              COMEÇAR UM PROCESSO TERAPÊUTICO PODE SER O PRIMEIRO PASSO PARA UMA VIDA MAIS LEVE.
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.8)' }}>
              Se você sente que chegou o momento de olhar para si com mais cuidado e profundidade, estou à disposição para acompanhá-lo nessa jornada.
            </p>
            <a href="https://wa.me/5531986007610" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-brown-deep)' }}>
              AGENDAR CONSULTA
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
};

export default Home;
