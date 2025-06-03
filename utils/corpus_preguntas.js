const corpus = [
    { pregunta: "¿A qué hora empieza el evento?", respuesta: "El evento LegalDay SanBue inicia a las 9:00 a.m. el 12 de junio en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Dónde queda la sede principal del Buffet Jurídico SanBue?", respuesta: "La sede principal está ubicada en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Qué temas van a tratar los abogados durante el evento?", respuesta: "Los abogados hablarán sobre temas legales comunes, como derecho civil, laboral y familiar, en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Es necesario registrarse para asistir al LegalDay?", respuesta: "No, la entrada es libre y no requiere registro previo para la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo llevar a un acompañante al evento?", respuesta: "Sí, puedes llevar acompañantes sin problema en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Cuánto cuesta una consulta después del evento?", respuesta: "Las consultas posteriores tienen tarifas variables; el evento es gratuito en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Habrá charlas o talleres en el LegalDay?", respuesta: "Sí, habrá charlas breves impartidas por nuestros abogados expertos en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Qué día es el LegalDay SanBue?", respuesta: "El LegalDay SanBue es el 12 de junio en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿El evento es presencial o virtual?", respuesta: "El evento es presencial en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Cuál es la duración estimada del LegalDay?", respuesta: "El evento dura aproximadamente 6 horas, de 9 a.m. a 3 p.m., en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Habrá atención personalizada en el evento?", respuesta: "Sí, podrás resolver dudas legales con nuestros abogados directamente en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo hacer preguntas durante las charlas?", respuesta: "Claro, el evento en la Universidad San Buenaventura Cali está diseñado para interactuar y resolver tus inquietudes." },
  { pregunta: "¿El evento está dirigido a público general?", respuesta: "Sí, es abierto para cualquier persona interesada en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Qué documentos debo llevar para la consulta?", respuesta: "Es recomendable llevar cualquier documento legal relacionado a tu consulta para la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Hay algún código de vestimenta para el evento?", respuesta: "No hay un código de vestimenta estricto, solo viste de forma cómoda y presentable para la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Habrá refrigerios durante el evento?", respuesta: "Sí, ofreceremos refrigerios gratuitos para los asistentes en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo reservar una cita para después del evento?", respuesta: "Sí, nuestros abogados pueden agendarte una cita para consultas más detalladas tras el evento en la Universidad San Buenaventura Cali." },
  { pregunta: "¿El evento cuenta con estacionamiento?", respuesta: "Sí, la sede de la Universidad San Buenaventura Cali cuenta con estacionamiento para visitantes." },
  { pregunta: "¿Se entregarán certificados de asistencia?", respuesta: "No se entregan certificados en este evento en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo asistir si no soy residente de Cali?", respuesta: "Sí, el evento está abierto a todos sin importar su ciudad de residencia, en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Cuál es el objetivo principal del LegalDay SanBue?", respuesta: "Brindar orientación legal gratuita y facilitar el acceso a información jurídica en Cali, sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿El asistente virtual está disponible durante el evento?", respuesta: "Sí, puedes hacer tus preguntas al asistente virtual en cualquier momento durante el evento en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Qué sucede si no puedo asistir al LegalDay?", respuesta: "Puedes contactarnos posteriormente para agendar una consulta, especialmente para la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Los abogados atenderán casos complejos?", respuesta: "En el evento se brindan orientaciones generales; para casos complejos se agenda consulta posterior en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Hay límite de personas que pueden asistir?", respuesta: "No, el evento es abierto y con entrada libre en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Dónde puedo encontrar más información sobre el LegalDay?", respuesta: "Puedes escribirnos al asistente virtual o visitar nuestra página web para la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo participar si soy estudiante de derecho?", respuesta: "¡Por supuesto! El evento en la Universidad San Buenaventura Cali es ideal para estudiantes y público general." },
  { pregunta: "¿Habrá traductores o accesibilidad para personas con discapacidad?", respuesta: "Se están haciendo los arreglos para garantizar accesibilidad en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo asistir con niños?", respuesta: "Sí, puedes traer niños, aunque recomendamos supervisión durante el evento en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Habrá actividades para jóvenes o estudiantes?", respuesta: "Sí, tendremos actividades y charlas adecuadas para jóvenes en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Cómo puedo contactar a un abogado después del evento?", respuesta: "Podemos proporcionarte información de contacto y agenda para consultas posteriores desde la Universidad San Buenaventura Cali." },
  { pregunta: "¿El evento respeta protocolos de bioseguridad?", respuesta: "Sí, cumplimos con todas las normas vigentes en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿El LegalDay se realiza todos los años?", respuesta: "Sí, es un evento anual organizado por Buffet Jurídico SanBue en Cali, sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo hacer consultas en línea si no puedo asistir?", respuesta: "Actualmente el evento es presencial en la Universidad San Buenaventura Cali, pero ofrecemos consultas en línea bajo cita." },
  { pregunta: "¿Qué debo hacer si pierdo el evento?", respuesta: "Puedes escribirnos al asistente para recibir materiales o información relacionada con la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Habrá obsequios o material educativo?", respuesta: "Sí, entregaremos material informativo gratuito a los asistentes en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Cómo puedo enviar preguntas antes del evento?", respuesta: "Puedes usar el asistente virtual para enviar tus preguntas anticipadamente para la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Se entregarán premios o reconocimientos?", respuesta: "No hay premios, el enfoque es informativo y de asesoría en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo hacer preguntas anónimas?", respuesta: "Sí, el asistente virtual permite consultas anónimas para el evento en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Habrá conexión WiFi en la sede?", respuesta: "Sí, habrá WiFi gratuito para los asistentes en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Qué debo hacer para participar en las charlas?", respuesta: "Solo asistir y participar durante las sesiones en la Universidad San Buenaventura Cali, no es necesario registro." },
  { pregunta: "¿Cómo llego en transporte público a la sede?", respuesta: "La sede de la Universidad San Buenaventura Cali está bien conectada con rutas de buses y transporte público." },
  { pregunta: "¿Puedo sugerir temas para futuras charlas?", respuesta: "Sí, estamos abiertos a sugerencias y feedback para futuros eventos en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Cuánto tiempo duran las consultas gratuitas?", respuesta: "Las consultas en el evento son breves, orientadas a resolver dudas puntuales en la Universidad San Buenaventura Cali." },
  { pregunta: "¿El evento es solo para personas mayores de edad?", respuesta: "No, está abierto a todo público, incluyendo jóvenes y adultos en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Se puede grabar o tomar fotos durante el evento?", respuesta: "Sí, pero respetando la privacidad y normas del evento en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Habrá representantes de otras instituciones?", respuesta: "Sí, colaboramos con varias instituciones legales y sociales en Cali." },
  { pregunta: "¿Puedo recibir asesoría en derecho laboral?", respuesta: "Sí, nuestros abogados ofrecen orientación en derecho laboral en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Se requiere algún requisito para asistir?", respuesta: "No, solo tu interés y ganas de informarte en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Dónde puedo dejar mis comentarios o sugerencias?", respuesta: "Puedes dejar tus comentarios al final del evento o escribir al asistente virtual para la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿Qué pasa si llego tarde al evento?", respuesta: "Puedes unirte en cualquier momento mientras el evento esté en curso en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Habrá demostraciones prácticas o casos reales?", respuesta: "Sí, algunos abogados compartirán ejemplos y casos prácticos en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo recibir información sobre otros servicios del Buffet Jurídico?", respuesta: "Sí, al final del evento podrás conocer más sobre nuestros servicios en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Hay límite de tiempo para hacer preguntas?", respuesta: "No, el evento está diseñado para responder todas las inquietudes en la Universidad San Buenaventura Cali." },
  { pregunta: "¿El evento tiene apoyo gubernamental?", respuesta: "Es organizado por Buffet Jurídico SanBue, con apoyo de socios locales en Cali." },
  { pregunta: "¿Puedo acceder a grabaciones del evento después?", respuesta: "Por el momento, no se grabará ni compartirá en línea en la sede de la Universidad San Buenaventura Cali." },
  { pregunta: "¿El evento es gratuito?", respuesta: "Sí, es totalmente gratuito en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Cómo puedo apoyar o colaborar con el evento?", respuesta: "Puedes contactarnos para conocer las opciones de colaboración en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Qué debo hacer si tengo una emergencia durante el evento?", respuesta: "El personal estará preparado para asistir en cualquier situación en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Se entregarán kits de bienvenida?", respuesta: "Sí, los asistentes recibirán un kit con material informativo en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Habrá servicio de traducción para personas extranjeras?", respuesta: "Actualmente no, pero esperamos implementar esto en futuras ediciones en la Universidad San Buenaventura Cali." },
  { pregunta: "¿Puedo preguntar sobre trámites legales comunes?", respuesta: "Sí, ese es uno de los objetivos del LegalDay en la Universidad San Buenaventura Cali." },
  {
    pregunta: "¿Quiénes serán los ponentes en el LegalDay SanBue?",
    respuesta: "Los ponentes serán abogados especializados del Buffet Jurídico SanBue con experiencia en derecho civil, laboral, familiar y más, en la sede Universidad San Buenaventura, Cali."
  },
  {
    pregunta: "¿Qué perfiles tienen los abogados que darán las charlas?",
    respuesta: "Nuestros ponentes son profesionales con amplia trayectoria en asesoría legal y litigios, comprometidos con la comunidad en la Universidad San Buenaventura, Cali."
  },
  {
    pregunta: "¿Habrá abogados especializados en derecho laboral?",
    respuesta: "Sí, varios ponentes están especializados en derecho laboral y resolverán dudas durante el evento en la Universidad San Buenaventura, Cali."
  },
  {
    pregunta: "¿Cuántos abogados estarán participando como ponentes?",
    respuesta: "Contaremos con un equipo de aproximadamente 8 a 10 abogados expertos en distintas áreas del derecho en la Universidad San Buenaventura, Cali."
  },
  {
    pregunta: "¿Los ponentes son locales de Cali?",
    respuesta: "Sí, la mayoría de los abogados ponentes son de Cali o tienen amplia experiencia trabajando en la región, en la sede Universidad San Buenaventura."
  },
  {
    pregunta: "¿Se podrán hacer preguntas a los ponentes durante las charlas?",
    respuesta: "Sí, el evento está diseñado para la interacción directa con los ponentes en la Universidad San Buenaventura, Cali."
  },
  {
    pregunta: "¿Habrá ponentes invitados externos al Buffet Jurídico?",
    respuesta: "Para esta edición, todos los ponentes son parte del equipo SanBue, sede Universidad San Buenaventura, Cali."
  },
  {
    pregunta: "¿Los ponentes tienen experiencia en casos comunitarios?",
    respuesta: "Sí, varios ponentes trabajan activamente en asesoría legal comunitaria en Cali y alrededores."
  },
  {
    pregunta: "¿Puedo solicitar un ponente específico para una consulta?",
    respuesta: "Podemos ayudarte a agendar con un ponente especializado después del evento en la Universidad San Buenaventura, Cali."
  },
  {
    pregunta: "¿Los ponentes darán materiales o guías durante sus charlas?",
    respuesta: "Sí, entregarán material informativo y guías para que puedas consultar en la Universidad San Buenaventura, Cali."
  },
  {
    pregunta: "¿Los ponentes hablan otros idiomas?",
    respuesta: "La mayoría de los ponentes hablan español; algunos tienen conocimientos básicos de inglés."
  },
  {
    pregunta: "¿Los ponentes están certificados y tienen licencia para ejercer?",
    respuesta: "Sí, todos los ponentes cuentan con certificación profesional y licencia vigente para ejercer en Colombia."
  },
  {
    pregunta: "¿Puedo seguir contactando a los ponentes después del LegalDay?",
    respuesta: "Claro, te proporcionaremos información para contacto y seguimiento en la sede Universidad San Buenaventura, Cali."
  },
  {
    pregunta: "¿Habrá ponentes jóvenes o estudiantes de derecho participando?",
    respuesta: "Participan principalmente abogados profesionales, pero ocasionalmente contamos con apoyo de estudiantes en prácticas."
  }
];

module.exports = { corpus };