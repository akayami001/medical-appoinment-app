const GoogleMap = () => {
  return (
    <iframe
      className="border-none my-20 mb-20"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669535!2d-0.2664033999507271!3d51.52873980503857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondra!5e0!3m2!1str!2suk!4v1714655406296!5m2!1str!2suk"
      width="100%"
      height="350"
      style={{
        allowFullScreen: "",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
      }}
    />
  );
};

export default GoogleMap;
