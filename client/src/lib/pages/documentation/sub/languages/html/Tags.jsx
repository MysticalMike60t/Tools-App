import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tags = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Select all <tr> elements inside the table
    const tableRows = document.querySelectorAll("table tbody tr");

    tableRows.forEach((row) => {
      // Select the <td> containing the tag name
      const tagCell = row.querySelector("td:first-child");
      if (tagCell) {
        const tagName = tagCell.textContent.toLowerCase();

        // Check if the tag name includes the search query
        if (tagName.includes(query)) {
          // Show the row if the query matches
          row.style.display = "table-row";
        } else {
          // Hide the row if the query doesn't match
          row.style.display = "none";
        }
      }
    });
  };
  return (
    <>
      <h1>
        <Link to="/documentation/languages/html#tags">Tags</Link>
      </h1>
      <div className="input">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <p className="body">
        <table>
          <tbody>
            <tr>
              <th style={{ width: "25%" }}>Tag</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>&lt;!--...--&gt;</td>
              <td>Defines a comment</td>
            </tr>
            <tr>
              <td>&lt;!DOCTYPE&gt;&nbsp;</td>
              <td>Defines the document type</td>
            </tr>
            <tr>
              <td>&lt;a&gt;</td>
              <td>Defines a hyperlink</td>
            </tr>
            <tr>
              <td>&lt;abbr&gt;</td>
              <td>Defines an abbreviation or an acronym</td>
            </tr>
            <tr>
              <td>&lt;acronym&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5. Use &lt;abbr&gt; instead.
                  <br />
                </span>
                Defines an acronym
              </td>
            </tr>
            <tr>
              <td>&lt;address&gt;</td>
              <td>
                Defines contact information for the author/owner of a document
              </td>
            </tr>
            <tr>
              <td>&lt;applet&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5. Use &lt;object&gt; instead.
                  <br />
                </span>
                Defines an embedded applet
              </td>
            </tr>
            <tr>
              <td>&lt;area&gt;</td>
              <td>Defines an area inside an image map</td>
            </tr>
            <tr>
              <td class="html5badge">&lt;article&gt;</td>
              <td>Defines an article</td>
            </tr>
            <tr>
              <td class="html5badge">&lt;aside&gt;</td>
              <td>Defines content aside from the page content</td>
            </tr>
            <tr>
              <td class="html5badge">&lt;audio&gt;</td>
              <td>Defines embedded sound content</td>
            </tr>
            <tr>
              <td>&lt;b&gt;</td>
              <td>Defines bold text</td>
            </tr>
            <tr>
              <td>&lt;base&gt;</td>
              <td>
                Specifies the base URL/target for all relative URLs in a
                document
              </td>
            </tr>
            <tr>
              <td>&lt;basefont&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5. Use CSS instead.
                  <br />
                </span>
                Specifies a default color, size, and font for all text in a
                document
              </td>
            </tr>
            <tr>
              <td>&lt;bdi&gt;</td>
              <td>
                Isolates a part of text that might be formatted in a different
                direction from other text outside it
              </td>
            </tr>
            <tr>
              <td>&lt;bdo&gt;</td>
              <td>Overrides the current text direction</td>
            </tr>
            <tr>
              <td>&lt;big&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5. Use CSS instead.
                  <br />
                </span>
                Defines big text
              </td>
            </tr>
            <tr>
              <td>&lt;blockquote&gt;</td>
              <td>Defines a section that is quoted from another source</td>
            </tr>
            <tr>
              <td>&lt;body&gt;</td>
              <td>Defines the document's body</td>
            </tr>
            <tr>
              <td>&lt;br&gt;</td>
              <td>Defines a single line break</td>
            </tr>
            <tr>
              <td>&lt;button&gt;</td>
              <td>Defines a clickable button</td>
            </tr>
            <tr>
              <td>&lt;canvas&gt;</td>
              <td>
                Used to draw graphics, on the fly, via scripting (usually
                JavaScript)
              </td>
            </tr>
            <tr>
              <td>&lt;caption&gt;</td>
              <td>Defines a table caption</td>
            </tr>
            <tr>
              <td>&lt;center&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5. Use CSS instead.
                  <br />
                </span>
                Defines centered text
              </td>
            </tr>
            <tr>
              <td>&lt;cite&gt;</td>
              <td>Defines the title of a work</td>
            </tr>
            <tr>
              <td>&lt;code&gt;</td>
              <td>Defines a piece of computer code</td>
            </tr>
            <tr>
              <td>&lt;col&gt;</td>
              <td>
                Specifies column properties for each column within a
                &lt;colgroup&gt; element&nbsp;
              </td>
            </tr>
            <tr>
              <td>&lt;colgroup&gt;</td>
              <td>
                Specifies a group of one or more columns in a table for
                formatting
              </td>
            </tr>
            <tr>
              <td>&lt;data&gt;</td>
              <td>Adds a machine-readable translation of a given content</td>
            </tr>
            <tr>
              <td>&lt;datalist&gt;</td>
              <td>
                Specifies a list of pre-defined options for input controls
              </td>
            </tr>
            <tr>
              <td>&lt;dd&gt;</td>
              <td>
                Defines a description/value of a term in a description list
              </td>
            </tr>
            <tr>
              <td>&lt;del&gt;</td>
              <td>Defines text that has been deleted from a document</td>
            </tr>
            <tr>
              <td>&lt;details&gt;</td>
              <td>Defines additional details that the user can view or hide</td>
            </tr>
            <tr>
              <td>&lt;dfn&gt;</td>
              <td>
                Specifies a term that is going to be defined within the content
              </td>
            </tr>
            <tr>
              <td>&lt;dialog&gt;</td>
              <td>Defines a dialog box or window</td>
            </tr>
            <tr>
              <td>&lt;dir&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5. Use &lt;ul&gt; instead.
                  <br />
                </span>
                Defines a directory list
              </td>
            </tr>
            <tr>
              <td>&lt;div&gt;</td>
              <td>Defines a section in a document</td>
            </tr>
            <tr>
              <td>&lt;dl&gt;</td>
              <td>Defines a description list</td>
            </tr>
            <tr>
              <td>&lt;dt&gt;</td>
              <td>Defines a term/name in a description list</td>
            </tr>
            <tr>
              <td>&lt;em&gt;</td>
              <td>Defines emphasized text&nbsp;</td>
            </tr>
            <tr>
              <td>&lt;embed&gt;</td>
              <td>Defines a container for an external application</td>
            </tr>
            <tr>
              <td>&lt;fieldset&gt;</td>
              <td>Groups related elements in a form</td>
            </tr>
            <tr>
              <td class="html5badge">&lt;figcaption&gt;</td>
              <td>Defines a caption for a &lt;figure&gt; element</td>
            </tr>
            <tr>
              <td class="html5badge">&lt;figure&gt;</td>
              <td>Specifies self-contained content</td>
            </tr>
            <tr>
              <td>&lt;font&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5. Use CSS instead.
                  <br />
                </span>
                Defines font, color, and size for text
              </td>
            </tr>
            <tr>
              <td>&lt;footer&gt;</td>
              <td>Defines a footer for a document or section</td>
            </tr>
            <tr>
              <td>&lt;form&gt;</td>
              <td>Defines an HTML form for user input</td>
            </tr>
            <tr>
              <td>&lt;frame&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5.
                  <br />
                </span>
                Defines a window (a frame) in a frameset
              </td>
            </tr>
            <tr>
              <td>&lt;frameset&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5.
                  <br />
                </span>
                Defines a set of frames
              </td>
            </tr>
            <tr>
              <td>&lt;h1&gt; to &lt;h6&gt;</td>
              <td> Defines HTML headings</td>
            </tr>
            <tr>
              <td>&lt;head&gt;</td>
              <td>Contains metadata/information for the document</td>
            </tr>
            <tr>
              <td>&lt;header&gt;</td>
              <td>Defines a header for a document or section</td>
            </tr>
            <tr>
              <td>&lt;hgroup&gt;</td>
              <td>Defines a header and related content</td>
            </tr>
            <tr>
              <td>&lt;hr&gt;</td>
              <td> Defines a thematic change in the content</td>
            </tr>
            <tr>
              <td>&lt;html&gt;</td>
              <td>Defines the root of an HTML document</td>
            </tr>
            <tr>
              <td>&lt;i&gt;</td>
              <td>Defines a part of text in an alternate voice or mood</td>
            </tr>
            <tr>
              <td>&lt;iframe&gt;</td>
              <td>Defines an inline frame</td>
            </tr>
            <tr>
              <td>&lt;img&gt;</td>
              <td>Defines an image</td>
            </tr>
            <tr>
              <td>&lt;input&gt;</td>
              <td>Defines an input control</td>
            </tr>
            <tr>
              <td>&lt;ins&gt;</td>
              <td>Defines a text that has been inserted into a document</td>
            </tr>
            <tr>
              <td>&lt;kbd&gt;</td>
              <td>Defines keyboard input</td>
            </tr>
            <tr>
              <td>&lt;label&gt;</td>
              <td>Defines a label&nbsp;for an &lt;input&gt; element</td>
            </tr>
            <tr>
              <td>&lt;legend&gt;</td>
              <td>Defines a caption for a &lt;fieldset&gt; element</td>
            </tr>
            <tr>
              <td>&lt;li&gt;</td>
              <td>Defines a list item</td>
            </tr>
            <tr>
              <td>&lt;link&gt;</td>
              <td>
                Defines the relationship between a document and an external
                resource (most used to link to style sheets)
              </td>
            </tr>
            <tr>
              <td>&lt;main&gt;</td>
              <td>Specifies the main content of a document</td>
            </tr>
            <tr>
              <td>&lt;map&gt;</td>
              <td>Defines an image map</td>
            </tr>
            <tr>
              <td>&lt;mark&gt;</td>
              <td>Defines marked/highlighted text</td>
            </tr>
            <tr>
              <td>&lt;menu&gt;</td>
              <td>Defines an unordered list</td>
            </tr>
            <tr>
              <td>&lt;meta&gt;</td>
              <td>Defines metadata about an HTML document</td>
            </tr>
            <tr>
              <td>&lt;meter&gt;</td>
              <td>
                Defines a scalar measurement within a known range (a gauge)
              </td>
            </tr>
            <tr>
              <td>&lt;nav&gt;</td>
              <td>Defines navigation links</td>
            </tr>
            <tr>
              <td>&lt;noframes&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5.
                  <br />
                </span>
                Defines an alternate content for users that do not support
                frames
              </td>
            </tr>
            <tr>
              <td>&lt;noscript&gt;</td>
              <td>
                Defines an alternate content for users that do not support
                client-side scripts
              </td>
            </tr>
            <tr>
              <td>&lt;object&gt;</td>
              <td>Defines a container for an external application</td>
            </tr>
            <tr>
              <td>&lt;ol&gt;</td>
              <td>Defines an ordered list</td>
            </tr>
            <tr>
              <td>&lt;optgroup&gt;</td>
              <td>Defines a group of related options in a drop-down list</td>
            </tr>
            <tr>
              <td>&lt;option&gt;</td>
              <td>Defines an option in a drop-down list</td>
            </tr>
            <tr>
              <td>&lt;output&gt;</td>
              <td>Defines the result of a calculation</td>
            </tr>
            <tr>
              <td>&lt;p&gt;</td>
              <td>Defines a paragraph</td>
            </tr>
            <tr>
              <td>&lt;param&gt;</td>
              <td>Defines a parameter for an object</td>
            </tr>
            <tr>
              <td>&lt;picture&gt;</td>
              <td>Defines a container for multiple image resources</td>
            </tr>
            <tr>
              <td>&lt;pre&gt;</td>
              <td>Defines preformatted text</td>
            </tr>
            <tr>
              <td>&lt;progress&gt;</td>
              <td>Represents the progress of a task</td>
            </tr>
            <tr>
              <td>&lt;q&gt;</td>
              <td>Defines a short quotation</td>
            </tr>
            <tr>
              <td>&lt;rp&gt;</td>
              <td>
                Defines what to show in browsers that do not support ruby
                annotations
              </td>
            </tr>
            <tr>
              <td>&lt;rt&gt;</td>
              <td>
                Defines an explanation/pronunciation of characters (for East
                Asian typography)
              </td>
            </tr>
            <tr>
              <td>&lt;ruby&gt;</td>
              <td>Defines a ruby annotation (for East Asian typography)</td>
            </tr>
            <tr>
              <td>&lt;s&gt;</td>
              <td>Defines text that is no longer correct</td>
            </tr>
            <tr>
              <td>&lt;samp&gt;</td>
              <td>Defines sample output from a computer program</td>
            </tr>
            <tr>
              <td>&lt;script&gt;</td>
              <td>Defines a client-side script</td>
            </tr>
            <tr>
              <td>&lt;search&gt;</td>
              <td>Defines a search section</td>
            </tr>
            <tr>
              <td>&lt;section&gt;</td>
              <td>Defines a section in a document</td>
            </tr>
            <tr>
              <td>&lt;select&gt;</td>
              <td>Defines a drop-down list</td>
            </tr>
            <tr>
              <td>&lt;small&gt;</td>
              <td>Defines smaller text</td>
            </tr>
            <tr>
              <td>&lt;source&gt;</td>
              <td>
                Defines multiple media resources for media elements
                (&lt;video&gt; and &lt;audio&gt;)
              </td>
            </tr>
            <tr>
              <td>&lt;span&gt;</td>
              <td>Defines a section in a document</td>
            </tr>
            <tr>
              <td>&lt;strike&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5. Use &lt;s&gt; instead.
                  <br />
                </span>
                Defines strikethrough text
              </td>
            </tr>
            <tr>
              <td>&lt;strong&gt;</td>
              <td>Defines important text</td>
            </tr>
            <tr>
              <td>&lt;style&gt;</td>
              <td>Defines style information for a document</td>
            </tr>
            <tr>
              <td>&lt;sub&gt;</td>
              <td>Defines subscripted text</td>
            </tr>
            <tr>
              <td>&lt;summary&gt;</td>
              <td>Defines a visible heading for a &lt;details&gt; element</td>
            </tr>
            <tr>
              <td>&lt;sup&gt;</td>
              <td>Defines superscripted text</td>
            </tr>
            <tr>
              <td>&lt;svg&gt;</td>
              <td>Defines a container for SVG graphics</td>
            </tr>
            <tr>
              <td>&lt;table&gt;</td>
              <td>Defines a table</td>
            </tr>
            <tr>
              <td>&lt;tbody&gt;</td>
              <td>Groups the body content in a table</td>
            </tr>
            <tr>
              <td>&lt;td&gt;</td>
              <td>Defines a cell in a table</td>
            </tr>
            <tr>
              <td>&lt;template&gt;</td>
              <td>
                Defines a container for content that should be hidden when the
                page loads
              </td>
            </tr>
            <tr>
              <td>&lt;textarea&gt;</td>
              <td>Defines a multiline input control (text area)</td>
            </tr>
            <tr>
              <td>&lt;tfoot&gt;</td>
              <td>Groups the footer content in a table</td>
            </tr>
            <tr>
              <td>&lt;th&gt;</td>
              <td>Defines a header cell in a table</td>
            </tr>
            <tr>
              <td>&lt;thead&gt;</td>
              <td>Groups the header content in a table</td>
            </tr>
            <tr>
              <td>&lt;time&gt;</td>
              <td>Defines a specific time (or datetime)</td>
            </tr>
            <tr>
              <td>&lt;title&gt;</td>
              <td>Defines a title for the document</td>
            </tr>
            <tr>
              <td>&lt;tr&gt;</td>
              <td>Defines a row in a table</td>
            </tr>
            <tr>
              <td>&lt;track&gt;</td>
              <td>
                Defines text tracks for media elements (&lt;video&gt; and
                &lt;audio&gt;)
              </td>
            </tr>
            <tr>
              <td>&lt;tt&gt;</td>
              <td>
                <span class="deprecated">
                  Not supported in HTML5. Use CSS instead.
                  <br />
                </span>
                Defines teletype text
              </td>
            </tr>
            <tr>
              <td>&lt;u&gt;</td>
              <td>
                Defines some text that is unarticulated and styled differently
                from normal text
              </td>
            </tr>
            <tr>
              <td>&lt;ul&gt;</td>
              <td>Defines an unordered list</td>
            </tr>
            <tr>
              <td>&lt;var&gt;</td>
              <td>Defines a variable</td>
            </tr>
            <tr>
              <td>&lt;video&gt;</td>
              <td>Defines embedded video content</td>
            </tr>
            <tr>
              <td>&lt;wbr&gt;</td>
              <td>Defines a possible line-break</td>
            </tr>
          </tbody>
        </table>
      </p>
    </>
  );
};

export default Tags;
