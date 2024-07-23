function Commonbtn(props){

return(




<>
<style>
{`

.btn1 {
    background-color: var(--btn1-bg);
    padding: 10px 30px;
    display: inline-block;
    font-size:var(--font-20);
    border-radius:var(--border-4);
    transition: .5s ease-in-out;
}

.btn1:hover {
    transform: translateY(-2px);

	transition: .5s ease-in-out;
}

`}
</style>

<a href="" className="btn1 text-white">{props.textbtn}</a>





</>
);



}

export default Commonbtn;