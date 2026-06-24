import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown, CaretLeft, CaretRight, CheckCircle, Plus, Minus, InstagramLogo } from 'phosphor-react';
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

  // ============================================================
  // POSTS DO INSTAGRAM @psi.victormorais — feed automático via Behold
  // Os posts são puxados em tempo real do feed e já vêm ordenados
  // por data de publicação (mais recente primeiro). Atualiza sozinho
  // sempre que o Victor publicar um post novo no Instagram.
  // Feed ID: lygXu3P2DuOcJ3sUc3RP
  // ============================================================
  const BEHOLD_FEED_ID = 'lygXu3P2DuOcJ3sUc3RP';
  const [instagramPosts, setInstagramPosts] = React.useState([]);
  const [igLoading, setIgLoading] = React.useState(true);

  React.useEffect(() => {
    const formatarData = (timestamp) => {
      try {
        return new Date(timestamp)
          .toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })
          .replace('.', '')
          .replace(' de ', '/');
      } catch {
        return '';
      }
    };

    fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`)
      .then((res) => res.json())
      .then((data) => {
        const posts = (data.posts || []).map((p) => {
          const legenda = (p.prunedCaption || p.caption || '').trim();
          return {
            img: p.sizes?.medium?.mediaUrl || p.sizes?.large?.mediaUrl || p.mediaUrl,
            link: p.permalink || 'https://www.instagram.com/psi.victormorais',
            legenda: legenda.length > 120 ? legenda.slice(0, 117) + '...' : legenda,
            data: formatarData(p.timestamp),
          };
        });
        setInstagramPosts(posts);
      })
      .catch(() => setInstagramPosts([]))
      .finally(() => setIgLoading(false));
  }, []);

  const [igIndex, setIgIndex] = React.useState(0);
  const [igPerView, setIgPerView] = React.useState(
    typeof window !== 'undefined' && window.innerWidth <= 768 ? 1 : 3
  );

  React.useEffect(() => {
    const handleResize = () => setIgPerView(window.innerWidth <= 768 ? 1 : 3);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const igMaxIndex = Math.max(0, instagramPosts.length - igPerView);

  React.useEffect(() => {
    setIgIndex((prev) => Math.min(prev, igMaxIndex));
  }, [igMaxIndex]);

  const igPrev = () => setIgIndex((prev) => (prev <= 0 ? igMaxIndex : prev - 1));
  const igNext = () => setIgIndex((prev) => (prev >= igMaxIndex ? 0 : prev + 1));

  // Auto-play: avança a cada 5s
  React.useEffect(() => {
    const timer = setInterval(igNext, 5000);
    return () => clearInterval(timer);
  }, [igMaxIndex]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section" style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        paddingTop: '5rem',
        paddingBottom: '3rem'
      }}>
        <div className="container grid-2">
          <FadeUp>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-brown-deep)' }}>
              Psicoterapia com acolhimento, profundidade e escuta especializada.
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--color-text)' }}>
              Ofereço um espaço de escuta ética, acolhedora e livre de julgamentos, comprometido com o cuidado à saúde mental.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contato" className="btn btn-primary">Agendar uma sessão</Link>
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
              <img src="/Profissionais/Fotos pessoais/0F583A34-56E5-41A6-892F-DA79F98BCF63.JPG" alt="Dr. Victor Morais" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              { title: 'Psicoterapia Individual', desc: 'Um espaço seguro para falar sobre suas angústias, conflitos e desafios cotidianos.' },
              { title: 'Psicanálise', desc: 'Uma abordagem que busca compreender os sentidos inconscientes presentes nos sintomas e nas relações.' },
              { title: 'Sexologia Clínica', desc: 'Acompanhamento de questões relacionadas à sexualidade, intimidade, desejo e disfunções sexuais.' },
              { title: 'Brasileiros no Exterior', desc: 'Acolhimento para desafios de adaptação, identidade e vida longe do país de origem.' },
              { title: 'Atendimento Online', desc: 'Sessões por videochamada com a mesma ética, sigilo e qualidade do atendimento presencial.' },
              { title: 'Relacionamentos', desc: 'Reflexão e elaboração de conflitos afetivos, familiares e conjugais.' }
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
            {[
              { title: 'Ansiedade e Estresse', desc: 'Acolhimento para crises de ansiedade, preocupações excessivas, insegurança e sobrecarga emocional.' },
              { title: 'Depressão e Sofrimento Emocional', desc: 'Espaço de escuta para momentos de tristeza persistente, desânimo e perda de sentido.' },
              { title: 'Relacionamentos', desc: 'Reflexão e elaboração de conflitos afetivos, familiares e conjugais.' },
              { title: 'Questões de Gênero', desc: 'Atendimento acolhedor para questões relacionadas à sexualidade, identidade de gênero, relacionamentos e saúde mental.' },
              { title: 'Luto e Transformações da Vida', desc: 'Acompanhamento em momentos de perda, rupturas e mudanças que exigem novas formas de existir.' },
              { title: 'Dependência Emocional', desc: 'Reflexão sobre vínculos marcados pelo medo da rejeição, da solidão e pela dificuldade de estabelecer limites.' }
            ].map((demanda, idx) => (
              <FadeUp delay={idx * 0.1} key={demanda.title}>
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-brown-deep)' }}>{demanda.title}</h3>
                    <p style={{ fontSize: '1.05rem', margin: 0, color: 'var(--color-text)', flexGrow: 1 }}>{demanda.desc}</p>
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
            <div style={{ height: '600px', borderRadius: '12px', background: 'var(--color-secondary)', overflow: 'hidden' }}>
              <img src="/Profissionais/Fotos pessoais/BC7E9C1C-3F71-494A-BF65-1FBD59B5FA64.JPG" alt="Dr. Victor Morais" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)', textTransform: 'uppercase' }}>Sua história merece ser ouvida.</h2>
            <p>Prazer, sou Victor Morais, psicólogo (CRP 04/80003), graduado pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Acredito que cada pessoa carrega uma história única e merece um espaço de escuta cuidadosa, ética e livre de julgamentos.</p>
            <p>Meu trabalho é voltado para a construção de um espaço seguro de reflexão, onde seja possível compreender conflitos, elaborar sofrimentos e desenvolver novos modos de se relacionar consigo mesmo e com o mundo.</p>
            <ul style={{ listStyle: 'none', margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Psicologia Clínica', 'Psicanálise', 'Sexologia Clínica'].map((item, idx) => (
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

      {/* NOSSO PROCESSO */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <FadeUp>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-brown-deep)' }}>Nosso Processo</h2>
            </FadeUp>
            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--color-brown-main)' }}>
              {[
                { title: 'Primeiro contato', desc: 'Envie uma mensagem via WhatsApp.' },
                { title: 'Agendamento', desc: 'Definimos juntos o melhor horário para os encontros.' },
                { title: 'Primeira sessão', desc: 'Um momento para compreender sua demanda, sua história e aquilo que o levou a buscar ajuda.' },
                { title: 'Acompanhamento', desc: 'O trabalho acontece no seu tempo, respeitando seu percurso e suas necessidades.' }
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
          
          <FadeUp delay={0.2}>
            <div style={{
              width: '100%',
              height: '500px',
              backgroundColor: 'var(--color-secondary)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <img src="/foto-1402.jpg" alt="Atendimento" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </FadeUp>
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
            <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto', color: 'var(--color-text)' }}>
              As opiniões compartilhadas refletem a experiência de pessoas que passaram pelo processo terapêutico e decidiram registrar sua percepção sobre o atendimento.
            </p>
            <p style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--color-text)' }}>
              Acompanhe as avaliações publicadas no Google e conheça os relatos de quem confiou em meu trabalho.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem',
              textAlign: 'left'
            }}>
              {[
                { name: 'Igor Magalhães', time: 'um mês atrás', text: 'Profissional excelente. Comprometido com seus pacientes. Muito atento aos detalhes e com um poder de escuta diferenciado. Um ser humano íntegro e preocupado com as causas sociais que afetam o psicológico das pessoas. Parabéns e obrigado pelo seu trabalho!' },
                { name: 'Flora Araújo', time: 'um mês atrás', text: 'Victor é um profissional excelente ético e comprometido com trabalho. eu super indico o seu trabalho eu já saí de várias sessões chorando de tão bem que me faz e de tão produtiva é a terapia São 50 minutos que mudam a nossa vida' },
                { name: 'Nicole Araújo', time: 'um mês atrás', text: 'Um profissional excepcional! Desde o primeiro atendimento, transmite acolhimento, empatia e muita segurança. Sua forma de conduzir as sessões é leve, respeitosa e ao mesmo tempo extremamente eficaz. É nítido o cuidado genuíno com cada detalhe.' }
              ].map((review, idx) => (
                <FadeUp delay={idx * 0.1} key={idx}>
                  <a 
                    href="https://share.google/PFzV9qUqs5rc2Bd0n" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      display: 'block',
                      backgroundColor: '#fff',
                      padding: '2rem',
                      borderRadius: '16px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                      height: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.06)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
                    }}
                  >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-brown-main)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-brown-deep)' }}>{review.name}</h3>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text)', opacity: 0.7 }}>{review.time}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.2rem', color: '#FABB05', fontSize: '1rem', marginBottom: '1rem' }}>
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.6 }}>"{review.text}"</p>
                  </a>
                </FadeUp>
              ))}
            </div>

            <a href="https://share.google/PFzV9qUqs5rc2Bd0n" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Ver mais depoimentos no Google
            </a>
          </FadeUp>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container text-center">
          <FadeUp>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-brown-deep)' }}>Acompanhe no Instagram</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--color-text)' }}>
              Compartilho reflexões diárias sobre saúde mental, psicanálise e bem-estar emocional.
            </p>
            {/* Estado de carregamento do feed */}
            {igLoading && (
              <p style={{ color: 'var(--color-text)', opacity: 0.6 }}>Carregando posts do Instagram...</p>
            )}

            {/* CARROSSEL DE POSTS (feed Behold, ordenado por data de publicação) */}
            {!igLoading && instagramPosts.length > 0 && (
            <>
            <div style={{ position: 'relative', maxWidth: '960px', margin: '0 auto', width: '100%' }}>
              {/* Trilho com overflow escondido */}
              <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
                <div style={{
                  display: 'flex',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: `translateX(-${igIndex * (100 / igPerView)}%)`,
                }}>
                  {instagramPosts.map((post, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: `0 0 ${100 / igPerView}%`,
                        maxWidth: `${100 / igPerView}%`,
                        padding: '0 0.75rem',
                        boxSizing: 'border-box',
                      }}
                    >
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          position: 'relative',
                          width: '100%',
                          aspectRatio: '1/1',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                          transition: 'transform 0.3s ease, filter 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.querySelector('.ig-overlay').style.opacity = '1';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.querySelector('.ig-overlay').style.opacity = '0';
                        }}
                      >
                        <img src={post.img} alt={`Post Instagram ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        {/* Badge de data */}
                        <span style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          background: 'rgba(0,0,0,0.55)',
                          color: '#fff',
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '999px',
                          backdropFilter: 'blur(4px)',
                        }}>{post.data}</span>
                        {/* Overlay com legenda */}
                        <div className="ig-overlay" style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          padding: '1.25rem',
                          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 55%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        }}>
                          <span style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.4, textAlign: 'left' }}>
                            {post.legenda}
                          </span>
                          <span style={{ color: '#fff', fontSize: '0.8rem', marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                            <InstagramLogo size={16} /> @psi.victormorais
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seta anterior */}
              <button
                onClick={igPrev}
                aria-label="Post anterior"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-0.5rem',
                  transform: 'translateY(-50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: 'none',
                  background: '#fff',
                  color: 'var(--color-brown-deep)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <CaretLeft size={22} weight="bold" />
              </button>

              {/* Seta próxima */}
              <button
                onClick={igNext}
                aria-label="Próximo post"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-0.5rem',
                  transform: 'translateY(-50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: 'none',
                  background: '#fff',
                  color: 'var(--color-brown-deep)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <CaretRight size={22} weight="bold" />
              </button>
            </div>

            {/* Indicadores (bolinhas) */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
              {Array.from({ length: igMaxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIgIndex(idx)}
                  aria-label={`Ir para slide ${idx + 1}`}
                  style={{
                    width: igIndex === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '999px',
                    border: 'none',
                    background: igIndex === idx ? 'var(--color-brown-deep)' : 'rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
            </>
            )}
            <div style={{ marginTop: '3rem' }}>
              <a href="https://www.instagram.com/psi.victormorais" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <InstagramLogo size={20} /> Seguir @psi.victormorais
              </a>
            </div>
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
