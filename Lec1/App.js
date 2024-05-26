const h = document.createElement("h1");
            h.innerHTML = "Header";
            document.getElementById("header").appendChild(h);

            const heading = React.createElement("h1",
                {
                    id: 'title',
                },
                "Heading 1"
            );
            const heading2 = React.createElement("h2",
                {
                    id: 'title',
                },
                "Heading 2"
            );
            
            const container = React.createElement("div", {
                id: "container",
            }, [heading, heading2]);

            const r2 = ReactDOM.createRoot(document.getElementById("container"));

            r2.render(container);

            console.log(heading);
            const root = ReactDOM.createRoot(document.getElementById("root"));
            // passing a react element inside the root
            root.render(heading);

            const footer = React.createElement("h1", {}, "Footer");
            const r1 = ReactDOM.createRoot(document.getElementById('footer'));
            r1.render(footer)