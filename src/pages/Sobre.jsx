import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Brain, Heart, Users, Star, Ear, Smiley, Quotes } from 'phosphor-react';
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

const Sobre = () => {
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
            <div style={{
              width: '100%',
              height: '550px',
              backgroundColor: 'var(--color-secondary)',
              borderRadius: '20px 20px 20px 20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}>
              <img src="/foto-1.jpg" alt="Dr. Victor Morais" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-brown-deep)', lineHeight: 1.2 }}>
              Uma escuta acolhedora para histórias únicas.
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'var(--color-text)' }}>
              Acredito que cada pessoa possui uma trajetória singular e merece um espaço seguro para ser escutada com respeito, profundidade e sem julgamentos. Meu trabalho é oferecer um acompanhamento ético e humanizado, auxiliando na compreensão dos conflitos emocionais e na construção de uma vida com mais equilíbrio e significado.
            </p>
            <Link to="/contato" className="btn btn-primary">Agendar Consulta</Link>
          </FadeUp>
        </div>
      </section>

      {/* MINHA HISTÓRIA */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
          <FadeUp>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)' }}>Conheça minha trajetória</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-text)', fontSize: '1.05rem' }}>
              <p>Meu nome é Victor Morais, sou Psicólogo Clínico (CRP 04/80003), com atuação fundamentada na Psicanálise e formação em Sexologia Clínica.</p>
              <p>Ao longo da minha trajetória, desenvolvi uma prática voltada para a escuta singular de cada paciente, respeitando sua história, seus conflitos e a forma única como cada indivíduo experimenta a vida.</p>
              <p>Atuo principalmente com psicoterapia individual, auxiliando pessoas que enfrentam ansiedade, depressão, dificuldades nos relacionamentos, sofrimento emocional, questões relacionadas à sexualidade e conflitos existenciais.</p>
              <p>Realizo atendimentos online para todo o Brasil e também para brasileiros que vivem no exterior, proporcionando um espaço de acolhimento, reflexão e transformação.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ height: '650px', borderRadius: '16px', background: 'var(--color-bg-alt)', boxShadow: '0 15px 35px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--color-secondary)', opacity: 0.1 }}></div>
              <Quotes size={120} color="var(--color-secondary)" style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.2 }} weight="fill" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* MINHA ABORDAGEM */}
      <section className="section section-bg-white">
        <div className="container">
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Minha Abordagem</h2>
          </FadeUp>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {[
              {
                title: 'Psicanálise',
                desc: 'Um espaço para compreender emoções, conflitos e padrões inconscientes que influenciam a forma como você se relaciona consigo mesmo e com os outros.',
                icon: <Brain size={48} color="var(--color-brown-main)" weight="thin" />
              },
              {
                title: 'Escuta Individualizada',
                desc: 'Cada pessoa possui uma história única. Por isso, o processo terapêutico é construído respeitando sua singularidade.',
                icon: <Ear size={48} color="var(--color-brown-main)" weight="thin" />
              },
              {
                title: 'Sexologia Clínica',
                desc: 'A sexualidade faz parte da experiência humana. O trabalho clínico busca promover saúde, autoconhecimento e qualidade nas relações afetivas e sexuais.',
                icon: <Heart size={48} color="var(--color-brown-main)" weight="thin" />
              }
            ].map((item, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div style={{
                  padding: '3rem 2rem',
                  backgroundColor: 'var(--color-bg-main)',
                  borderRadius: '16px',
                  height: '100%',
                  transition: 'all 0.3s ease',
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
                }}
                >
                  <div style={{ marginBottom: '1.5rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-brown-deep)' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA DE TRABALHO */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--color-bg-main)', opacity: 0.8 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center' }}>
          <FadeUp>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-brown-deep)' }}>Mais do que aliviar sintomas, compreender histórias.</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              A psicoterapia é um espaço de construção. Mais do que buscar respostas prontas, acredito na importância de compreender os significados presentes em cada experiência vivida.
            </p>
            <p style={{ fontSize: '1.1rem', margin: 0 }}>
              O processo terapêutico acontece através do diálogo, da escuta e da reflexão, permitindo que cada pessoa encontre novos caminhos para lidar com seus desafios emocionais, relacionais e existenciais.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FORMAÇÃO E ESPECIALIZAÇÕES */}
      <section className="section section-bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Formação e Especializações</h2>
          </FadeUp>
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--color-secondary)' }}>
            {[
              'Graduado em Psicologia. Pontifícia Universidade Católica de Minas Gerais.',
              'Pós-graduado em Sexologia Clínica. Faculdade Metropolitana de Franca, FAMEF, Brasil.',
              'Aperfeiçoamento em Terapia Psicanalítica, Teoria e Técnicas de Intervenção. Faculdade Metropolitana de Franca, FAMEF, Brasil.',
              'Extensão em Saúde e Inclusão. Faculdade Metropolitana de Franca, FAMEF, Brasil.',
              'Aperfeiçoamento em Psicologia Social. Faculdade Metropolitana de Franca, FAMEF, Brasil.',
              'Extensão em Psicologia e Saúde Coletiva. Faculdade Metropolitana de Franca, FAMEF, Brasil.',
              'Aperfeiçoamento em Psicologia Clínica. Faculdade Metropolitana de Franca, FAMEF, Brasil.'
            ].map((item, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                  <div style={{
                    position: 'absolute', left: '-2.45rem', top: '0.2rem',
                    width: '16px', height: '16px', borderRadius: '50%',
                    backgroundColor: 'var(--color-brown-main)', border: '4px solid var(--color-bg-alt)'
                  }}></div>
                  <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-text)', fontWeight: 500 }}>{item}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-brown-deep)' }}>Valores que norteiam meu trabalho</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Ética', desc: 'Compromisso com a responsabilidade profissional e o sigilo.', icon: <CheckCircle /> },
              { title: 'Acolhimento', desc: 'Um espaço seguro, sem julgamentos.', icon: <Heart /> },
              { title: 'Singularidade', desc: 'Cada processo terapêutico é único.', icon: <Star /> },
              { title: 'Escuta', desc: 'Compreender antes de interpretar.', icon: <Ear /> },
              { title: 'Respeito', desc: 'À história, ao tempo e às escolhas de cada paciente.', icon: <Users /> },
              { title: 'Humanização', desc: 'Um cuidado genuíno e individualizado.', icon: <Smiley /> }
            ].map((valor, idx) => (
              <FadeUp delay={idx * 0.1} key={idx}>
                <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', height: '100%' }}>
                  <div style={{ color: 'var(--color-brown-main)', fontSize: '2rem', marginBottom: '1rem' }}>{valor.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-brown-deep)' }}>{valor.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{valor.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE INSTITUCIONAL */}
      <section style={{ backgroundColor: 'var(--color-brown-deep)', padding: '6rem 2rem', textAlign: 'center', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeUp>
            <Quotes size={48} color="var(--color-secondary)" style={{ marginBottom: '2rem', opacity: 0.5 }} weight="fill" />
            <h2 style={{ fontSize: '2.2rem', color: 'var(--color-bg-main)', fontStyle: 'italic', lineHeight: 1.4 }}>
              "Cuidar da saúde emocional é um gesto de coragem e de respeito consigo mesmo."
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="section">
        <div className="container text-center" style={{ maxWidth: '700px' }}>
          <FadeUp>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-brown-deep)' }}>
              Se você sente que é o momento de olhar para si com mais cuidado e profundidade, será um prazer acompanhar você nessa jornada.
            </h2>
            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <a href="https://wa.me/5531986007610" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1rem' }}>
                AGENDAR CONSULTA
              </a>
              <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-brown-main)' }}>WhatsApp (31) 98600-7610</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
};

export default Sobre;
