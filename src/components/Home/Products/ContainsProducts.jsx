import React ,{useState,useEffect,useRef}from 'react'
import '../../../css/Products/ContainsProducts.css'

function ContainsProducts({product}) {
    const [isOpen, setIsOpen] = useState(false);
    const popUpRef = useRef(null);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Fungsi untuk menutup pop-up saat pengguna mengklik di luar pop-up
        const handleClickOutside = (event) => {
            if (popUpRef.current && !popUpRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Menambahkan event listener saat komponen dimount
        document.addEventListener('mousedown', handleClickOutside);

        // Membersihkan event listener saat komponen akan di-unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
  return (
    <div className='Container-ContainsProducts' onClick={togglePopup}>
        <div className="Wrapper-ContainsProducts">
            <div className="pict-Contains">
            <img className='product-image' src={product.cover} />
            </div>
            <div className="title-Contains">
                <h1>{product.title}</h1>
            </div>
        </div>
        {isOpen && (
        <div className="popup" ref={popUpRef}>
          <div className="popup-content">
            <div className='button-desc'>
                <button onClick={togglePopup}>Close</button>
            </div>
            <img className='image-product-desc' src={product.image} alt="" />
            <h1 className='title-products'>{product.title}</h1>
            <span className='desc-products'>{product.description}</span>
            <div className='explanation'>
                <div className='left-explanation'>
                    <img className='cover-explanation' src={product.cover} alt="" />
                    {product.utility.map((item, index) => (
                  <li className='advantage-explanation' key={index}>{item.desc}</li>
                ))}
                </div>
                <div className='border'>
                    <hr className='line' />
                </div>
                <div className='right-explanation'>
                    <div className="ingridients">
                        <h2>Состав</h2>
                        <h3>{product.ingridients}</h3>
                    </div>
                    <div className='indications'>
                        <h2>Показания</h2>
                        <h3>{product.indications}</h3>
                    </div>
                    <div className='dosage'>
                        <h2>Дозировка и потребление</h2>
                        <h3>{product.Dosageandconsumption}</h3>
                    </div>
                </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContainsProducts