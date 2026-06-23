import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappLogo, InstagramLogo, MapPin, Globe, Clock, Plus, Minus, EnvelopeSimple, PaperPlaneRight } from 'phosphor-react';
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

const Contato = () => {
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
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--color-bg-alt)'
      }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <FadeUp>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-brown-deep)' }}>
              Vamos conversar?
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
              Dar o primeiro passo pode parecer difícil, mas você não precisa fazer isso sozinho. Se deseja iniciar sua jornada de cuidado emocional ou esclarecer alguma dúvida, ficarei à disposição para atendê-lo.
            </p>
            <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--color-brown-main)', fontWeight: 500 }}>
              Atendimento online para todo o Brasil e brasileiros que vivem no exterior.
            </p>
            <a href="https://wa.me/5531986007610" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Agendar Consulta
            </a>
          </FadeUp>
        </div>
      </section>

      {/* INFORMAÇÕES DE CONTATO */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* WhatsApp */}
            <FadeUp delay={0.1}>
              <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '16px', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
                <WhatsappLogo size={48} color="var(--color-brown-main)" weight="thin" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-brown-deep)' }}>WhatsApp</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1rem' }}>(31) 98600-7610</p>
                <p style={{ fontSize: '0.95rem', marginBottom: '2rem', flex: 1 }}>Primeiro contato para dúvidas e agendamentos.</p>
                <a href="https://wa.me/5531986007610" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem', width: '100%' }}>
                  Conversar no WhatsApp
                </a>
              </div>
            </FadeUp>

            {/* Instagram */}
            <FadeUp delay={0.2}>
              <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '16px', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
                <InstagramLogo size={48} color="var(--color-brown-main)" weight="thin" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-brown-deep)' }}>Instagram</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1rem' }}>@psi.victormorais</p>
                <p style={{ fontSize: '0.95rem', marginBottom: '2rem', flex: 1 }}>Conteúdos sobre saúde emocional, relacionamentos, sexualidade e psicoterapia.</p>
                <a href="https://www.instagram.com/psi.victormorais?igsh=MTJlenk2enE0MTNvYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem', width: '100%' }}>
                  Acompanhar no Instagram
                </a>
              </div>
            </FadeUp>

            {/* Atendimento / Horários */}
            <FadeUp delay={0.3}>
              <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-bg-main)', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Globe size={28} color="var(--color-brown-deep)" weight="fill" />
                    <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--color-brown-deep)' }}>Atendimento</h3>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.95rem', paddingLeft: '2.3rem' }}>Brasil e brasileiros residentes no exterior.</p>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Clock size={28} color="var(--color-brown-deep)" weight="fill" />
                    <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--color-brown-deep)' }}>Horários</h3>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.95rem', paddingLeft: '2.3rem', fontWeight: 600 }}>Segunda a Sexta</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', paddingLeft: '2.3rem' }}>08h às 20h</p>
                  <p style={{ margin: 0, fontSize: '0.85rem', paddingLeft: '2.3rem', fontStyle: 'italic', opacity: 0.8 }}>(Sob agendamento)</p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* COMO FUNCIONA O PRIMEIRO CONTATO? */}
      <section className="section section-bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Como Funciona o Primeiro Contato?</h2>
          </FadeUp>
          <div style={{ position: 'relative', paddingLeft: '2.5rem', borderLeft: '2px solid var(--color-secondary)' }}>
            {[
              { step: '1. Envie uma mensagem', desc: 'Entre em contato pelo WhatsApp para esclarecer dúvidas e obter informações sobre o atendimento.' },
              { step: '2. Agendamento', desc: 'Definimos o melhor horário de acordo com sua disponibilidade.' },
              { step: '3. Primeira Sessão', desc: 'Um espaço de acolhimento, escuta e compreensão da sua história.' },
              { step: '4. Início do Processo Terapêutico', desc: 'Cada processo é construído de forma individualizada, respeitando seu tempo e suas necessidades.' }
            ].map((item, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div style={{ position: 'relative', marginBottom: '3rem' }}>
                  <div style={{
                    position: 'absolute', left: '-3.1rem', top: '0',
                    width: '20px', height: '20px', borderRadius: '50%',
                    backgroundColor: 'var(--color-brown-main)', border: '4px solid var(--color-bg-alt)'
                  }}></div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--color-brown-deep)', marginBottom: '0.5rem' }}>{item.step}</h3>
                  <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--color-text)' }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ATENDIMENTO ONLINE */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <FadeUp>
            <Globe size={60} color="var(--color-brown-main)" weight="thin" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)' }}>Psicoterapia e Sexologia Clínica onde você estiver.</h2>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
              As consultas são realizadas de forma online, em ambiente seguro e reservado, permitindo que você seja atendido com conforto, praticidade e sigilo.
            </p>
            <p style={{ fontSize: '1.15rem', margin: 0 }}>
              Atendo pacientes em todo o Brasil e brasileiros que vivem no exterior, oferecendo um acompanhamento ético, acolhedor e individualizado.
            </p>
          </FadeUp>
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
              { q: 'Como faço para agendar uma consulta?', a: 'O agendamento é realizado diretamente pelo WhatsApp, onde também são esclarecidas as principais dúvidas.' },
              { q: 'As sessões são presenciais ou online?', a: 'Atualmente os atendimentos são realizados na modalidade online.' },
              { q: 'Qual a duração das sessões?', a: 'As sessões possuem duração média de 50 minutos.' },
              { q: 'Como recebo o link da consulta?', a: 'Após o agendamento, todas as orientações são enviadas previamente.' },
              { q: 'Os atendimentos são sigilosos?', a: 'Sim. Todo o processo segue rigorosamente os princípios éticos da Psicologia e o sigilo profissional.' }
            ].map((faq, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div 
                  onClick={() => toggleFaq(idx)}
                  style={{
                    padding: '1.5rem 2rem', backgroundColor: '#fff', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.03)'
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

      {/* FORMULÁRIO DE CONTATO */}
      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <FadeUp>
            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '4rem 3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '2.5rem', color: 'var(--color-brown-deep)' }}>Vamos iniciar essa conversa?</h2>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-brown-deep)' }}>Nome</label>
                  <input type="text" placeholder="Seu nome completo" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #e2dcd2', backgroundColor: '#faf9f6', fontSize: '1rem', outline: 'none', transition: 'border 0.3s' }} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-brown-deep)' }}>E-mail</label>
                    <input type="email" placeholder="Seu e-mail" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #e2dcd2', backgroundColor: '#faf9f6', fontSize: '1rem', outline: 'none', transition: 'border 0.3s' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-brown-deep)' }}>Telefone</label>
                    <input type="tel" placeholder="(  ) _____-____" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #e2dcd2', backgroundColor: '#faf9f6', fontSize: '1rem', outline: 'none', transition: 'border 0.3s' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-brown-deep)' }}>Assunto</label>
                  <input type="text" placeholder="Sobre o que deseja falar?" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #e2dcd2', backgroundColor: '#faf9f6', fontSize: '1rem', outline: 'none', transition: 'border 0.3s' }} />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-brown-deep)' }}>Mensagem</label>
                  <textarea rows="5" placeholder="Sua mensagem aqui..." style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #e2dcd2', backgroundColor: '#faf9f6', fontSize: '1rem', outline: 'none', transition: 'border 0.3s', resize: 'vertical' }}></textarea>
                </div>

                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                    <PaperPlaneRight size={20} /> Enviar Mensagem
                  </button>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.6 }}>ou</span>
                  <a href="https://wa.me/5531986007610" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center', borderColor: '#25D366', color: '#25D366' }}>
                    <WhatsappLogo size={20} weight="fill" /> Agendar pelo WhatsApp
                  </a>
                </div>
              </form>

            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA FINAL E RODAPÉ EXTENDIDO */}
      <section style={{ backgroundColor: 'var(--color-brown-deep)', padding: '6rem 2rem 4rem 2rem', textAlign: 'center', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeUp>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
              Cuidar da saúde emocional é um gesto de coragem e acolhimento consigo mesmo.
            </h2>
            <p style={{ fontSize: '1.15rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.8)' }}>
              Se você sente que chegou o momento de olhar para sua história com mais profundidade, estou à disposição para acompanhá-lo nesse processo.
            </p>

            <a href="https://wa.me/5531986007610" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-brown-deep)', fontSize: '1rem', padding: '1.2rem 3rem', marginBottom: '4rem' }}>
              AGENDAR CONSULTA
            </a>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', fontSize: '1rem', color: 'var(--color-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <WhatsappLogo size={24} /> (31) 98600-7610
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <InstagramLogo size={24} /> @psi.victormorais
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={24} /> Atendimento online
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
};

export default Contato;
