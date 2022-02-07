import MainButton from "./mainButton";

export default function Section({
    tag, 
    buttonTitle,
     buttonColor,
      buttonHref, 
      children, 
      sectionClass,
      title,
      text,
      childrenOutOfContainer
    }) {
  
    function setCls() {
        const cls = ['section']
        cls.push(sectionClass)
        return cls.join(' ')
    }

    return (
     <section className={setCls()}>
         {childrenOutOfContainer}
         
         <div className="container">
         <div className="section__wrapper">
            <p className="section__tag">{tag}</p>
            <h3 dangerouslySetInnerHTML={{__html: title}}></h3>
            <div  className="section__text" dangerouslySetInnerHTML={{__html: text}}></div>
         </div>

         <div className="section__media">
            {children}
         </div>

         

         <MainButton 
          title={buttonTitle}
          stroke={buttonColor}
          href={buttonHref}
          />
          </div>
     </section>
    )
}
